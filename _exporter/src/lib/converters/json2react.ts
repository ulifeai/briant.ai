import { VM } from 'vm2';
import { Node, Props } from '../../types/converter';

export class Json2React {
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
            return '';
        }
    }

    /**
     * Transforms a JSON node into React code, including import statements and exporting a component.
     * @param {string} componentName - The name of the React component to export.
     * @param {Node} jsonNode - The JSON representation of the React component.
     * @param {any} props - The props for the component.
     * @param {any} context - The context for expression evaluation.
     * @param {number} indentLevel - The initial indentation level.
     * @returns {string} - The complete React component code as a string.
     */
    transform(
        componentName: string,
        jsonNode: Node,
        props: any = {},
        context: any = {},
        indentLevel: number = 0
    ): string {
        // **1. Collect Import Statements**
        const imports = this.collectImports(jsonNode);

        // **2. Generate Import Statements Code**
        const importCode = this.generateImportCode(imports, indentLevel);

        // **3. Generate JSX Code**
        const jsxCode = this.jsonToReactCode(jsonNode, props, context, indentLevel + 1);

        // **4. Wrap JSX in React Component**
        const componentCode = this.wrapInComponent(componentName, jsxCode, indentLevel);

        // **5. Combine Import Statements and Component Code**
        return `${importCode}\n\n${componentCode}\n`;
    }

    /**
     * Recursively traverses the JSON node to collect all unique import statements.
     * @param {Node} node - The JSON node to traverse.
     * @param {Map<string, Set<string>>} imports - The map to store package imports and their components.
     * @returns {Map<string, Set<string>>} - The collected import statements.
     */
    private collectImports(node: Node, imports: Map<string, Set<string>> = new Map()): Map<string, Set<string>> {
        if (!node) return imports;

        switch (node.type) {
            case 'element':
            case 'component':
                if ((node as any).package && (node as any).component) {
                    const componentName = (node as any).component;
                    const packageName = (node as any).package;

                    if (!imports.has(packageName)) {
                        imports.set(packageName, new Set());
                    }
                    imports.get(packageName)!.add(componentName);
                }

                if (node.children && node.children.length > 0) {
                    node.children.forEach(child => this.collectImports(child, imports));
                }
                break;

            case 'loop':
                if (node.children && node.children.length > 0) {
                    node.children.forEach(child => this.collectImports(child, imports));
                }
                break;

            case 'conditional':
                if (node.children && node.children.length > 0) {
                    node.children.forEach(child => this.collectImports(child, imports));
                }
                if (node.else && node.else.length > 0) {
                    node.else.forEach(child => this.collectImports(child, imports));
                }
                break;

            case 'logical':
                if (node.children && node.children.length > 0) {
                    node.children.forEach(child => this.collectImports(child, imports));
                }
                break;

            case 'fragment':
                if (node.children && node.children.length > 0) {
                    node.children.forEach(child => this.collectImports(child, imports));
                }
                break;

            // Handle other node types if necessary
            default:
                break;
        }

        return imports;
    }

    /**
     * Generates import statements code from the collected imports.
     * @param {Map<string, Set<string>>} imports - The map of package imports and their components.
     * @param {number} indentLevel - The indentation level for import statements.
     * @returns {string} - The generated import statements.
     */
    private generateImportCode(imports: Map<string, Set<string>>, indentLevel: number): string {
        let importLines: string[] = [];

        imports.forEach((components, packageName) => {
            if (packageName.startsWith('.')) {
                // Assume default import for local packages
                // If multiple components are from the same local package, you may need to adjust this
                components.forEach(component => {
                    importLines.push(`${this.indent(indentLevel)}import ${component} from '${packageName}';`);
                });
            } else {
                // Assume named imports for external packages
                const componentsArray = Array.from(components);
                importLines.push(`${this.indent(indentLevel)}import { ${componentsArray.join(', ')} } from '${packageName}';`);
            }
        });

        // Optionally, add React import if not already included
        if (!imports.has('react')) {
            importLines.unshift(`${this.indent(indentLevel)}import React from 'react';`);
        }

        return importLines.join('\n');
    }

    /**
     * Wraps the generated JSX code within a React component and exports it.
     * @param {string} componentName - The name of the React component.
     * @param {string} jsxCode - The JSX code string.
     * @param {number} indentLevel - The indentation level.
     * @returns {string} - The complete React component code.
     */
    private wrapInComponent(componentName: string, jsxCode: string, indentLevel: number): string {
        return `${this.indent(indentLevel)} const ${componentName} = () => {
${this.indent(indentLevel + 1)}return (
${jsxCode}
${this.indent(indentLevel + 1)});
${this.indent(indentLevel)}};

${this.indent(indentLevel)}\nexport default ${componentName};`;
    }



    /**
     * Converts a JSON node to React JSX code.
     * @param {Node} jsonNode - The JSON node to convert.
     * @param {Props} props - The props for the component.
     * @param {any} context - The context for expression evaluation.
     * @param {number} indentLevel - The current indentation level.
     * @returns {string} - The generated JSX code.
     */
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

    /**
     * Converts an element or component node to JSX code.
     * @param {Node} node - The node to convert.
     * @param {Props} propsData - The props data.
     * @param {any} context - The context for expression evaluation.
     * @param {number} indentLevel - The current indentation level.
     * @returns {string} - The generated JSX code for the element or component.
     */
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

        return `${this.indent(indentLevel)}<${tagName}${props}>${children}</${tagName}>`;
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
                        const expression = value.slice(1, -1);
                        const evaluatedValue = this.evaluateExpression(expression, propsData, context);

                        if (typeof evaluatedValue === 'object') {
                            // For object expressions (e.g., style), stringify without quotes on keys
                            const valueStr = JSON.stringify(evaluatedValue, null, 2)
                                .replace(/"([^"]+)":/g, '$1:'); // Remove quotes from keys
                            return ` ${key}={${valueStr}}`;
                        } else if (typeof evaluatedValue === 'string') {
                            // For string expressions
                            return ` ${key}="${evaluatedValue}"`;
                        } else {
                            // For other types (number, boolean)
                            return ` ${key}={${JSON.stringify(evaluatedValue)}}`;
                        }
                    } else if (value.startsWith('{{') && value.endsWith('}}')) {
                        // Object expression (e.g., style={{...}})
                        const expression = value.slice(2, -2);
                        const evaluatedValue = this.evaluateExpression(expression, propsData, context);

                        if (typeof evaluatedValue === 'object') {
                            const valueStr = JSON.stringify(evaluatedValue, null, 2)
                                .replace(/"([^"]+)":/g, '$1:'); // Remove quotes from keys
                            return ` ${key}={${valueStr}}`;
                        } else {
                            // Fallback to string if evaluation doesn't return an object
                            return ` ${key}={${JSON.stringify(evaluatedValue)}}`;
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
                        .replace(/"([^"]+)":/g, '$1:'); // Remove quotes from keys
                    return ` ${key}={${valueStr}}`;
                } else {
                    // Other types
                    return ` ${key}={${JSON.stringify(value)}}`;
                }
            })
            .join('');
    }

    /**
     * Converts a loop node to JSX code.
     * @param {Node} node - The loop node.
     * @param {Props} props - The props data.
     * @param {any} context - The context for expression evaluation.
     * @param {number} indentLevel - The current indentation level.
     * @returns {string} - The generated JSX code for the loop.
     */
    private loopToCode(node: Node, props: Props, context: any, indentLevel: number) {
        const arrayName = node.loop?.array;
        const iterator = node.loop?.iterator ?? "key";

        const arrayData = this.evaluateExpression(arrayName ?? "", props, context);

        if (!Array.isArray(arrayData)) {
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

    /**
     * Converts a conditional node to JSX code.
     * @param {Node} node - The conditional node.
     * @param {Props} props - The props data.
     * @param {any} context - The context for expression evaluation.
     * @param {number} indentLevel - The current indentation level.
     * @returns {string} - The generated JSX code for the conditional.
     */
    private conditionalToCode(node: Node, props: Props, context: any, indentLevel: number) {
        const conditionResult = this.evaluateExpression(node.condition ?? "", props, context);

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

    /**
     * Converts a logical node to JSX code.
     * @param {Node} node - The logical node.
     * @param {Props} props - The props data.
     * @param {any} context - The context for expression evaluation.
     * @param {number} indentLevel - The current indentation level.
     * @returns {string} - The generated JSX code for the logical operation.
     */
    private logicalToCode(node: Node, props: Props, context: any, indentLevel: number) {
        const conditionResult = this.evaluateExpression(node.condition ?? "", props, context);
        console.log("CONDITIONAL ", conditionResult)
        if ((node.operator === '&&' && conditionResult) || (node.operator === '||' && !conditionResult)) {
            return (node.children ?? [])
                .map(child => this.jsonToReactCode(child, props, context, indentLevel))
                .join('\n');
        } else {
            return '';
        }
    }

    /**
     * Converts a fragment node to JSX code.
     * @param {Node} node - The fragment node.
     * @param {Props} props - The props data.
     * @param {any} context - The context for expression evaluation.
     * @param {number} indentLevel - The current indentation level.
     * @returns {string} - The generated JSX code for the fragment.
     */
    private fragmentToCode(node: Node, props: Props, context: any, indentLevel: number): string {
        return (node.children ?? [])
            .map(child => this.jsonToReactCode(child, props, context, indentLevel))
            .join('\n');
    }
}
