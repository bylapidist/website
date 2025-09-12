import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@lapidist/design-lint";

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
}

function deepMerge(
    target: Record<string, unknown>,
    source: Record<string, unknown>,
): Record<string, unknown> {
    const output: Record<string, unknown> = { ...target };
    for (const [key, value] of Object.entries(source)) {
        if (isRecord(value) && !Array.isArray(value)) {
            const base = isRecord(output[key]) ? output[key] : {};
            output[key] = deepMerge(base, value);
        } else {
            output[key] = value;
        }
    }
    return output;
}

const __dirname = dirname(fileURLToPath(import.meta.url));

const baseTokens = JSON.parse(
    readFileSync(join(__dirname, "tokens/base.json"), "utf8"),
) as Record<string, unknown>;
const lightTokens = JSON.parse(
    readFileSync(join(__dirname, "tokens/light.json"), "utf8"),
) as Record<string, unknown>;
const darkTokens = JSON.parse(
    readFileSync(join(__dirname, "tokens/dark.json"), "utf8"),
) as Record<string, unknown>;

const light = deepMerge(baseTokens, lightTokens);
const dark = deepMerge(baseTokens, darkTokens);

export default defineConfig({
    patterns: ["components/**/*.{tsx,css,scss}", "styles/**/*.{css,scss}"],
    ignoreFiles: ["styles/tokens.css"],
    tokens: {
        default: baseTokens,
        light,
        dark,
    },
    rules: {
        "design-token/colors": "error",
        "design-token/spacing": "error",
        "design-token/border-radius": "error",
        "design-token/border-width": "error",
        "design-token/box-shadow": "error",
        "design-token/duration": "error",
        "design-token/opacity": "error",
        "design-token/z-index": "error",
        "design-token/font-size": "error",
        "design-token/font-weight": "error",
        "design-token/line-height": "error",
        "design-token/letter-spacing": "error",
        "design-token/font-family": "error",
    },
});
