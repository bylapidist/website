// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import path, { dirname } from "path";
import type { StorybookConfig } from "@storybook/nextjs-vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
    stories: [
        "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../components/**/*.mdx",
        "../hooks/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../hooks/**/*.mdx",
    ],
    addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
    framework: {
        name: "@storybook/nextjs-vite",
        options: {},
    },
    staticDirs: ["../public"],
    webpackFinal: async (config) => {
        config.resolve = config.resolve || {};
        config.resolve.alias = config.resolve.alias || {};
        config.resolve.alias["server-only"] = path.resolve(
            __dirname,
            "server-only.ts",
        );
        return config;
    },
};
export default config;
