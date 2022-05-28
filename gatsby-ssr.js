const React = require('react');
const { defaultTheme, ThemeProvider } = require('@lapidist/components');

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
    return (
        <ThemeProvider {...props} theme={defaultTheme}>
            {element}
        </ThemeProvider>
    );
};
