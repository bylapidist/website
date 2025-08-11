import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import storybook from "eslint-plugin-storybook";
import reactCompiler from "eslint-plugin-react-compiler";
import eslintPluginImport from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    {
        ignores: ["eslint.config.mjs", "stylelint.config.mjs", ".storybook/**"],
    },
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...storybook.configs["flat/recommended"],
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    reactCompiler.configs.recommended,
    {
        plugins: {
            import: eslintPluginImport,
        },
        settings: {
            "import/resolver": {
                typescript: {
                    project: ["./tsconfig.json"],
                },
            },
        },
        files: ["**/*.{ts,tsx,js,jsx}"],
        languageOptions: {
            parserOptions: {
                project: ["./tsconfig.json"],
                tsconfigRootDir: __dirname,
            },
        },
    },
];
