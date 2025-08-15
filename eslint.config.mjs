import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslintPluginImport from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactCompiler from "eslint-plugin-react-compiler";
import storybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    {
        ignores: [
            "eslint.config.mjs",
            "stylelint.config.mjs",
            "postcss.config.cjs",
            "storybook-static/**",
            ".storybook/**",
            ".next/**",
            "out/**",
        ],
    },
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...storybook.configs["flat/recommended"],
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    reactCompiler.configs.recommended,
    {
        rules: {
            ...jsxA11y.configs.strict.rules,
        },
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
