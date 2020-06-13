import React from 'react';
import { Container, Link } from '@lapidist/components';
import IndexLayout from '../layouts';
import LinkWrapper from '../components/LinkWrapper';
import PageTitle from '../components/PageTitle';

const NotFoundPage = (): JSX.Element => (
    <IndexLayout>
        <header>
            <PageTitle>Page Not Found</PageTitle>
        </header>
        <Container
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
                <Link title="Return Home" href="/" />
            </LinkWrapper>
        </Container>
    </IndexLayout>
);

export default NotFoundPage;
