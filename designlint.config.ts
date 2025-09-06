import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@lapidist/design-lint";

const __dirname = dirname(fileURLToPath(import.meta.url));
const tokensCss = readFileSync(join(__dirname, "styles/tokens.css"), "utf8");

function extractTokens(prefixes: string[]): Record<string, string> {
    const tokens: Record<string, string> = {};
    const regex = /(--[A-Za-z0-9-_]+)\s*:/g;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(tokensCss))) {
        const name = match[1];
        if (prefixes.some((p) => name.startsWith(p))) {
            tokens[name] = name;
        }
    }
    return tokens;
}
export default defineConfig({
    wrapTokensWithVar: true,
    patterns: ["components/**/*.{tsx,css,scss}", "styles/**/*.{css,scss}"],
    ignoreFiles: ["styles/tokens.css"],
    tokens: {
        colors: extractTokens(["--colour-", "--surface-"]),
        spacing: extractTokens(["--space-"]),
        borderRadius: extractTokens(["--radius-"]),
        borderWidths: extractTokens(["--border-width-"]),
        shadows: extractTokens(["--shadow-"]),
        durations: extractTokens(["--motion-dur-"]),
        opacity: extractTokens(["--opacity-"]),
        zIndex: extractTokens(["--z-"]),
        fontSizes: extractTokens(["--typography-size-"]),
        fontWeights: {
            ...extractTokens(["--font-weight-"]),
            ...extractTokens(["--typography-font-weight-"]),
        },
        lineHeights: {
            ...extractTokens(["--typography-line-"]),
            ...extractTokens(["--typography-line-height-"]),
        },
        letterSpacings: {
            ...extractTokens(["--typography-tracking-"]),
            ...extractTokens(["--typography-letter-spacing-"]),
        },
        fonts: {
            ...extractTokens(["--font-family-"]),
            ...extractTokens(["--typography-font-family-"]),
        },
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
