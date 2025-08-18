/** @type {import('stylelint').Config} */
export default {
    extends: ["stylelint-config-standard", "stylelint-config-css-modules"],
    customSyntax: "postcss-scss",
    rules: {
        "color-function-alias-notation": null,
        "color-hex-length": null,
        "custom-property-empty-line-before": null,
        "declaration-block-no-redundant-longhand-properties": null,
        "media-feature-range-notation": null,
        "selector-class-pattern": null,
        "property-no-unknown": [true, { ignoreProperties: [/^--/] }],
        "selector-pseudo-class-no-unknown": [
            true,
            { ignorePseudoClasses: ["global", "export"] },
        ],
        "import-notation": "string",
    },
    overrides: [
        {
            files: ["**/*.module.scss"],
            customSyntax: "postcss-scss",
            rules: {
                "selector-class-pattern": "^[a-z][a-zA-Z0-9]*$",
            },
        },
    ],
};
