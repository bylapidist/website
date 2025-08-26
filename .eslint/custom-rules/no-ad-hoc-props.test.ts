import type { RuleDefinition, RuleDefinitionTypeOptions } from "@eslint/core";
import { RuleTester } from "eslint";
import { test } from "vitest";
import rule from "./no-ad-hoc-props.mjs";

const testerRule = rule as unknown as RuleDefinition<RuleDefinitionTypeOptions>;

test("no-ad-hoc-props rule flags string literals", () => {
    const ruleTester = new RuleTester({
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
                ecmaFeatures: { jsx: true },
            },
        },
    });

    ruleTester.run("no-ad-hoc-props", testerRule, {
        valid: ["const C = () => <div size={size} variant={variant} />;"],
        invalid: [
            {
                code: 'const C = () => <div size="sm" variant="primary" />;',
                errors: [
                    { messageId: "noString", data: { prop: "size" } },
                    { messageId: "noString", data: { prop: "variant" } },
                ],
            },
        ],
    });
});
