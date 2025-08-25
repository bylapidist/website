import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
    stories: [
        "../**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../**/*.mdx",
        "!../content/**/*.mdx",
    ],
    addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],

    framework: {
        name: "@storybook/nextjs",
        options: {},
    },

    staticDirs: ["../public"],
};
export default config;
