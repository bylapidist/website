const React = require('react');
const {
    mergeThemes,
    defaultTheme,
    darkTheme,
    ThemeProvider
} = require('@lapidist/components');

const prefersDarkTheme =
    (typeof window !== 'undefined' &&
        window?.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) ||
    (typeof localStorage !== 'undefined' &&
        localStorage.getItem('isDarkMode') === 'true');

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
    return (
        <ThemeProvider
            {...props}
            theme={
                prefersDarkTheme
                    ? mergeThemes(defaultTheme, darkTheme)
                    : defaultTheme
            }
        >
            {element}
        </ThemeProvider>
    );
};
