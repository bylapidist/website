import React from 'react';
import { Link } from '@lapidist/components';
import IndexLayout from '../layouts';
import DesktopWrapper from '../components/MainWrapper';
import LinkWrapper from '../components/LinkWrapper';
import PageTitle from '../components/PageTitle';

const NotFoundPage = (): JSX.Element => (
    <IndexLayout>
        <header>
            <PageTitle>Page Not Found</PageTitle>
        </header>
        <DesktopWrapper>
            <LinkWrapper>
                <Link title="Return Home" href="/" />
            </LinkWrapper>
        </DesktopWrapper>
    </IndexLayout>
);

export default NotFoundPage;
