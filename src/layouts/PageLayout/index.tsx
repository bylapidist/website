import React, { PropsWithChildren, useState } from 'react';
import { Box, ThemeProvider, Toggle } from '@lapidist/components';
import { Themes } from '@lapidist/styles';
import '@lapidist/components/style.css';
import * as styles from './styles.module.scss';

const PageLayout: React.FC<PropsWithChildren<unknown>> = ({
    children
}): JSX.Element => {
    const [theme, setTheme] = useState<Themes>('light');

    const handleToggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box className={styles.body} gutter="large">
                <Box className={styles.toggleTheme}>
                    <Toggle
                        level="tertiary"
                        size="small"
                        onToggle={handleToggleTheme}
                    >
                        🌛
                    </Toggle>
                </Box>
                <Box className={styles.container} gutter="large">
                    {children}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default PageLayout;
