import React from 'react';
import { orderBy } from 'lodash';
import {
    Button,
    Box,
    Heading,
    Link,
    Logo,
    Text,
    Panel,
    Tag
} from '@lapidist/components';
import { graphql, useStaticQuery } from 'gatsby';
import IndexLayout from '../layouts';
import {
    cardContainerStyles,
    cardDescriptionStyles,
    panelStyles,
    containerStyles,
    headingStyles,
    introStyles,
    linkContainerStyles,
    linkStyles,
    logoStyles
} from '../styles';

interface IRepository {
    node: {
        description: string;
        homepageUrl: string;
        id: string;
        latestRelease: {
            tagName: string;
        };
        name: string;
        updatedAt: string;
        url: string;
    };
}

interface IResponse {
    github: {
        organization: {
            repositories: {
                edges: IRepository[];
            };
        };
    };
}

const IndexPage = (): JSX.Element => {
    const {
        github: {
            organization: {
                repositories: { edges: repos }
            }
        }
    }: IResponse = useStaticQuery(graphql`
        query {
            github {
                organization(login: "bylapidist") {
                    repositories(first: 100, privacy: PUBLIC) {
                        edges {
                            node {
                                id
                                name
                                description
                                url
                                updatedAt
                                homepageUrl
                                latestRelease {
                                    tagName
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <IndexLayout>
            <header>
                <Logo styles={logoStyles} animated />
                <Heading size={1} styles={headingStyles}>
                    Brett Dorrans
                </Heading>
            </header>
            <Box styles={containerStyles}>
                <Text styles={introStyles}>
                    I&apos;m a Senior Software Engineer based in Glasgow,
                    Scotland. I have been building software and strong client
                    relationships for over a decade.
                </Text>
                <Text styles={linkContainerStyles} data-nosnippet>
                    <Link styles={linkStyles} href="/brett-dorrans-cv.pdf">
                        CV
                    </Link>
                    <Link
                        styles={linkStyles}
                        href="https://github.com/brettdorrans"
                    >
                        GitHub
                    </Link>
                    <Link
                        styles={linkStyles}
                        href="https://github.com/bylapidist"
                    >
                        OSS GitHub
                    </Link>
                    <Link
                        styles={linkStyles}
                        href="https://www.linkedin.com/in/brettdorrans"
                    >
                        LinkedIn
                    </Link>
                    <Link href="mailto:hello@lapidist.net">Email</Link>
                </Text>

                <Box styles={cardContainerStyles} data-nosnippet>
                    {repos &&
                        orderBy(repos, ['node.name'], 'asc').map((repo) => (
                            <Panel
                                key={repo.node.id}
                                heading={{
                                    title: `@lapidist/${repo.node.name}`,
                                    props: {
                                        as: 'h2',
                                        size: '4'
                                    }
                                }}
                                styles={panelStyles}
                            >
                                <Text styles={cardDescriptionStyles}>
                                    {repo.node.description}
                                </Text>
                                <Box
                                    styles={{
                                        display: 'flex',
                                        paddingTop: '4',
                                        alignItems: 'flex-end'
                                    }}
                                >
                                    <Box styles={{ flex: '1 1 auto' }}>
                                        <Tag kind="tertiary">
                                            {repo.node.latestRelease.tagName}
                                        </Tag>
                                    </Box>
                                    <Box>
                                        <Button
                                            as="a"
                                            styles={{ marginRight: '1' }}
                                            kind="primary"
                                            variant="small"
                                            href={repo.node.url}
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            GitHub
                                        </Button>
                                        <Button
                                            as="a"
                                            styles={{ marginRight: '1' }}
                                            kind="tertiary"
                                            variant="small"
                                            href={`https://www.npmjs.com/package/@lapidist/${repo.node.name}`}
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            npm
                                        </Button>
                                        {repo.node.homepageUrl && (
                                            <Button
                                                as="a"
                                                kind="tertiary"
                                                variant="small"
                                                href={repo.node.homepageUrl}
                                                target="_blank"
                                                rel="noopener"
                                            >
                                                Docs
                                            </Button>
                                        )}
                                    </Box>
                                </Box>
                            </Panel>
                        ))}
                </Box>
            </Box>
        </IndexLayout>
    );
};

export default IndexPage;
