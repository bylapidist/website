import React from 'react';
import { Box, Tabs } from '@lapidist/components';
import * as styles from './styles.module.scss';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Intro from '../components/Intro';
import OpenSource from '../components/OpenSource';
import Illustration from '../components/Illustration';
import PageLayout from '../layouts/PageLayout';

const IndexPage = (): JSX.Element => {
    const links = [
        {
            href: '/brett-dorrans-cv.pdf',
            target: '_blank',
            rel: 'noreferrer noopener',
            children: 'CV'
        },
        {
            href: 'https://github.com/brettdorrans',
            target: '_blank',
            rel: 'noreferrer noopener',
            children: 'GitHub'
        },
        {
            href: 'https://github.com/bylapidist',
            target: '_blank',
            rel: 'noreferrer noopener',
            children: 'Open Source'
        },
        {
            href: 'https://www.linkedin.com/in/brettdorrans',
            target: '_blank',
            rel: 'noreferrer noopener',
            children: 'LinkedIn'
        },
        {
            href: 'mailto:hello@lapidist.net',
            children: 'Email'
        }
    ];

    return (
        <PageLayout>
            <Box as="main" gutterY="large">
                <Intro />
                <Box gutterY="large">
                    <Tabs links={links} size="small" data-nosnippet />
                </Box>
                <Box className={styles.sections}>
                    <Experience />
                    <Education />
                    <OpenSource />
                    <Illustration />
                </Box>
            </Box>
        </PageLayout>
    );
};

export default IndexPage;
export { default as Head } from '../components/Head';
