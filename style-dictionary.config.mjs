import StyleDictionary from "style-dictionary";

const FILE_HEADER =
    "/**\n * Do not edit directly, this file was auto-generated.\n */\n\n";

StyleDictionary.registerFormat({
    name: "css/variables-with-dark",
    format: ({ dictionary }) => {
        const base = dictionary.allTokens.filter((t) =>
            t.filePath.endsWith("base.json"),
        );
        const light = dictionary.allTokens.filter((t) =>
            t.filePath.endsWith("light.json"),
        );
        const dark = dictionary.allTokens.filter((t) =>
            t.filePath.endsWith("dark.json"),
        );
        const toCSS = (tokens, prefix) =>
            tokens
                .map((t) => {
                    const name = t.name.replace(new RegExp(`^${prefix}-`), "");
                    return `  --${name}: ${t.value};`;
                })
                .join("\n");
        return `${FILE_HEADER}:root {\n${toCSS([...base, ...light], "light")}\n}\n\n@media (prefers-color-scheme: dark) {\n  :root:not(.light) {\n${toCSS(dark, "dark")}\n  }\n}\n\n:root.dark {\n${toCSS(dark, "dark")}\n}\n`;
    },
});

export default {
    source: ["tokens/*.json"],
    platforms: {
        css: {
            transformGroup: "css",
            buildPath: "styles/",
            files: [
                {
                    destination: "tokens.css",
                    format: "css/variables-with-dark",
                },
            ],
        },
    },
};
