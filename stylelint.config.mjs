/** @type {import('stylelint').Config} */
export default {
    extends: ["stylelint-config-standard", "stylelint-config-css-modules"],
    customSyntax: "postcss-scss",
    rules: {
        "property-no-unknown": [true, { ignoreProperties: [/^--/] }],
        "selector-pseudo-class-no-unknown": [
            true,
            { ignorePseudoClasses: ["global", "export"] }, // CSS Modules scoping
        ],
        "import-notation": "string",
        "property-no-vendor-prefix": [
            true,
            { ignoreProperties: ["text-size-adjust"] }, // required for iOS font sizing
        ],
        "selector-class-pattern": "^[a-z][a-z0-9-]*$", // enforce kebab-case class names
    },
    overrides: [
        {
            files: ["**/*.module.scss"],
            rules: {
                "selector-class-pattern": "^[a-z][a-zA-Z0-9]*$", // allow camelCase in CSS Modules for type-safe imports
            },
        },
    ],
};
