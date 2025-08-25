import AxeBuilder from "@axe-core/playwright";
import type { TestRunnerConfig } from "@storybook/test-runner";

const config: TestRunnerConfig = {
    async postVisit(page) {
        const accessibilityScanResults = await new AxeBuilder({ page })
            .include("#storybook-root")
            .disableRules(["select-name", "label"])
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    },
};

export default config;
