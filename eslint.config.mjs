import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import eslintPluginImport from "eslint-plugin-import";
import "eslint-import-resolver-typescript";
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
            "style-dictionary.config.mjs",
            "postcss.config.cjs",
            "storybook-static/**",
            ".storybook/**",
            ".next/**",
            "out/**",
            "next-env.d.ts",
        ],
    },
    ...compat.config({
        extends: ["next", "next/core-web-vitals", "next/typescript"],
    }),
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...storybook.configs["flat/recommended"],
    reactCompiler.configs.recommended,
    {
        rules: {
            ...jsxA11y.configs.strict.rules,
        },
        plugins: {
            import: eslintPluginImport,
            "@next/next": nextPlugin,
        },
        settings: {
            "import/resolver": {
                typescript: {
                    project: ["./tsconfig.json"],
                },
            },
        },
        files: ["**/*.{ts,tsx,js,jsx,mjs}"],
        languageOptions: {
            parserOptions: {
                project: ["./tsconfig.json"],
                tsconfigRootDir: __dirname,
            },
        },
    },
];
