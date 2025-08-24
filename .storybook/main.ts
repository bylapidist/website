import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
    stories: ["../**/*.stories.@(js|jsx|mjs|ts|tsx)", "../**/*.mdx"],
    addons: ["@storybook/addon-a11y"],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    staticDirs: ["../public"],
};
export default config;
