import React from 'react';
import { orderBy } from 'lodash';
import {
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
                                kind="primary"
                                styles={cardStyles}
                            >
                                <Link
                                    href={repo.node.url}
                                    rel="nofollow noopener"
                                >
                                    <PanelHeading kind="grey">
                                        @lapidist/{repo.node.name}
                                    </PanelHeading>
                                </Link>
                                <Text styles={cardDescriptionStyles}>
                                    {repo.node.description}
                                </Text>
                                <Flex styles={{ paddingY: '4' }}>
                                    <Box>
                                        <Tag namespace="npm" kind="primary">
                                            {repo.node.latestRelease.tagName}
                                        </Tag>
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
