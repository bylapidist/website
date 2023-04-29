import React from 'react';
import { Box, Heading, Logo } from '@lapidist/components';
import * as styles from './styles.module.scss';
import Experience from '../components/Experience';
import Intro from '../components/Intro';
import Links from '../components/Links';
import OpenSource from '../components/OpenSource';
import PageLayout from '../layouts/PageLayout';

const IndexPage = (): JSX.Element => {
    return (
        <PageLayout>
            <Box as="header">
                <Logo animation="slide" />
                <Heading as="h1" size="large" weight="bold">
                    Brett Dorrans
                </Heading>
            </Box>
            <Box as="main" gutterY="large">
                <Intro />
                <Links />
                <Box className={styles.sections}>
                    <Experience />
                    <OpenSource />
                </Box>
            </Box>
        </PageLayout>
    );
};

export default IndexPage;
export { default as Head } from '../components/Head';
