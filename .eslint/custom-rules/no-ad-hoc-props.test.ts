import { RuleTester } from "eslint";
import { test } from "vitest";
import rule from "./no-ad-hoc-props.mjs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const testerRule: any = rule;

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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
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
