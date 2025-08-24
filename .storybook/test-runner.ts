import { checkA11y, injectAxe } from "@axe-core/playwright";
import type { TestRunnerConfig } from "@storybook/test-runner";

const config: TestRunnerConfig = {
    async preVisit(page) {
        await injectAxe(page);
    },
    async postVisit(page) {
        await checkA11y(page, "#storybook-root");
    },
};

export default config;
