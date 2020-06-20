import React from 'react';
import { Box, Link, Logo, Heading, Text } from '@lapidist/components';
import IndexLayout from '../layouts';

const IndexPage = (): JSX.Element => (
    <IndexLayout>
        <header>
            <Logo styles={{ sizeWidth: 16 }} animated />
            <Heading
                size={1}
                styles={{
                    fontSize: 8,
                    fontWeight: 'black',
                    marginBottom: 12
                }}
            >
                Brett Dorrans
            </Heading>
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
            <Text
                styles={{
                    textColor: { group: 'grey', shade: 'base' },
                    marginBottom: 4
                }}
            >
                I&apos;m a Senior Software Engineer based in Glasgow, Scotland.
                Scotland. I have been building software and strong client
                relationships for over a decade.
            </Text>
            <Text>
                <Link
                    styles={{ marginRight: 4 }}
                    href="/brett-dorrans-cv-2020.pdf"
                >
                    CV
                </Link>
                <Link
                    styles={{ marginRight: 4 }}
                    href="https://github.com/brettdorrans"
                >
                    GitHub
                </Link>
                <Link
                    styles={{ marginRight: 4 }}
                    href="https://github.com/bylapidist"
                >
                    OSS GitHub
                </Link>
                <Link
                    styles={{ marginRight: 4 }}
                    href="https://www.linkedin.com/pub/brett-dorrans/28/378/714"
                >
                    LinkedIn
                </Link>
                <Link href="mailto:hello@lapidist.net">Email</Link>
            </Text>
        </Box>
    </IndexLayout>
);

export default IndexPage;
