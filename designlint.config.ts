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

const baseRaw = JSON.parse(
    readFileSync(join(__dirname, "tokens/base.json"), "utf8"),
) as Record<string, unknown>;
const lightRaw = JSON.parse(
    readFileSync(join(__dirname, "tokens/light.json"), "utf8"),
) as Record<string, unknown>;
const darkRaw = JSON.parse(
    readFileSync(join(__dirname, "tokens/dark.json"), "utf8"),
) as Record<string, unknown>;

function stripValues(token: unknown): unknown {
    if (isRecord(token)) {
        if ("$value" in token && Object.keys(token).length === 1) {
            const value = token.$value;
            return typeof value === "number" ? String(value) : value;
        }
        const result: Record<string, unknown> = {};
        for (const [key, value] of Object.entries(token)) {
            result[key] = stripValues(value);
        }
        return result;
    }
    return typeof token === "number" ? String(token) : token;
}

function flattenTokens(token: unknown, prefix = ""): Record<string, string> {
    const result: Record<string, string> = {};
    if (isRecord(token)) {
        for (const [key, value] of Object.entries(token)) {
            const newKey = prefix ? `${prefix}-${key}` : key;
            if (isRecord(value)) {
                Object.assign(result, flattenTokens(value, newKey));
            } else if (typeof value === "string") {
                result[newKey] = value;
            }
        }
    }
    return result;
}

function toKebab(str: string): string {
    return str
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .replace(/_/g, "-")
        .toLowerCase();
}

function buildVarNames(token: unknown, base: string): string[] {
    const names: string[] = [];
    if (isRecord(token)) {
        for (const [key, value] of Object.entries(token)) {
            const newBase = `${base}-${toKebab(key)}`;
            if (isRecord(value)) {
                names.push(...buildVarNames(value, newBase));
            } else {
                names.push(newBase);
            }
        }
    }
    return names;
}

function mapTokens(tokens: Record<string, unknown>): Record<string, unknown> {
    const typography = isRecord(tokens.typography) ? tokens.typography : {};
    const font = isRecord(typography.font) ? typography.font : {};
    const baseFont = isRecord(tokens.font) ? tokens.font : {};
    const typographyFontWeights = buildVarNames(
        stripValues(font.weight),
        "--typography-font-weight",
    );
    const baseFontWeights = buildVarNames(
        stripValues(baseFont.weight),
        "--font-weight",
    );
    const lineHeightVars = [
        ...buildVarNames(
            stripValues(typography.lineHeight),
            "--typography-line-height",
        ),
        ...buildVarNames(stripValues(typography.line), "--typography-line"),
    ];
    return {
        colors: flattenTokens(stripValues(tokens.colour)),
        spacing: flattenTokens(
            stripValues(
                isRecord(tokens.space) ? tokens.space.scale : undefined,
            ),
        ),
        borderRadius: flattenTokens(stripValues(tokens.radius)),
        borderWidths: flattenTokens(
            stripValues(
                isRecord(tokens.border) ? tokens.border.width : undefined,
            ),
        ),
        shadows: flattenTokens(
            stripValues(
                isRecord(tokens.shadow) ? tokens.shadow.elev : undefined,
            ),
        ),
        durations: flattenTokens(
            stripValues(
                isRecord(tokens.motion) ? tokens.motion.dur : undefined,
            ),
        ),
        opacity: flattenTokens(stripValues(tokens.opacity)),
        zIndex: flattenTokens(stripValues(tokens.z)),
        fontSizes: flattenTokens(stripValues(typography.size)),
        fontWeights: [...typographyFontWeights, ...baseFontWeights],
        lineHeights: lineHeightVars,
        letterSpacings: buildVarNames(
            stripValues(typography.letterSpacing),
            "--typography-letter-spacing",
        ),
        fonts: [
            ...buildVarNames(
                stripValues(font.family),
                "--typography-font-family",
            ),
            ...buildVarNames(stripValues(baseFont.family), "--font-family"),
        ],
    };
}

const baseTokens = mapTokens(baseRaw);
const light = mapTokens(deepMerge(baseRaw, lightRaw));
const dark = mapTokens(deepMerge(baseRaw, darkRaw));

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
