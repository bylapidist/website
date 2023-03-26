import React from 'react';
import { Heading, Link } from '@lapidist/components';
import IndexLayout from '../layouts';

const NotFoundPage = (): JSX.Element => (
    <IndexLayout>
        <header>
            <Heading size="large">Page not found</Heading>
        </header>
        <main>
            <Link href="/">Return home</Link>
        </main>
    </IndexLayout>
);

export default NotFoundPage;
