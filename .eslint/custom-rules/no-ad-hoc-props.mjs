export default {
    meta: {
        type: "problem",
        docs: {
            description: "Disallow string literals for size and variant props",
        },
        schema: [],
        messages: {
            noString:
                "Use Size/Variant enums for '{{prop}}' instead of string literals.",
        },
    },
    create(context) {
        function reportIfLiteral(prop, node, value) {
            if (
                value &&
                value.type === "Literal" &&
                typeof value.value === "string"
            ) {
                context.report({
                    node: value,
                    messageId: "noString",
                    data: { prop },
                });
            }
        }
        return {
            JSXAttribute(node) {
                const name = node.name && node.name.name;
                if (name === "size" || name === "variant") {
                    reportIfLiteral(name, node, node.value);
                }
            },
            Property(node) {
                if (node.computed) return;
                let name;
                if (node.key.type === "Identifier") {
                    name = node.key.name;
                } else if (
                    node.key.type === "Literal" &&
                    typeof node.key.value === "string"
                ) {
                    name = node.key.value;
                }
                if (name === "size" || name === "variant") {
                    reportIfLiteral(name, node, node.value);
                }
            },
        };
    },
};
