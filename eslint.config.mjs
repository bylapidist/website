import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import storybook from "eslint-plugin-storybook";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...storybook.configs["flat/recommended"],
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parserOptions: {
                project: ["./tsconfig.json"],
                tsconfigRootDir: __dirname,
            },
        },
    },
];
