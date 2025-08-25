import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import eslintPluginImport from "eslint-plugin-import";
import "eslint-import-resolver-typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactCompiler from "eslint-plugin-react-compiler";
import storybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";
import localPlugin from "./.eslint/index.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
    {
        ignores: [
            "eslint.config.mjs",
            "stylelint.config.mjs",
            "style-dictionary.config.mjs",
            "postcss.config.cjs",
            "storybook-static/**",
            ".storybook/**",
            ".eslint/**",
            ".next/**",
            "out/**",
            "next-env.d.ts",
        ],
    },
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...storybook.configs["flat/recommended"],
    reactCompiler.configs.recommended,
    nextPlugin.flatConfig.coreWebVitals,
    jsxA11y.flatConfigs.strict,
    {
        plugins: {
            import: eslintPluginImport,
            local: localPlugin,
        },
        rules: {
            "local/no-ad-hoc-props": "error",
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
    {
        files: ["scripts/**/*.{js,mjs,ts}"],
        languageOptions: {
            globals: {
                process: "readonly",
                console: "readonly",
                setTimeout: "readonly",
                clearTimeout: "readonly",
            },
        },
    },
    {
        files: ["**/*.test.ts", "**/*.test.tsx"],
        rules: {
            "@typescript-eslint/no-unsafe-call": "off",
            "@typescript-eslint/no-unsafe-member-access": "off",
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-unsafe-argument": "off",
        },
    },
    {
        files: ["vitest.config.ts"],
        rules: {
            "@typescript-eslint/no-unsafe-call": "off",
        },
    },
];
