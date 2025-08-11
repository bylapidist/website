/** @type {import('stylelint').Config} */
export default {
    extends: ["stylelint-config-standard", "stylelint-config-css-modules"],
    rules: {
        "color-function-alias-notation": null,
        "color-hex-length": null,
        "custom-property-empty-line-before": null,
        "declaration-block-no-redundant-longhand-properties": null,
        "media-feature-range-notation": null,
        "selector-class-pattern": null,
    },
    overrides: [
        {
            files: ["**/*.module.scss"],
            rules: {
                "selector-class-pattern": "^[a-z][a-zA-Z0-9]*$",
            },
        },
    ],
};
