import { defineConfig } from "@lapidist/design-lint";
import baseTokens from "./tokens/base.json";
import darkTokens from "./tokens/dark.json";
import lightTokens from "./tokens/light.json";

type Leaf = { value: string | number };
type TokenNode = Leaf | { [key: string]: TokenNode };

function isLeaf(node: TokenNode): node is Leaf {
    return "value" in node;
}

function flatten(node: TokenNode, prefix = ""): Record<string, string> {
    if (isLeaf(node)) {
        return { [prefix]: String(node.value) };
    }
    const result: Record<string, string> = {};
    for (const [key, val] of Object.entries(node)) {
        const name = prefix ? `${prefix}-${key}` : key;
        Object.assign(result, flatten(val, name));
    }
    return result;
}

function get(
    node: TokenNode | undefined,
    path: string[],
): TokenNode | undefined {
    return path.reduce<TokenNode | undefined>((acc, key) => {
        if (!acc || isLeaf(acc)) return undefined;
        return acc[key];
    }, node);
}

const base = baseTokens as TokenNode;
const light = (lightTokens as { light: TokenNode }).light;
const dark = (darkTokens as { dark: TokenNode }).dark;

const colorSources = [
    get(base, ["colour"]),
    get(light, ["colour"]),
    get(light, ["surface"]),
    get(dark, ["colour"]),
    get(dark, ["surface"]),
];
const colorNames = new Set<string>();
colorSources.forEach((src) => {
    if (!src) return;
    Object.keys(flatten(src)).forEach((name) => colorNames.add(name));
});
const colors = Array.from(colorNames).reduce<Record<string, string>>(
    (acc, name) => {
        acc[name] = `var(--${name})`;
        return acc;
    },
    {},
);

const borderRadius = flatten(get(base, ["radius"]) ?? { value: "" });
const borderWidths = flatten(get(base, ["border", "width"]) ?? { value: "" });
const shadows = flatten(get(base, ["shadow", "elev"]) ?? { value: "" });
const durations = flatten(get(base, ["motion", "dur"]) ?? { value: "" });
const zIndexRaw = flatten(get(base, ["z"]) ?? { value: "" });
const zIndex = Object.fromEntries(
    Object.entries(zIndexRaw).map(([k, v]) => [k, Number(v)]),
);
const fontSizes = flatten(get(base, ["typography", "size"]) ?? { value: "" });
const fontWeightsRaw = {
    ...flatten(get(base, ["font", "weight"]) ?? { value: "" }),
    ...flatten(get(base, ["typography", "font", "weight"]) ?? { value: "" }),
};
const fontWeights = Object.fromEntries(
    Object.entries(fontWeightsRaw).map(([k, v]) => [k, Number(v)]),
);
const fonts = {
    ...flatten(get(base, ["font", "family"]) ?? { value: "" }),
    ...flatten(get(base, ["typography", "font", "family"]) ?? { value: "" }),
};
const letterSpacings = flatten(
    get(base, ["typography", "letterSpacing"]) ?? { value: "" },
);
const lineHeights = {
    ...flatten(get(base, ["typography", "line"]) ?? { value: "" }),
    ...flatten(get(base, ["typography", "lineHeight"]) ?? { value: "" }),
};
const opacityRaw = flatten(get(base, ["opacity"]) ?? { value: "" });
const opacity = Object.fromEntries(
    Object.entries(opacityRaw).map(([k, v]) => [k, Number(v)]),
);
const borderColors = {
    ...flatten(get(light, ["colour", "border"]) ?? { value: "" }),
    ...flatten(get(dark, ["colour", "border"]) ?? { value: "" }),
};
const focusRing = get(base, ["border", "focus-ring"]);
const outlines = focusRing ? flatten({ "focus-ring": focusRing }) : {};

export default defineConfig({
    tokens: {
        colors,
        borderRadius,
        borderWidths,
        shadows,
        durations,
        zIndex,
        fontSizes,
        fontWeights,
        fonts,
        letterSpacings,
        lineHeights,
        opacity,
        borderColors,
        outlines,
    },
    rules: {
        "design-token/colors": "error",
        "design-token/border-radius": "error",
        "design-token/border-width": "error",
        "design-token/box-shadow": "error",
        "design-token/duration": "error",
        "design-token/z-index": "error",
        "design-token/font-size": "error",
        "design-token/font-weight": "error",
        "design-token/font-family": "error",
        "design-token/letter-spacing": "error",
        "design-token/line-height": "error",
        "design-token/opacity": "error",
        "design-token/border-color": "error",
        "design-token/outline": "error",
        "design-system/no-inline-styles": "error",
    },
});
