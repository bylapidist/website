import React from 'react';
import { Text, Heading, Link } from '@lapidist/components';
import IndexLayout from '../layouts';
import { containerStyles, headingStyles } from '../styles';

const NotFoundPage = (): JSX.Element => (
    <IndexLayout>
        <header>
            <Heading size={1} styles={headingStyles}>
                Page not found
            </Heading>
        </header>
        <Text styles={containerStyles}>
            <Link href="/">Return home</Link>
        </Text>
    </IndexLayout>
);

export default NotFoundPage;
