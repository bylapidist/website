import React from 'react';
import { Box, Link } from '@lapidist/components';
import IndexLayout from '../layouts';
import LinkWrapper from '../components/LinkWrapper';
import PageTitle from '../components/PageTitle';

const NotFoundPage = (): JSX.Element => (
    <IndexLayout>
        <header>
            <PageTitle>Page Not Found</PageTitle>
        </header>
        <Box
            styles={{
                width: 'full',
                breakpoints: {
                    md: {
                        width: '1/2'
                    }
                }
            }}
        >
            <LinkWrapper>
                <Link href="/">Return Home</Link>
            </LinkWrapper>
        </Box>
    </IndexLayout>
);

export default NotFoundPage;
