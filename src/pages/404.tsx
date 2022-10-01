import React from 'react';
import { Heading, Link, Box } from '@lapidist/components';
import IndexLayout from '../layouts';

const NotFoundPage = (): JSX.Element => (
    <IndexLayout>
        <Box>
            <Heading size={2}>Page not found</Heading>
            <Link href="/">Return home</Link>
        </Box>
    </IndexLayout>
);

export default NotFoundPage;
