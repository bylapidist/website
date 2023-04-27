import React from 'react';
import { Text, Heading, Link } from '@lapidist/components';
import IndexLayout from '../layouts';

const NotFoundPage = (): JSX.Element => (
    <IndexLayout>
        <header>
            <Heading>
                Page not found
            </Heading>
        </header>
        <Text>
            <Link href="/">Return home</Link>
        </Text>
    </IndexLayout>
);

export default NotFoundPage;
