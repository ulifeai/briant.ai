import { parse } from "@babel/parser";
import traverse, { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import generate from "@babel/generator";
import { promises as fs } from "fs";
import * as path from "path";

// Type Definitions
interface ImportSpecifierEntry {
    type: "named" | "default" | "namespace";
    imported?: string; // Only for named imports
    local: string;
}

interface ImportEntry {
    source: string;
    specifiers: ImportSpecifierEntry[];
}

interface ComponentNode {
    name: string;
    preReturnCode: string;
    jsx: ConverterNode;
}

interface ConvertedFile {
    imports: ImportEntry[];
    components: ComponentNode[];
}

interface ComponentData {
    preReturnCode: string;
    jsx: ConverterNode;
}

interface Props {
    [key: string]: any;
}

interface ConverterNode {
    type: string;
    name?: string;
    preReturnCode?: string;
    component?: string;
    tag?: string;
    package?: string;
    props?: Props;
    children?: ConverterNode[];
    loop?: {
        array: string;
        iterator: string;
    };
    condition?: string;
    else?: ConverterNode[];
    operator?: string;
    text?: string;
}

type JSXChild =
    | t.JSXElement
    | t.JSXFragment
    | t.JSXText
    | t.JSXExpressionContainer
    | t.JSXSpreadChild;

export class React2Json {
    private importMap: Map<string, string> = new Map();

  /**
   * Transforms React code into a JSON representation.
   * @param {string} code - The React code to transform.
   * @returns {ConvertedFile | null} - The JSON representation or null if no components are found.
   */
    public reactCodeToJson(code: string): ConvertedFile | null {
        this.importMap.clear();

        const ast = parse(code, {
            sourceType: "module",
            plugins: ["jsx", "typescript"],
        });

        const convertedFile: ConvertedFile = {
            imports: [],
            components: [],
        };

        // Traverse the AST to process ImportDeclarations and Components
        traverse(ast, {
            // Process Import Declarations
            ImportDeclaration: (path: NodePath<t.ImportDeclaration>) => {
                this.handleImportDeclaration(path.node, convertedFile.imports);
            },
            // Process Function Declarations and Variable Declarations
            enter: (path: NodePath) => {
                if (path.isFunctionDeclaration() && this.isFunctionComponent(path.node)) {
                    const components = this.extractComponents(path);
                    if (components.length > 0) {
                        convertedFile.components.push(...components);
                    }
                } else if (path.isVariableDeclaration()) {
                    const varDecl = path.node as t.VariableDeclaration;
                    varDecl.declarations.forEach((declaration) => {
                        if (
                            t.isVariableDeclarator(declaration) &&
                            declaration.init &&
                            this.isFunctionComponent(declaration.init)
                        ) {
                            const components = this.extractComponents(path);
                            if (components.length > 0) {
                                convertedFile.components.push(...components);
                            }
                        }
                    });
                }
            },
        });

        return convertedFile.components.length > 0 ? convertedFile : null;
    }

    /**
     * Determines if a node is a function component.
     * @param {t.Node | null} node - The node to check.
     * @returns {boolean} - True if it's a function component.
     */
    private isFunctionComponent(node: t.Node | null): boolean {
        if (!node) return false;
        if (
            t.isFunctionDeclaration(node) ||
            t.isFunctionExpression(node) ||
            t.isArrowFunctionExpression(node)
        ) {
            const body = node.body;

            if (t.isBlockStatement(body)) {
                // Iterate over the statements in the function body
                for (const stmt of body.body) {
                    if (t.isReturnStatement(stmt)) {
                        const argument = stmt.argument;
                        if (argument && (t.isJSXElement(argument) || t.isJSXFragment(argument))) {
                            return true;
                        }
                    }
                }
            } else {
                // For arrow functions with implicit return
                if (t.isJSXElement(body) || t.isJSXFragment(body)) {
                    return true;
                }
            }
        }
        return false;
    }



    /**
     * Extracts components from a given path.
     * @param {NodePath} path - The AST path.
     * @returns {ComponentNode[]} - An array of component nodes.
     */
    private extractComponents(path: NodePath): ComponentNode[] {
        const components: ComponentNode[] = [];

        if (path.isFunctionDeclaration()) {
            const funcDecl = path.node as t.FunctionDeclaration;
            if (funcDecl.id) {
                const componentName = funcDecl.id.name;
                const componentData = this.processFunctionBody(funcDecl.body);
                if (componentData) {
                    components.push({
                        name: componentName,
                        preReturnCode: componentData.preReturnCode,
                        jsx: componentData.jsx,
                    });
                }
            }
        } else if (path.isVariableDeclaration()) {
            const varDecl = path.node as t.VariableDeclaration;
            varDecl.declarations.forEach((declaration) => {
                if (
                    t.isVariableDeclarator(declaration) &&
                    t.isIdentifier(declaration.id) &&
                    declaration.init &&
                    this.isFunctionComponent(declaration.init)
                ) {
                    const componentName = declaration.id.name;
                    const func = declaration.init as t.FunctionExpression | t.ArrowFunctionExpression;
                    const componentData = this.processFunctionBody(func.body);
                    if (componentData) {
                        components.push({
                            name: componentName,
                            preReturnCode: componentData.preReturnCode,
                            jsx: componentData.jsx,
                        });
                    }
                }
            });
        }

        return components;
    }

    /**
     * Processes the body of a function component.
     * @param {t.BlockStatement | t.Expression} body - The function body.
     * @returns {ComponentData | null} - The component data or null.
     */
    private processFunctionBody(body: t.BlockStatement | t.Expression): ComponentData | null {
        if (t.isBlockStatement(body)) {
            const preReturnStatements: string[] = [];
            let jsxJson: ConverterNode | null = null;

            for (const stmt of body.body) {
                if (t.isReturnStatement(stmt)) {
                    const argument = stmt.argument;
                    if (argument) {
                        if (t.isJSXElement(argument)) {
                            jsxJson = this.jsxElementToJson(argument);
                        } else if (t.isJSXFragment(argument)) {
                            jsxJson = this.jsxFragmentToJson(argument);
                        }
                    }
                    break; // Stop after the first return statement
                } else {
                    const code = generate(stmt).code;
                    preReturnStatements.push(code);
                }
            }

            if (jsxJson) {
                return {
                    preReturnCode: preReturnStatements.join("\n"),
                    jsx: jsxJson,
                };
            }
        } else {
            // For arrow functions with implicit return
            if (t.isJSXElement(body)) {
                const jsxJson = this.jsxElementToJson(body);
                return {
                    preReturnCode: "",
                    jsx: jsxJson,
                };
            } else if (t.isJSXFragment(body)) {
                const jsxJson = this.jsxFragmentToJson(body);
                return {
                    preReturnCode: "",
                    jsx: jsxJson,
                };
            }
        }
        return null;
    }

    /**
     * Processes an ImportDeclaration node.
     * @param {t.ImportDeclaration} node - The node to process.
     * @param {ImportEntry[]} importList - The list to populate.
     */
    private handleImportDeclaration(node: t.ImportDeclaration, importList: ImportEntry[]) {
        const source = node.source.value;
        const specifiers: ImportSpecifierEntry[] = node.specifiers
            .map((specifier) => {
                if (t.isImportSpecifier(specifier)) {
                    return {
                        type: "named",
                        imported: (specifier.imported as t.Identifier).name,
                        local: specifier.local.name,
                    };
                } else if (t.isImportDefaultSpecifier(specifier)) {
                    return {
                        type: "default",
                        local: specifier.local.name,
                    };
                } else if (t.isImportNamespaceSpecifier(specifier)) {
                    return {
                        type: "namespace",
                        local: specifier.local.name,
                    };
                }
                return null;
            })
            .filter((spec): spec is ImportSpecifierEntry => spec !== null);

        // Update importMap
        specifiers.forEach((spec) => {
            this.importMap.set(spec.local, source);
        });

        // Add to importList
        importList.push({
            source,
            specifiers,
        });
    }

  /**
   * Converts a JSXElement node to a ConverterNode.
   * @param {t.JSXElement} node - The JSXElement node.
   * @returns {ConverterNode} - The ConverterNode representation.
   */
    private jsxElementToJson(node: t.JSXElement): ConverterNode {
        const openingElement = node.openingElement;
        const tagName = this.getJSXTagName(openingElement.name);
        const isComponent = /^[A-Z]/.test(tagName);
        const nodeType: ConverterNode["type"] = isComponent ? "component" : "element";
        const props: Record<string, any> = {};
        let className = "";
        let packageName: string | undefined;

        if (isComponent) {
            packageName = this.importMap.get(tagName);
        }

        // Process attributes
        openingElement.attributes.forEach((attr) => {
            if (t.isJSXAttribute(attr)) {
                const propName = this.getJSXTagName(attr.name);
                let propValue: any = null;

                if (attr.value) {
                    if (t.isStringLiteral(attr.value)) {
                        propValue = attr.value.value;
                    } else if (t.isJSXExpressionContainer(attr.value)) {
                        const expression = attr.value.expression;
                        const expressionStr = this.expressionToString(expression);
                        propValue = `{${expressionStr}}`;
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
                    props[propName] = propValue;
                }
            }
            // Handle JSXSpreadAttribute if needed
        });

        if (className.trim()) {
            props["className"] = className.trim();
        }

        // Process children
        const children = node.children
            .map((child: JSXChild) => this.jsxChildToJson(child))
            .flat()
            .filter((child): child is ConverterNode => child !== null);

        const elementNode: ConverterNode = {
            type: nodeType,
            ...(nodeType === "element" ? { tag: tagName } : { component: tagName }),
            ...(isComponent && packageName ? { package: packageName } : {}),
            props: Object.keys(props).length > 0 ? props : undefined,
            children: children.length > 0 ? children : undefined,
        };

        return elementNode;
    }

  /**
   * Converts a JSXFragment node to a ConverterNode.
   * @param {t.JSXFragment} node - The JSXFragment node.
   * @returns {ConverterNode} - The ConverterNode representation.
   */
    private jsxFragmentToJson(node: t.JSXFragment): ConverterNode {
        const children = node.children
            .map((child: JSXChild) => this.jsxChildToJson(child))
            .flat()
            .filter((child): child is ConverterNode => child !== null);

        const fragmentNode: ConverterNode = {
            type: "fragment",
            children: children.length > 0 ? children : undefined,
        };

        return fragmentNode;
    }

  /**
   * Converts JSX child nodes to ConverterNode.
   * @param {JSXChild} child - The JSX child node.
   * @returns {ConverterNode | null} - The ConverterNode or null.
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
            if (!t.isJSXEmptyExpression(expression)) {
                return this.expressionToJson(expression);
            }
        }
        return null;
    }

  /**
   * Converts an expression to a ConverterNode.
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
                text:
                    !t.isNullLiteral(expression) &&
                        expression.value !== null &&
                        expression.value !== undefined
                        ? expression.value.toString()
                        : "",
            };
        } else if (t.isConditionalExpression(expression)) {
            // Handle ternary expressions
            const testStr = this.expressionToString(expression.test);
            const consequentNode = this.expressionToJson(expression.consequent);
            const alternateNode = this.expressionToJson(expression.alternate);

            return {
                type: "conditional",
                condition: testStr,
                children: Array.isArray(consequentNode)
                    ? consequentNode
                    : [consequentNode],
                else: Array.isArray(alternateNode) ? alternateNode : [alternateNode],
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
                    children: Array.isArray(rightNode) ? rightNode : [rightNode],
                };
            } else {
                // Handle other logical expressions
                const expressionStr = this.expressionToString(expression);
                return {
                    type: "dynamicText",
                    text: expressionStr,
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
   * Checks if an expression is a map function.
   * @param {t.Expression} expression - The expression node.
   * @returns {boolean} - True if it's a map function call.
   */
    private isMapFunction(expression: t.Expression): boolean {
        if (t.isCallExpression(expression) || t.isOptionalCallExpression(expression)) {
            const callee = expression.callee;
            if (t.isMemberExpression(callee) || t.isOptionalMemberExpression(callee)) {
                if (t.isIdentifier(callee.property) && callee.property.name === "map") {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Handles map functions and converts them to loop nodes.
     * @param {t.CallExpression | t.OptionalCallExpression} expression - The expression node.
     * @returns {ConverterNode} - The loop ConverterNode.
     */
    private mapFunctionToJson(
        expression: t.CallExpression | t.OptionalCallExpression
    ): ConverterNode {
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
            let bodyNode: ConverterNode | null = null;

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
                children: bodyNode ? [bodyNode] : [],
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
   * Gets the tag name from a JSX element.
   * @param {t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName} name - The JSX name node.
   * @returns {string} - The tag name.
   */
    private getJSXTagName(
        name: t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName
    ): string {
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
   * Converts an expression to a string representation.
   * @param {t.Node} expression - The expression node.
   * @returns {string} - The string representation.
   */
    private expressionToString(expression: t.Node): string {
        if (!expression) {
            return "";
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
            const operator = t.isOptionalMemberExpression(expression) && expression.optional ? "?."
                : ".";
            return `${objectStr}${operator}${propertyStr}`;
        } else if (t.isCallExpression(expression) || t.isOptionalCallExpression(expression)) {
            const callee = this.expressionToString(expression.callee);
            const args = expression.arguments
                .map((arg) => this.expressionToString(arg))
                .join(", ");
            const operator = t.isOptionalCallExpression(expression) && expression.optional ? "?."
                : "";
            return `${callee}${operator}(${args})`;
        } else if (t.isStringLiteral(expression)) {
            return `"${expression.value}"`;
        } else if (t.isNumericLiteral(expression) || t.isBooleanLiteral(expression)) {
            return expression.value.toString();
        } else if (t.isNullLiteral(expression)) {
            return "null";
        } else if (t.isTemplateLiteral(expression)) {
            return generate(expression).code;
        } else if (t.isArrayExpression(expression) || t.isObjectExpression(expression)) {
            return generate(expression).code;
        } else if (
            t.isArrowFunctionExpression(expression) ||
            t.isFunctionExpression(expression)
        ) {
            return generate(expression).code;
        } else if (
            t.isBinaryExpression(expression) ||
            t.isLogicalExpression(expression) ||
            t.isConditionalExpression(expression)
        ) {
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
            return "";
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
