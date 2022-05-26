import React from 'react';
import { orderBy } from 'lodash';
import {
    Button,
    Box,
    Flex,
    Heading,
    Link,
    Logo,
    Text,
    Panel,
    PanelHeading,
    Tag
} from '@lapidist/components';
import { graphql, useStaticQuery } from 'gatsby';
import IndexLayout from '../layouts';
import {
    cardContainerStyles,
    cardDescriptionStyles,
    cardStyles,
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

                <Flex styles={cardContainerStyles} data-nosnippet>
                    {repos &&
                        orderBy(repos, ['node.name'], 'asc').map((repo) => (
                            <Panel
                                key={repo.node.id}
                                kind="grey"
                                styles={cardStyles}
                            >
                                <PanelHeading kind="grey">
                                    @lapidist/{repo.node.name}
                                </PanelHeading>
                                <Text styles={cardDescriptionStyles}>
                                    {repo.node.description}
                                </Text>
                                <Flex styles={{ paddingTop: '4' }}>
                                    <Box styles={{ flex: '1 1 auto' }}>
                                        <Tag kind="tertiary">
                                            {repo.node.latestRelease.tagName}
                                        </Tag>
                                    </Box>
                                    <Box>
                                        <Button
                                            styles={{ marginRight: '1' }}
                                            kind="primary"
                                            variant="small"
                                            ghost
                                            onClick={() =>
                                                window.open(
                                                    repo.node.url,
                                                    '_blank',
                                                    'noopener=true'
                                                )
                                            }
                                        >
                                            GitHub
                                        </Button>
                                        <Button
                                            styles={{ marginRight: '1' }}
                                            kind="secondary"
                                            variant="small"
                                            ghost
                                            onClick={() =>
                                                window.open(
                                                    `https://www.npmjs.com/package/@lapidist/${repo.node.name}`,
                                                    '_blank',
                                                    'noopener=true'
                                                )
                                            }
                                        >
                                            npm
                                        </Button>
                                        {repo.node.homepageUrl && (
                                            <Button
                                                kind="tertiary"
                                                variant="small"
                                                ghost
                                                onClick={() =>
                                                    window.open(
                                                        repo.node.homepageUrl,
                                                        '_blank',
                                                        'noopener=true'
                                                    )
                                                }
                                            >
                                                Docs
                                            </Button>
                                        )}
                                    </Box>
                                </Flex>
                            </Panel>
                        ))}
                </Flex>
            </Box>
        </IndexLayout>
    );
};

export default IndexPage;
