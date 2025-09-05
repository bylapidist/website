import { defineConfig } from "@lapidist/design-lint";

const makeTokens = (names: string[]) =>
    Object.fromEntries(names.map((name) => [name.replace(/^--/, ""), name]));

const colorTokens = [
    "--colour-logo-blue",
    "--colour-logo-green",
    "--colour-logo-yellow",
    "--surface-level-0",
    "--surface-level-1",
    "--surface-level-2",
    "--surface-level-1-hover",
    "--surface-level-1-active",
    "--colour-text",
    "--colour-text-subtle",
    "--colour-border",
    "--colour-muted",
    "--colour-primary",
    "--colour-primary-hover",
    "--colour-primary-active",
    "--colour-on-primary",
    "--colour-success",
    "--colour-warning",
    "--colour-destructive",
    "--colour-info",
    "--colour-neutral",
];

const spacingTokens = [
    "--space-scale-0",
    "--space-scale-00625",
    "--space-scale-0125",
    "--space-scale-025",
    "--space-scale-050",
    "--space-scale-075",
    "--space-scale-100",
    "--space-scale-150",
    "--space-scale-200",
    "--space-scale-300",
    "--space-scale-400",
];

const borderRadiusTokens = [
    "--radius-xs",
    "--radius-s",
    "--radius-m",
    "--radius-l",
    "--radius-xl",
    "--radius-2xl",
];

const borderWidthTokens = [
    "--border-width-s",
    "--border-width-m",
    "--border-width-l",
];

const boxShadowTokens = [
    "--shadow-elev-1",
    "--shadow-elev-2",
    "--shadow-elev-3",
];

const durationTokens = [
    "--motion-dur-120",
    "--motion-dur-200",
    "--motion-dur-300",
    "--motion-dur-320",
    "--motion-dur-500",
    "--motion-dur-700",
    "--motion-dur-900",
    "--motion-dur-1000",
    "--motion-dur-1100",
];

const lineHeightTokens = [
    "--typography-line-tighter",
    "--typography-line-tight",
    "--typography-line-normal",
    "--typography-line-wide",
    "--typography-line-height-body",
    "--typography-line-height-heading-lg",
    "--typography-line-height-heading-sm",
    "--typography-line-height-code",
];

const letterSpacingTokens = [
    "--typography-letter-spacing-body",
    "--typography-letter-spacing-small",
    "--typography-letter-spacing-caps",
];

const fontFamilyTokens = ["--font-family-header", "--font-family-body"];

const fontWeightTokens = [
    "--font-weight-regular",
    "--font-weight-semibold",
    "--typography-font-weight-100",
    "--typography-font-weight-200",
    "--typography-font-weight-300",
    "--typography-font-weight-400",
    "--typography-font-weight-500",
    "--typography-font-weight-600",
    "--typography-font-weight-700",
    "--typography-font-weight-800",
    "--typography-font-weight-900",
];

const fontSizeTokens = [
    "--typography-size-100",
    "--typography-size-200",
    "--typography-size-300",
    "--typography-size-400",
    "--typography-size-500",
    "--typography-size-600",
    "--typography-size-700",
    "--typography-size-body",
    "--typography-size-small",
    "--typography-size-lead",
    "--typography-size-h6",
    "--typography-size-h5",
    "--typography-size-h4",
    "--typography-size-h3",
    "--typography-size-h2",
    "--typography-size-h1",
];

const zIndexTokens = ["--z-negative", "--z-1", "--z-2", "--z-3"];

const opacityTokens = [
    "--opacity-0",
    "--opacity-10",
    "--opacity-20",
    "--opacity-30",
    "--opacity-40",
    "--opacity-50",
    "--opacity-60",
    "--opacity-70",
    "--opacity-80",
    "--opacity-90",
    "--opacity-100",
];

const outlineTokens = ["--border-focus-ring"];

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default defineConfig({
    wrapTokensWithVar: true,
    ignoreFiles: [
        "**/*.config.*",
        "**/*.ts",
        "**/*.tsx",
        "**/*.js",
        "**/*.jsx",
        "**/*.mjs",
        "**/globals.d.ts",
        "**/setup-tests.ts",
        "**/playwright.config.ts",
        "**/vitest.config.ts",
        "**/.eslint/**",
        ".storybook/**",
        "app/error.tsx",
        "app/**/twitter-image.tsx",
        "app/**/opengraph-image.tsx",
        "styles/tokens.css",
    ],
    tokens: {
        colors: makeTokens(colorTokens),
        borderColors: makeTokens(colorTokens),
        spacing: makeTokens(spacingTokens),
        borderRadius: makeTokens(borderRadiusTokens),
        borderWidths: makeTokens(borderWidthTokens),
        shadows: makeTokens(boxShadowTokens),
        durations: makeTokens(durationTokens),
        lineHeights: makeTokens(lineHeightTokens),
        letterSpacings: makeTokens(letterSpacingTokens),
        fonts: makeTokens(fontFamilyTokens),
        fontWeights: makeTokens(fontWeightTokens),
        fontSizes: makeTokens(fontSizeTokens),
        zIndex: makeTokens(zIndexTokens),
        opacity: makeTokens(opacityTokens),
        outlines: makeTokens(outlineTokens),
    },
    rules: {
        "design-token/colors": "error",
        "design-token/border-color": "error",
        "design-token/spacing": "error",
        "design-token/border-radius": "error",
        "design-token/border-width": "error",
        "design-token/box-shadow": "error",
        "design-token/duration": "error",
        "design-token/line-height": "error",
        "design-token/letter-spacing": "error",
        "design-token/font-family": "error",
        "design-token/font-size": "error",
        "design-token/font-weight": "error",
        "design-token/z-index": "error",
        "design-token/opacity": "error",
        "design-token/outline": "error",
    },
});
