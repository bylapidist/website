import React from 'react';
import { Text, Heading, Link } from '@lapidist/components';
import IndexLayout from '../layouts';
import { containerStyles, headingStyles } from '../styles';

const ArticlesPage = (): JSX.Element => (
    <IndexLayout>
        <header>
            <Heading size={1} styles={headingStyles}>
                Articles
            </Heading>
        </header>
        <Text styles={containerStyles}>
            <Link href="/">Return home</Link>
        </Text>
    </IndexLayout>
);

export default ArticlesPage;
