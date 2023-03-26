const React = require('react');
const { ThemeProvider } = require('@lapidist/components');

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
    return (
        <ThemeProvider {...props} theme="light">
            {element}
        </ThemeProvider>
    );
};
