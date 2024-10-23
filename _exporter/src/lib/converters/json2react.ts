import { VM } from 'vm2';
import {
    Node,
    Props,
    ImportEntry,
    ConvertedFile,
    ComponentNode,
    ImportSpecifierEntry,
} from '../../types/converter';
import { parse } from '@babel/parser';

export class Json2React {

    // Add a property to store local variables
    localVariables: Set<string> = new Set();

    constructor() {
        // Initialize the local variables set
    }

    indent(level: number): string {
        return '  '.repeat(level);
    }




    /**
     * Evaluates a JavaScript expression within a sandboxed environment.
     * @param {string} expression - The expression to evaluate.
     * @param {any} props - The props passed to the component.
     * @param {any} context - The context for evaluation.
     * @returns {any} - The result of the evaluated expression.
     */
    evaluateExpression(expression: string, props: any, context: any): any {
        try {
            let evalExpression = expression.trim();

            // Wrap object literals in parentheses to make them valid expressions
            if (evalExpression.startsWith('{') && evalExpression.endsWith('}')) {
                evalExpression = `(${evalExpression})`;
            }

            const vm = new VM({
                sandbox: { ...props, ...context },
                timeout: 1000,
            });

            return vm.run(evalExpression) ?? "";
        } catch (error: any) {
            console.warn(`Failed to evaluate expression "${expression}": ${error.message}`);
            return null;
        }
    }

    transform(
        jsonFile: ConvertedFile,
        props: any = {},
        context: any = {},
        indentLevel: number = 0
    ): string {
        // Extract local variables from preReturnCode
        jsonFile.components.forEach((component: ComponentNode) => {
            if (component.preReturnCode) {
                this.extractLocalVariables(component.preReturnCode);
            }
        });

        const importCode = this.generateImportCodeFromEntries(jsonFile.imports, indentLevel);

        const componentCodes = jsonFile.components.map((component: ComponentNode) => {
            const jsxCode = this.jsonToReactCode(component.jsx, props, context, indentLevel + 1);

            const componentCode = this.wrapInComponent(
                component.name,
                component.preReturnCode,
                jsxCode,
                indentLevel
            );

            return componentCode;
        });

        return `"use client";\n${importCode}\n\n${componentCodes.join('\n\n')}\n`;
    }

    private extractLocalVariables(preReturnCode: string) {
        try {
            const ast = parse(preReturnCode, { sourceType: 'module', plugins: ['typescript'] });
            ast.program.body.forEach(node => {
                if (node.type === 'VariableDeclaration') {
                    node.declarations.forEach(declaration => {
                        if (declaration.id.type === 'Identifier') {
                            this.localVariables.add(declaration.id.name);
                        }
                    });
                } else if (node.type === 'FunctionDeclaration' && node.id) {
                    this.localVariables.add(node.id.name);
                }
            });
        } catch (error: any) {
            console.warn(`Failed to parse preReturnCode: ${error.message}`);
        }
    }

    private generateImportCodeFromEntries(importEntries: ImportEntry[], indentLevel: number): string {
        let importLines: string[] = [];

        const reactImported = importEntries.some((entry: ImportEntry) => entry.source === 'react');

        importEntries.forEach((importEntry: ImportEntry) => {
            const { source, specifiers } = importEntry;

            const defaultImports = specifiers
                .filter((spec: ImportSpecifierEntry) => spec.type === 'default')
                .map((spec: ImportSpecifierEntry) => spec.local);

            const namedImports = specifiers
                .filter((spec: ImportSpecifierEntry) => spec.type === 'named')
                .map((spec: ImportSpecifierEntry) => {
                    if (spec.imported && spec.imported !== spec.local) {
                        return `${spec.imported} as ${spec.local}`;
                    } else {
                        return spec.local;
                    }
                });

            const namespaceImports = specifiers
                .filter((spec: ImportSpecifierEntry) => spec.type === 'namespace')
                .map((spec: ImportSpecifierEntry) => `* as ${spec.local}`);

            const imports = [];

            if (defaultImports.length > 0) {
                imports.push(defaultImports.join(', '));
            }

            if (namedImports.length > 0) {
                imports.push(`{ ${namedImports.join(', ')} }`);
            }

            if (namespaceImports.length > 0) {
                imports.push(namespaceImports.join(', '));
            }

            importLines.push(`${this.indent(indentLevel)}import ${imports.join(', ')} from '${source}';`);
        });

        if (!reactImported) {
            importLines.unshift(`${this.indent(indentLevel)}import React from 'react';`);
        }

        return importLines.join('\n');
    }

    private wrapInComponent(
        componentName: string,
        preReturnCode: string | undefined,
        jsxCode: string,
        indentLevel: number
    ): string {
        let preReturnCodeIndented = '';
        if (preReturnCode) {
            preReturnCodeIndented = preReturnCode
                .split('\n')
                .map(line => this.indent(indentLevel + 1) + line)
                .join('\n');
        }

        return `${this.indent(indentLevel)}function ${componentName}() {
${preReturnCodeIndented ? preReturnCodeIndented + '\n' : ''}${this.indent(indentLevel + 1)}return (
${jsxCode}
${this.indent(indentLevel + 1)});
${this.indent(indentLevel)}}

${this.indent(indentLevel)}export default ${componentName};`;
    }

    jsonToReactCode(jsonNode: Node, props: Props = {}, context: any = {}, indentLevel: number = 0): string {
        if (!jsonNode) {
            return '';
        }

        switch (jsonNode.type) {
            case 'element':
            case 'component':
                return this.elementToCode(jsonNode, props, context, indentLevel);
            case 'text':
                return this.indent(indentLevel) + jsonNode.text;
            case 'dynamicText':
                const evaluatedText = this.evaluateExpression(jsonNode.text ?? "", props, context);
                return `${this.indent(indentLevel)}${(evaluatedText)}`;
            case 'loop':
                return this.loopToCode(jsonNode, props, context, indentLevel);
            case 'conditional':
                return this.conditionalToCode(jsonNode, props, context, indentLevel);
            case 'logical':
                return this.logicalToCode(jsonNode, props, context, indentLevel);
            case 'fragment':
                return this.fragmentToCode(jsonNode, props, context, indentLevel);
            default:
                console.warn(`Unhandled node type: ${jsonNode.type}`);
                return '';
        }
    }

    private elementToCode(node: Node, propsData: Props, context: any, indentLevel: number): string {
        const tagName = node.type === 'element' ? node.tag : node.component;
        const props = node.props ? this.propsToCode(node.props, propsData, context) : '';
        let children = '';

        if (node.children && node.children.length > 0) {
            const childIndentLevel = indentLevel + 1;
            const nonEmptyChildren = node.children
                .map(child => this.jsonToReactCode(child, propsData, context, childIndentLevel))
                .filter(code => code.trim() !== '');
            if (nonEmptyChildren.length > 0) {
                children = '\n' + nonEmptyChildren.join('\n') + '\n' + this.indent(indentLevel);
            }
        }

        if (children) {
            return `${this.indent(indentLevel)}<${tagName}${props}>${children}</${tagName}>`;
        } else {
            return `${this.indent(indentLevel)}<${tagName}${props} />`;
        }
    }

    /**
     * Converts props object to JSX props string.
     * @param {Props} props - The props object.
     * @param {Props} propsData - The props data.
     * @param {any} context - The context for expression evaluation.
     * @returns {string} - The JSX props string.
     */
    private propsToCode(props: Props, propsData: Props, context: any): string {
        return Object.entries(props)
            .map(([key, value]) => {
                if (typeof value === 'string') {
                    if (value.startsWith('{') && value.endsWith('}')) {
                        // Expression prop
                        const expression = value.slice(1, -1).trim();
                        const evaluatedValue = this.evaluateExpression(expression, propsData, context);

                        if (evaluatedValue !== null) {
                        // Successfully evaluated
                            if (typeof evaluatedValue === 'object') {
                                const valueStr = JSON.stringify(evaluatedValue, null, 2)
                                    .replace(/"([^"]+)":/g, '$1:');
                                return ` ${key}={${valueStr}}`;
                            } else if (typeof evaluatedValue === 'string') {
                                return ` ${key}="${evaluatedValue}"`;
                            } else {
                                return ` ${key}={${JSON.stringify(evaluatedValue)}}`;
                            }
                        } else {
                            // Evaluation failed, check if expression is a local variable
                            const variableName = expression.split(/[.\[]/)[0];
                            if (this.localVariables.has(variableName)) {
                                // Keep the expression as is
                                return ` ${key}={${expression}}`;
                            } else {
                                // Not a local variable, set property value to empty string
                                return ` ${key}=""`;
                            }
                        }
                    } else if (value.startsWith('{{') && value.endsWith('}}')) {
                        // Object expression (e.g., style={{...}})
                        const expression = value.slice(2, -2).trim();
                        const evaluatedValue = this.evaluateExpression(expression, propsData, context);

                        if (evaluatedValue !== null) {
                            const valueStr = JSON.stringify(evaluatedValue, null, 2)
                                .replace(/"([^"]+)":/g, '$1:');
                            return ` ${key}={${valueStr}}`;
                        } else {
                            const variableName = expression.split(/[.\[]/)[0];
                            if (this.localVariables.has(variableName)) {
                                // Keep the expression as is
                                return ` ${key}={{${expression}}}`;
                            } else {
                                // Not a local variable, set property value to empty string
                                return ` ${key}=""`;
                            }
                        }
                    } else {
                        // String literal prop
                        return ` ${key}="${value}"`;
                    }
                } else if (typeof value === 'boolean') {
                    // Boolean prop
                    return value ? ` ${key}` : ` ${key}={false}`;
                } else if (typeof value === 'object' && value !== null) {
                    // Object prop
                    const valueStr = JSON.stringify(value, null, 2)
                        .replace(/"([^"]+)":/g, '$1:');
                    return ` ${key}={${valueStr}}`;
                } else {
                    // Other types
                    return ` ${key}={${JSON.stringify(value)}}`;
                }
            })
            .join('');
    }    


    private loopToCode(node: Node, props: Props, context: any, indentLevel: number) {
        const arrayName = node.loop?.array;
        const iterator = node.loop?.iterator ?? 'key';

        // Evaluate the array expression
        const arrayData = this.evaluateExpression(arrayName ?? '', props, context);

        if (!Array.isArray(arrayData)) {
            console.warn(`The loop array "${arrayName}" is not an array.`);
            return '';
        }

        return arrayData
            .map((item: any, index: number) => {
                const newContext = { ...context, [iterator]: item, index };
                return (node.children ?? [])
                    .map(child => this.jsonToReactCode(child, props, newContext, indentLevel))
                    .join('\n');
            })
            .join('\n');
    }

    private conditionalToCode(node: Node, props: Props, context: any, indentLevel: number) {
        const conditionResult = this.evaluateExpression(node.condition ?? '', props, context);

        if (conditionResult) {
            return (node.children ?? [])
                .map(child => this.jsonToReactCode(child, props, context, indentLevel))
                .join('\n');
        } else if (node.else) {
            return node.else
                .map(child => this.jsonToReactCode(child, props, context, indentLevel))
                .join('\n');
        } else {
            return '';
        }
    }

    private logicalToCode(node: Node, props: Props, context: any, indentLevel: number) {
        const conditionResult = this.evaluateExpression(node.condition ?? '', props, context);
        const operator = node.operator ?? '&&';

        if ((operator === '&&' && conditionResult) || (operator === '||' && !conditionResult)) {
            return (node.children ?? [])
                .map(child => this.jsonToReactCode(child, props, context, indentLevel))
                .join('\n');
        } else {
            return '';
        }
    }

    private fragmentToCode(node: Node, props: Props, context: any, indentLevel: number): string {
        return (node.children ?? [])
            .map(child => this.jsonToReactCode(child, props, context, indentLevel))
            .join('\n');
    }
}
