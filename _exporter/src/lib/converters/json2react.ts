
import { VM } from 'vm2';
import { Node, Props } from '../../types/converter';


export class Json2React {

    imports: any = [];

    indent(level: number) {
        return '  '.repeat(level);
    }

    evaluateExpression(expression: string, props: any, context: any) {
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

    transform(jsonNode: Node, props: any = {}, context: any = {}, indentLevel: number = 4) {
        this.imports = []
        const result = this.jsonToReactCode(jsonNode, props, context, indentLevel)

        return {
            imports: this.imports,
            code: result
        }

    }

    jsonToReactCode(jsonNode: Node, props: any = {}, context: any = {}, indentLevel: number = 4): string {
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
                return this.indent(indentLevel) + evaluatedText;
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

    elementToCode(node: Node, propsData: Props, context: any, indentLevel: number) {
        const tagName = node.type === 'element' ? node.tag : node.component;
        this.imports.push(tagName)
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

    propsToCode(props: Props, propsData: any, context: any) {
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
                        const expression = value.slice(1, -1);
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

    loopToCode(node: Node, props: Props, context: any, indentLevel: number) {
        const arrayName = node.loop?.array;
        const iterator = node.loop?.iterator ?? "key";

        const arrayData = this.evaluateExpression(arrayName ?? "", props, context);

        if (!Array.isArray(arrayData)) {
            console.warn(`Expected ${arrayName} to be an array.`);
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

    conditionalToCode(node: Node, props: Props, context: any, indentLevel: number) {
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

    logicalToCode(node: Node, props: Props, context: any, indentLevel: number) {
        const conditionResult = this.evaluateExpression(node.condition ?? "", props, context);

        if ((node.operator === '&&' && conditionResult) || (node.operator === '||' && !conditionResult)) {
            return (node.children ?? [])
                .map(child => this.jsonToReactCode(child, props, context, indentLevel))
                .join('\n');
        } else {
            return '';
        }
    }

    fragmentToCode(node: Node, props: Props, context: any, indentLevel: number) {
        return (node.children ?? [])
            .map(child => this.jsonToReactCode(child, props, context, indentLevel))
            .join('\n');
    }
}
