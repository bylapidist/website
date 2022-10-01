import React from 'react';
import { orderBy } from 'lodash';
import { Box, Heading, Link, Logo, Text, Panel } from '@lapidist/components';
import { graphql, useStaticQuery } from 'gatsby';
import IndexLayout from '../layouts';
import {
    cardContainerStyles,
    panelStyles,
    containerStyles,
    headingStyles,
    introStyles,
    linkContainerStyles,
    linkStyles,
    logoStyles
} from '../styles';
import { PanelButtonProp } from '@lapidist/components/dist/es6/components/panel';

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
                        orderBy(repos, ['node.name'], 'asc').map((repo) => {
                            const buttons: PanelButtonProp[] = [
                                {
                                    title: 'GitHub',
                                    props: {
                                        as: 'a',
                                        kind: 'primary',
                                        variant: 'small',
                                        target: '_blank',
                                        rel: 'noopener',
                                        href: repo.node.url
                                    }
                                },
                                {
                                    title: 'npm',
                                    props: {
                                        as: 'a',
                                        kind: 'secondary',
                                        variant: 'small',
                                        target: '_blank',
                                        rel: 'noopener',
                                        href: `https://www.npmjs.com/package/@lapidist/${repo.node.name}`
                                    }
                                }
                            ];
                            if (repo.node.homepageUrl) {
                                buttons.push({
                                    title: 'Docs',
                                    props: {
                                        as: 'a',
                                        kind: 'secondary',
                                        variant: 'small',
                                        target: '_blank',
                                        rel: 'noopener',
                                        href: repo.node.homepageUrl
                                    }
                                });
                            }
                            return (
                                <Panel
                                    key={repo.node.id}
                                    styles={panelStyles}
                                    heading={{
                                        title: `@lapidist/${repo.node.name}`,
                                        props: {
                                            as: 'h2',
                                            size: 4
                                        }
                                    }}
                                    tag={{
                                        title: repo.node.latestRelease.tagName
                                    }}
                                    buttons={buttons}
                                >
                                    {repo.node.description}
                                </Panel>
                            );
                        })}
                </Box>
            </Box>
        </IndexLayout>
    );
};

export default IndexPage;
