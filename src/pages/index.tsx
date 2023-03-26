import React from 'react';
import { orderBy } from 'lodash';
import { Box, Heading, Link, Logo, Tag, Text } from '@lapidist/components';
import { graphql, useStaticQuery } from 'gatsby';
import IndexLayout from '../layouts';

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
            <Box as="header">
                <Logo animation="slide" />
                <Heading size="large">Brett Dorrans</Heading>
            </Box>
            <Box as="main">
                <Text>
                    I&apos;m a Senior Software Engineer based in Glasgow,
                    Scotland. I have been building software and strong client
                    relationships for over a decade.
                </Text>
                <Box data-nosnippet>
                    <Link href="/brett-dorrans-cv.pdf">CV</Link>
                    <Link href="https://github.com/brettdorrans">GitHub</Link>
                    <Link href="https://github.com/bylapidist">OSS GitHub</Link>
                    <Link href="https://www.linkedin.com/in/brettdorrans">
                        LinkedIn
                    </Link>
                    <Link href="mailto:hello@lapidist.net">Email</Link>
                </Box>

                <Box data-nosnippet>
                    {repos &&
                        orderBy(repos, ['node.name'], 'asc').map((repo) => {
                            return (
                                <Box key={repo.node.id}>
                                    <Heading as="h2" size="small">
                                        @lapidist/${repo.node.name}
                                    </Heading>
                                    <Text size="small">
                                        {repo.node.description}
                                    </Text>
                                    <Tag level="primary">
                                        {repo.node.latestRelease.tagName}
                                    </Tag>
                                </Box>
                            );
                        })}
                </Box>
            </Box>
        </IndexLayout>
    );
};

export default IndexPage;
