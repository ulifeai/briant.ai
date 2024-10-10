import { parse } from "@babel/parser";
import * as t from "@babel/types";
import { promises as fs } from "fs";
import * as path from "path";

import traverse, { NodePath } from "@babel/traverse";
import generate from "@babel/generator";

import { Node as ConverterNode, Props } from '../../types/converter';

type JSXChild =
    | t.JSXElement
    | t.JSXFragment
    | t.JSXText
    | t.JSXExpressionContainer
    | t.JSXSpreadChild;

/**
 * Updated ConverterNode interface with an optional 'package' property.
 * Ensure that your '../../types/converter' reflects this addition.
 */
interface ExtendedConverterNode extends ConverterNode {
    package?: string;
}

export class React2Json {
    // **1. Import Mapping**
    /**
     * A map to store component names and their corresponding source packages.
     * This map is reset for each file processed to ensure accuracy.
     */
    private importMap: Map<string, string> = new Map();

    /**
     * Function to transform a string of React code into a JSON representation.
     * @param {string} code - The string of React code to transform.
     * @returns {ExtendedConverterNode | null} - The JSON representation of the React code or null if not found.
     */
    public reactCodeToJson(code: string): ExtendedConverterNode | null {
        // **5. Reset importMap for each file**
        this.importMap.clear();

        // Parse the code into an AST
        const ast = parse(code, {
            sourceType: "module",
            plugins: ["jsx", "typescript"],
        });

        let jsonStructure: ExtendedConverterNode | null = null;

        // Traverse the AST to process ImportDeclarations and find the ReturnStatement
        traverse(ast, {
            // **2. Processing Import Declarations**
            ImportDeclaration: (path: NodePath<t.ImportDeclaration>) => {
                this.handleImportDeclaration(path.node);
            },
            ReturnStatement: (path: NodePath<t.ReturnStatement>) => {
                const argument = path.node.argument;
                if (argument && t.isJSXElement(argument)) {
                    jsonStructure = this.jsxElementToJson(argument);
                } else if (argument && t.isJSXFragment(argument)) {
                    jsonStructure = this.jsxFragmentToJson(argument);
                }
                // Stop traversal after processing the first ReturnStatement
                path.stop();
            }
        });

        return jsonStructure;
    }

    // **2. Processing Import Declarations**
    /**
     * Processes an ImportDeclaration node to populate the importMap.
     * @param {t.ImportDeclaration} node - The ImportDeclaration AST node.
     */
    private handleImportDeclaration(node: t.ImportDeclaration) {
        const source = node.source.value; // e.g., 'react', 'antd', './CustomComponent'

        node.specifiers.forEach(specifier => {
            if (t.isImportSpecifier(specifier)) {
                // Named import: import { Button } from 'antd';
                const importedName = (specifier.imported as t.Identifier).name;
                const localName = specifier.local.name;
                this.importMap.set(localName, source);
            } else if (t.isImportDefaultSpecifier(specifier)) {
                // Default import: import React from 'react';
                const localName = specifier.local.name;
                this.importMap.set(localName, source);
            } else if (t.isImportNamespaceSpecifier(specifier)) {
                // Namespace import: import * as UI from 'ui-library';
                const localName = specifier.local.name;
                this.importMap.set(localName, source);
            }
            // You can handle more specifier types if needed
        });
    }

    /**
     * Helper function to convert a JSXElement node to a ConverterNode.
     * @param {t.JSXElement} node - The JSXElement node.
     * @returns {ExtendedConverterNode} - The ConverterNode representation with optional package info.
     */
    private jsxElementToJson(node: t.JSXElement): ExtendedConverterNode {
        const openingElement = node.openingElement;
        const tagName = this.getJSXTagName(openingElement.name);

        const isComponent = /^[A-Z]/.test(tagName);
        const nodeType: ConverterNode["type"] = isComponent ? "component" : "element";
        const props: Record<string, any> = {};
        let className = "";
        let packageName: string | undefined;

        if (isComponent) {
            // **4. Retrieve the package name from importMap**
            packageName = this.importMap.get(tagName);
        }

        // Process each attribute of the JSX element
        openingElement.attributes.forEach((attr: t.JSXAttribute | t.JSXSpreadAttribute) => {
            if (t.isJSXAttribute(attr)) {
                const propName = attr.name.name;
                let propValue: any = null;

                if (attr.value) {
                    if (t.isStringLiteral(attr.value)) {
                        propValue = attr.value.value;
                    } else if (t.isJSXExpressionContainer(attr.value)) {
                        const expression = attr.value.expression;
                        if (t.isTSAsExpression(expression)) {
                            propValue = `{${this.expressionToString(expression.expression)}}`;
                        } else {
                            const expressionStr = this.expressionToString(expression);
                            propValue = `{${expressionStr}}`;
                        }
                    } else if (t.isJSXElement(attr.value)) {
                        propValue = this.jsxElementToJson(attr.value);
                    }
                } else {
                    // For attributes without a value (e.g., <input disabled />)
                    propValue = true;
                }

                if (propName === "className" && typeof propValue === "string") {
                    className += propValue + " ";
                } else {
                    props[typeof propName == "string" ? propName : ""] = propValue;
                }
            }
            // Optionally handle JSXSpreadAttribute if needed
        });

        if (className.trim()) {
            props["className"] = className.trim();
        }

        // Recursively process children
        const children = node.children
            .map((child: JSXChild) => this.jsxChildToJson(child))
            .flat()
            .filter((child: ConverterNode | null): child is ConverterNode => child !== null);

        const elementNode: ExtendedConverterNode = {
            type: nodeType,
            ...(nodeType === "element"
                ? { tag: tagName }
                : { component: tagName }),
            ...(isComponent && packageName ? { package: packageName } : {}),
            props: Object.keys(props).length > 0 ? props : undefined,
            children: children.length > 0 ? children : undefined,
        };

        return elementNode;
    }

    /**
     * Helper function to convert a JSXFragment node to a ConverterNode.
     * @param {t.JSXFragment} node - The JSXFragment node.
     * @returns {ConverterNode} - The ConverterNode representation.
     */
    private jsxFragmentToJson(node: t.JSXFragment): ConverterNode {
        const children = node.children
            .map((child: JSXChild) => this.jsxChildToJson(child))
            .flat()
            .filter((child: ConverterNode | null): child is ConverterNode => child !== null);

        const fragmentNode: ConverterNode = {
            type: "fragment",
            children: children.length > 0 ? children : undefined,
        };

        return fragmentNode;
    }

    /**
     * Helper function to convert JSX child nodes to ConverterNode.
     * @param {JSXChild} child - The JSX child node.
     * @returns {ConverterNode | null} - The ConverterNode representation or null.
     */
    private jsxChildToJson(child: JSXChild): ConverterNode | null {
        if (t.isJSXText(child)) {
            const text = child.value;
            if (text && text.trim()) {
                return {
                    type: "text",
                    text: text.trim(),
                };
            }
        } else if (t.isJSXElement(child)) {
            return this.jsxElementToJson(child);
        } else if (t.isJSXFragment(child)) {
            return this.jsxFragmentToJson(child);
        } else if (t.isJSXExpressionContainer(child)) {
            const expression = child.expression;
            // Ensure that expression is not JSXEmptyExpression
            if (!t.isJSXEmptyExpression(expression)) {
                return this.expressionToJson(expression);
            }
            // If it's JSXEmptyExpression, return null
        }
        return null;
    }

    /**
     * Function to handle map functions and convert them to loop nodes.
     * @param {t.CallExpression | t.OptionalCallExpression} expression - The CallExpression or OptionalCallExpression node.
     * @returns {ConverterNode} - The loop ConverterNode or dynamicText node.
     */
    private mapFunctionToJson(expression: t.CallExpression | t.OptionalCallExpression): ConverterNode {
        const callee = expression.callee;
        let arrayExpression: t.Expression | null = null;
        let arrayName = "";

        if (t.isMemberExpression(callee) || t.isOptionalMemberExpression(callee)) {
            arrayExpression = callee.object;
            arrayName = this.expressionToString(arrayExpression);
        }

        const mapFunction = expression.arguments[0];

        if (
            t.isArrowFunctionExpression(mapFunction) ||
            t.isFunctionExpression(mapFunction)
        ) {
            const params: any = mapFunction.params;
            const body = mapFunction.body;

            // The iterator variable(s)
            let iterator: string | null = null;
            if (params.length >= 1 && t.isIdentifier(params[0])) {
                iterator = params[0].name;
            } else if (params.length >= 1) {
                iterator = this.expressionToString(params[0]);
            }

            // Convert the body into ConverterNode(s)
            let bodyNode: ConverterNode | ConverterNode[] | null = null;

            if (t.isBlockStatement(body)) {
                // Function body is enclosed in braces { }
                // Find return statement
                const returnStatement = body.body.find((stmt) =>
                    t.isReturnStatement(stmt)
                ) as t.ReturnStatement | undefined;
                if (returnStatement && returnStatement.argument) {
                    bodyNode = this.expressionToJson(returnStatement.argument);
                }
            } else {
                // For arrow functions with implicit return
                bodyNode = this.expressionToJson(body);
            }

            return {
                type: "loop",
                loop: {
                    array: arrayName,
                    iterator: iterator || "item",
                },
                children: bodyNode ? (Array.isArray(bodyNode) ? bodyNode : [bodyNode]) : [],
            };
        } else {
            // Not a function expression
            const expressionStr = this.expressionToString(expression);
            return {
                type: "dynamicText",
                text: expressionStr,
            };
        }
    }

    /**
     * Helper function to convert an expression to a ConverterNode.
     * @param {t.Expression} expression - The expression node.
     * @returns {ConverterNode} - The ConverterNode representation.
     */
    private expressionToJson(expression: t.Expression): ConverterNode {
        if (t.isJSXElement(expression)) {
            return this.jsxElementToJson(expression);
        } else if (t.isJSXFragment(expression)) {
            return this.jsxFragmentToJson(expression);
        } else if (
            t.isCallExpression(expression) ||
            t.isOptionalCallExpression(expression)
        ) {
            if (this.isMapFunction(expression)) {
                return this.mapFunctionToJson(expression);
            }
        }

        if (
            t.isStringLiteral(expression) ||
            t.isNumericLiteral(expression) ||
            t.isBooleanLiteral(expression) ||
            t.isNullLiteral(expression)
        ) {
            return {
                type: "text",
                text: !t.isNullLiteral(expression) && expression.value !== null && expression.value !== undefined ? expression.value.toString() : "",
            };
        } else if (t.isConditionalExpression(expression)) {
            // Handle ternary expressions
            const testStr = this.expressionToString(expression.test);
            const consequentNode = this.expressionToJson(expression.consequent);
            const alternateNode = this.expressionToJson(expression.alternate);

            return {
                type: "conditional",
                condition: testStr,
                children: consequentNode ? (Array.isArray(consequentNode) ? consequentNode : [consequentNode]) : [],
                else: alternateNode ? (Array.isArray(alternateNode) ? alternateNode : [alternateNode]) : [],
            };
        } else if (t.isLogicalExpression(expression)) {
            if (expression.operator === "&&") {
                // Handle logical AND expressions
                const testStr = this.expressionToString(expression.left);
                const rightNode = this.expressionToJson(expression.right);

                return {
                    type: "logical",
                    operator: "&&",
                    condition: testStr,
                    children: rightNode ? (Array.isArray(rightNode) ? rightNode : [rightNode]) : [],
                };
            } else if (expression.operator === "||") {
                // Handle logical OR expressions
                const leftStr = this.expressionToString(expression.left);
                const rightStr = this.expressionToString(expression.right);

                return {
                    type: "dynamicText",
                    text: `(${leftStr} || ${rightStr})`,
                };
            } else {
                // Handle other logical expressions
                const leftStr = this.expressionToString(expression.left);
                const rightStr = this.expressionToString(expression.right);
                return {
                    type: "dynamicText",
                    text: `(${leftStr} ${expression.operator} ${rightStr})`,
                };
            }
        } else if (t.isTemplateLiteral(expression)) {
            const expressionStr = this.expressionToString(expression);
            return {
                type: "dynamicText",
                text: expressionStr,
            };
        } else if (
            t.isIdentifier(expression) ||
            t.isMemberExpression(expression) ||
            t.isOptionalMemberExpression(expression)
        ) {
            const expressionStr = this.expressionToString(expression);
            return {
                type: "dynamicText",
                text: expressionStr,
            };
        } else {
            // Fallback for other expressions
            const expressionStr = this.expressionToString(expression);
            return {
                type: "dynamicText",
                text: expressionStr,
            };
        }
    }

    /**
     * Helper function to check if an expression is a map function.
     * This now includes OptionalCallExpression to handle optional chaining (?.).
     * @param {t.Expression} expression - The expression node.
     * @returns {boolean} - True if it's a map function call, false otherwise.
     */
    private isMapFunction(expression: t.Expression): boolean {
        if (t.isCallExpression(expression) || t.isOptionalCallExpression(expression)) {
            const callee = expression.callee;
            if (t.isMemberExpression(callee) || t.isOptionalMemberExpression(callee)) {
                if (
                    t.isIdentifier(callee.property) &&
                    callee.property.name === "map"
                ) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Helper function to get the tag name from a JSX element.
     * @param {t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName} name - The JSX name node.
     * @returns {string} - The tag name as a string.
     */
    private getJSXTagName(name: t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName): string {
        if (t.isJSXIdentifier(name)) {
            return name.name;
        } else if (t.isJSXMemberExpression(name)) {
            return `${this.getJSXTagName(name.object)}.${name.property.name}`;
        } else if (t.isJSXNamespacedName(name)) {
            return `${name.namespace.name}:${name.name.name}`;
        }
        return "";
    }

    /**
     * Helper function to convert an expression to a string representation.
     * @param {t.Node} expression - The expression node.
     * @returns {string} - The string representation of the expression.
     */
    private expressionToString(expression: t.Node): string {
        if (!expression) {
            return '';
        }

        if (t.isIdentifier(expression)) {
            return expression.name;
        } else if (t.isTSAsExpression(expression)) {
            return this.expressionToString(expression.expression);
        } else if (t.isMemberExpression(expression) || t.isOptionalMemberExpression(expression)) {
            const objectStr = this.expressionToString(expression.object);
            const propertyStr = t.isIdentifier(expression.property)
                ? expression.property.name
                : t.isStringLiteral(expression.property)
                    ? expression.property.value
                    : this.expressionToString(expression.property);
            const operator = t.isOptionalMemberExpression(expression) && expression.optional ? '?.' : '.';
            return `${objectStr}${operator}${propertyStr}`;
        } else if (t.isCallExpression(expression) || t.isOptionalCallExpression(expression)) {
            const callee = this.expressionToString(expression.callee);
            const args = expression.arguments.map(arg => this.expressionToString(arg)).join(', ');
            const operator = t.isOptionalCallExpression(expression) && expression.optional ? '?.' : '';
            return `${callee}${operator}(${args})`;
        } else if (t.isStringLiteral(expression)) {
            return `"${expression.value}"`;
        } else if (t.isNumericLiteral(expression) || t.isBooleanLiteral(expression)) {
            return expression.value.toString();
        } else if (t.isNullLiteral(expression)) {
            return expression.toString();
        } else if (t.isTemplateLiteral(expression)) {
            return generate(expression).code;
        } else if (t.isArrayExpression(expression) || t.isObjectExpression(expression)) {
            return generate(expression).code;
        } else if (t.isArrowFunctionExpression(expression) || t.isFunctionExpression(expression)) {
            return generate(expression).code;
        } else if (t.isBinaryExpression(expression) || t.isLogicalExpression(expression) || t.isConditionalExpression(expression)) {
            return generate(expression).code;
        } else if (t.isUnaryExpression(expression)) {
            return generate(expression).code;
        } else if (t.isSpreadElement(expression)) {
            return `...${this.expressionToString(expression.argument)}`;
        } else if (t.isJSXElement(expression)) {
            return generate(expression).code;
        } else if (t.isJSXFragment(expression)) {
            return generate(expression).code;
        } else if (t.isJSXEmptyExpression(expression)) {
            return '';
        } else {
            // Fallback to Babel's generator
            return generate(expression).code;
        }
    }

    /**
     * Function to process all files in a folder recursively.
     * @param {string} folderPath - The path to the folder.
     */
    public async processFolder(folderPath: string): Promise<void> {
        try {
            const files = await fs.readdir(folderPath);

            for (const file of files) {
                const filePath = path.join(folderPath, file);
                const stats = await fs.stat(filePath);

                if (stats.isDirectory()) {
                    // Recursively process subfolders
                    await this.processFolder(filePath);
                } else {
                    // Process file
                    const content = await fs.readFile(filePath, 'utf-8');
                    if (!filePath.endsWith(".json")) { // More reliable check
                        console.log(`Processing: ${filePath}`);
                        try {
                            const processedContent = this.reactCodeToJson(content);
                            if (processedContent) {
                                // Write output to component.json in the same directory as the input file
                                const outputPath = path.join(path.dirname(filePath), 'component.json');
                                const outputContent = JSON.stringify(processedContent, null, 2);

                                await fs.writeFile(outputPath, outputContent);
                                console.log(`Generated: ${outputPath}`);
                            } else {
                                console.warn(`No JSX found in ${filePath}. Skipping.`);
                            }
                        } catch (error: any) {
                            console.error(`Failed to process ${filePath}:`, error.message);
                        }
                    }
                }
            }
        } catch (error: any) {
            console.error(`Error reading folder ${folderPath}:`, error.message);
        }
    }
}
