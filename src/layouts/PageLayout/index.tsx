import React, { PropsWithChildren, useState } from 'react';
import {
    Box,
    Heading,
    Logo,
    ThemeProvider,
    Toggle
} from '@lapidist/components';
import * as styles from './styles.module.scss';

const PageLayout: React.FC<PropsWithChildren<unknown>> = ({
    children
}): JSX.Element => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

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
                <Box as="header" gutter="large">
                    <Logo animation="slide" />
                    <Heading
                        className={styles.name}
                        as="h1"
                        size="large"
                        weight="bold"
                    >
                        Brett Dorrans
                    </Heading>
                </Box>
                <Box className={styles.container} gutter="large">
                    {children}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default PageLayout;
