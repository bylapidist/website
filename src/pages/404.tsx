import React from 'react';
import { Heading, Link, Box, Logo } from '@lapidist/components';
import PageLayout from '../layouts/PageLayout';

const NotFoundPage = (): JSX.Element => (
    <PageLayout>
        <Box as="header">
            <Logo animation="slide" />
            <Heading as="h1" size="large" weight="bold">
                Not found
            </Heading>
        </Box>
        <Box as="main" gutterY="large">
            <Link href="/">Return home</Link>
        </Box>
    </PageLayout>
);

export default NotFoundPage;
export { default as Head } from '../components/Head';
