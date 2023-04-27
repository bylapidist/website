import React from 'react';
import { orderBy } from 'lodash';
import { Box, Heading, Link, Logo, Text } from '@lapidist/components';
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
            <header>
                <Logo animated />
                <Heading>
                    Brett Dorrans
                </Heading>
            </header>
            <Box>
                <Heading>
                    I&apos;m a Senior Frontend Engineer from Glasgow with a
                    decade of experience building software and relationships.
                </Heading>
                <br />
                <br />
                <Text>
                    I&apos;m all about inclusive, accessible engineering that puts
                    users first. With a focus on collaboration and empathy, I
                    work closely with teams to create exceptional user
                    experiences.
                </Text>
                <Text data-nosnippet>
                    <Link href="/brett-dorrans-cv.pdf">
                        CV
                    </Link>
                    <Link
                        href="https://github.com/brettdorrans"
                    >
                        GitHub
                    </Link>
                    <Link
                        href="https://github.com/bylapidist"
                    >
                        OSS GitHub
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/brettdorrans"
                    >
                        LinkedIn
                    </Link>
                    <Link href="mailto:hello@lapidist.net">Email</Link>
                </Text>

                {/*<Box data-nosnippet>*/}
                {/*    {repos &&*/}
                {/*        orderBy(repos, ['node.name'], 'asc').map((repo) => {*/}
                {/*            const buttons: PanelButtonProp[] = [*/}
                {/*                {*/}
                {/*                    title: 'GitHub',*/}
                {/*                    props: {*/}
                {/*                        as: 'a',*/}
                {/*                        kind: 'primary',*/}
                {/*                        variant: 'small',*/}
                {/*                        target: '_blank',*/}
                {/*                        rel: 'noopener',*/}
                {/*                        href: repo.node.url*/}
                {/*                    }*/}
                {/*                },*/}
                {/*                {*/}
                {/*                    title: 'npm',*/}
                {/*                    props: {*/}
                {/*                        as: 'a',*/}
                {/*                        kind: 'secondary',*/}
                {/*                        variant: 'small',*/}
                {/*                        target: '_blank',*/}
                {/*                        rel: 'noopener',*/}
                {/*                        href: `https://www.npmjs.com/package/@lapidist/${repo.node.name}`*/}
                {/*                    }*/}
                {/*                }*/}
                {/*            ];*/}
                {/*            if (repo.node.homepageUrl) {*/}
                {/*                buttons.push({*/}
                {/*                    title: 'Docs',*/}
                {/*                    props: {*/}
                {/*                        as: 'a',*/}
                {/*                        kind: 'secondary',*/}
                {/*                        variant: 'small',*/}
                {/*                        target: '_blank',*/}
                {/*                        rel: 'noopener',*/}
                {/*                        href: repo.node.homepageUrl*/}
                {/*                    }*/}
                {/*                });*/}
                {/*            }*/}
                {/*            return (*/}
                {/*                <Panel*/}
                {/*                    key={repo.node.id}*/}
                {/*                    styles={panelStyles}*/}
                {/*                    heading={{*/}
                {/*                        title: `@lapidist/${repo.node.name}`,*/}
                {/*                        props: {*/}
                {/*                            as: 'h2',*/}
                {/*                            size: 4*/}
                {/*                        }*/}
                {/*                    }}*/}
                {/*                    tag={{*/}
                {/*                        title: repo.node.latestRelease.tagName*/}
                {/*                    }}*/}
                {/*                    buttons={buttons}*/}
                {/*                >*/}
                {/*                    {repo.node.description}*/}
                {/*                </Panel>*/}
                {/*            );*/}
                {/*        })}*/}
                {/*</Box>*/}
            </Box>
        </IndexLayout>
    );
};

export default IndexPage;
