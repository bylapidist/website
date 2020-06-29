import React from 'react';
import { Text, Heading, Link } from '@lapidist/components';
import IndexLayout from '../layouts';

const NotFoundPage = (): JSX.Element => (
    <IndexLayout>
        <header>
            <Heading
                size={1}
                styles={{
                    fontSize: 8,
                    fontWeight: 'bold',
                    marginBottom: 12,
                    breakpoints: {
                        lg: {
                            fontSize: 8
                        }
                    }
                }}
            >
                Page not found
            </Heading>
        </header>
        <Text
            styles={{
                width: 'full',
                breakpoints: {
                    md: {
                        width: '1/2'
                    }
                }
            }}
        >
            <Link href="/">Return home</Link>
        </Text>
    </IndexLayout>
);

export default NotFoundPage;
