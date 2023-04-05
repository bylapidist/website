import React from 'react';
import Head from 'next/head';
import {
    ThemeProvider,
    Box,
    Text,
    Logo,
    Heading,
    Link
} from '@lapidist/components';
import { Themes } from '@lapidist/styles';
import { client } from '../client';
import { GET_REPOSITORIES } from '../api/query';
import Project from '../components/Project';

type Repository = {
    readonly node: {
        readonly id: string;
        readonly description: string;
        readonly homepageUrl: string;
        readonly latestRelease: {
            readonly tagName: string;
        };
        readonly name: string;
        readonly updatedAt: string;
        readonly url: string;
    }
};

type HomeProps = {
    readonly data: {
        readonly organization: {
            repositories: {
                edges: Repository[]
            }
        }
    };
};
export default function Home({ data: { organization: { repositories: { edges } } } }: HomeProps) {
    const [theme, setTheme] = React.useState<Themes>('light')

    const handleToggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <>
            <Head>
                <title>Brett Dorrans</title>
                <link
                    rel="canonical"
                    href="https://lapidist.net/"
                    data-baseprotocol="https:"
                    data-basehost="lapidist.net"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="description"
                    content="Brett Dorrans: Senior Software Engineer in Glasgow, Scotland"
                />
                <meta property="og:title" content="Brett Dorrans" />
                <meta
                    property="og:description"
                    content="Brett Dorrans: Senior Software Engineer in Glasgow, Scotland"
                />
                <meta property="og:url" content="https://lapidist.net/" />
                <meta
                    property="og:image"
                    content="https://lapidist.net/oglogo.png"
                />
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>
            <ThemeProvider className="main" as="main" theme={theme}>
                <Box as="section" className="section" gutter="large">
                    <Box as="header" gutter="large">
                        <Logo animation="slide" />
                        <Heading size="large" weight="bold">
                            Brett Dorrans
                        </Heading>
                    </Box>

                    <Box as="main" gutter="large">
                        <Text>
                            I&apos;m a Senior Software Engineer based in
                            Glasgow, Scotland. I have been building software and
                            strong client relationships for over a decade.
                        </Text>
                    </Box>

                    <Box as="footer" gutter="large" data-nosnippet>
                        <ul className="links">
                            <li>
                                <Link href="/brett-dorrans-cv.pdf">CV</Link>
                            </li>
                            <li>
                                <Link href="https://github.com/brettdorrans">
                                    GitHub
                                </Link>
                            </li>
                            <li>
                                <Link href="https://github.com/bylapidist">
                                    OSS GitHub
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/brettdorrans">
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:hello@lapidist.net">
                                    Email
                                </Link>
                            </li>
                        </ul>
                    </Box>
                </Box>

                <Box
                    as="section"
                    className="section links projects"
                    gutter="large"
                >
                    {edges && edges.map((repository) => (
                        <Project
                            key={repository.node.id}
                            title={repository.node.name}
                            description={repository.node.description}
                            version={repository.node.latestRelease.tagName}
                            links={[
                                {
                                    title: 'GitHub',
                                    href: repository.node.url
                                }
                            ]}
                        />
                    ))}
                </Box>

                {/* @TODO implement ToggleButton/Switch */}
                <Box as="section" gutter="large">
                    <Text as="label">
                        <input type="checkbox" onClick={handleToggleTheme} />
                        Dark mode
                    </Text>
                </Box>
            </ThemeProvider>
        </>
    );
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: GET_REPOSITORIES
    });

    return {
        props: {
            data,
        }
    };
}
