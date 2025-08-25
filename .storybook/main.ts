import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
    stories: [
        "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../components/**/*.mdx",
        "../hooks/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../hooks/**/*.mdx",
    ],
    addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    staticDirs: ["../public"],
};
export default config;
