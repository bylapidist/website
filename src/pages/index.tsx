import React from 'react';
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
                    {repos.map((repo) => (
                        <Panel
                            key={repo.node.id}
                            kind="tertiary"
                            styles={cardStyles}
                        >
                            <PanelHeading kind="tertiary" size={2}>
                                {repo.node.name}
                            </PanelHeading>
                            <Text styles={cardDescriptionStyles}>
                                {repo.node.description}
                            </Text>
                            <Flex styles={{ paddingY: '4' }}>
                                <Box styles={{ marginRight: '2' }}>
                                    <Tag kind="tertiary">
                                        {repo.node.latestRelease.tagName}
                                    </Tag>
                                </Box>
                                <Box>
                                    <Link
                                        href={repo.node.url}
                                        rel="nofollow noopener"
                                    >
                                        <img
                                            src={`https://github.com/bylapidist/${repo.node.name}/workflows/Release/badge.svg`}
                                            alt={`@lapidist/${repo.node.name} build status`}
                                            width={120}
                                            height={20}
                                        />
                                    </Link>
                                </Box>
                            </Flex>
                        </Panel>
                    ))}
                </Flex>

                {/*<Flex styles={cardContainerStyles} data-nosnippet>*/}
                {/*    <Panel kind="tertiary" styles={cardStyles}>*/}
                {/*        <PanelHeading kind="tertiary" size={2}>*/}
                {/*            components*/}
                {/*        </PanelHeading>*/}
                {/*        <Text styles={cardDescriptionStyles}>*/}
                {/*            Opinionated{' '}*/}
                {/*            <Link*/}
                {/*                href="https://reactjs.org/"*/}
                {/*                target="_blank"*/}
                {/*                rel="nofollow noopener"*/}
                {/*            >*/}
                {/*                React*/}
                {/*            </Link>{' '}*/}
                {/*            UI library, built with{' '}*/}
                {/*            <Link*/}
                {/*                href="https://styled-components.com/"*/}
                {/*                target="_blank"*/}
                {/*                rel="nofollow noopener"*/}
                {/*            >*/}
                {/*                styled-components*/}
                {/*            </Link>{' '}*/}
                {/*            and{' '}*/}
                {/*            <Link*/}
                {/*                href="https://www.typescriptlang.org/"*/}
                {/*                target="_blank"*/}
                {/*                rel="nofollow noopener"*/}
                {/*            >*/}
                {/*                TypeScript*/}
                {/*            </Link>*/}
                {/*            .*/}
                {/*        </Text>*/}
                {/*        <Flex styles={{ paddingY: '4' }}>*/}
                {/*            <Box styles={{ marginRight: '2' }}>*/}
                {/*                <Link*/}
                {/*                    href="https://www.npmjs.com/package/@lapidist/components"*/}
                {/*                    rel="nofollow noopener"*/}
                {/*                >*/}
                {/*                    <img*/}
                {/*                        src="https://img.shields.io/npm/v/@lapidist/components"*/}
                {/*                        alt="@lapidist/components npm version"*/}
                {/*                        width={80}*/}
                {/*                        height={20}*/}
                {/*                    />*/}
                {/*                </Link>*/}
                {/*            </Box>*/}
                {/*            <Box>*/}
                {/*                <Link*/}
                {/*                    href="https://github.com/bylapidist/components"*/}
                {/*                    rel="nofollow noopener"*/}
                {/*                >*/}
                {/*                    <img*/}
                {/*                        src="https://github.com/bylapidist/components/workflows/Release/badge.svg"*/}
                {/*                        alt="@lapidist/components build status"*/}
                {/*                        width={120}*/}
                {/*                        height={20}*/}
                {/*                    />*/}
                {/*                </Link>*/}
                {/*            </Box>*/}
                {/*        </Flex>*/}
                {/*    </Panel>*/}
                {/*    <Panel kind="secondary" styles={cardStyles}>*/}
                {/*        <PanelHeading kind="secondary" size={2}>*/}
                {/*            styles*/}
                {/*        </PanelHeading>*/}
                {/*        <Text styles={cardDescriptionStyles}>*/}
                {/*            Strongly typed theming framework for{' '}*/}
                {/*            <Link*/}
                {/*                href="https://reactjs.org/"*/}
                {/*                target="_blank"*/}
                {/*                rel="nofollow noopener"*/}
                {/*            >*/}
                {/*                React*/}
                {/*            </Link>{' '}*/}
                {/*            components built with{' '}*/}
                {/*            <Link*/}
                {/*                href="https://github.com/frenic/csstype"*/}
                {/*                target="_blank"*/}
                {/*                rel="nofollow noopener"*/}
                {/*            >*/}
                {/*                CSSType*/}
                {/*            </Link>*/}
                {/*            , inspired by the{' '}*/}
                {/*            <Link*/}
                {/*                href="https://tailwindcss.com/"*/}
                {/*                target="_blank"*/}
                {/*                rel="nofollow noopener"*/}
                {/*            >*/}
                {/*                tailwindcss*/}
                {/*            </Link>{' '}*/}
                {/*            API.*/}
                {/*        </Text>*/}
                {/*        <Flex styles={{ paddingY: '4' }}>*/}
                {/*            <Box styles={{ marginRight: '2' }}>*/}
                {/*                <Link*/}
                {/*                    href="https://www.npmjs.com/package/@lapidist/styles"*/}
                {/*                    rel="nofollow noopener"*/}
                {/*                >*/}
                {/*                    <img*/}
                {/*                        src="https://img.shields.io/npm/v/@lapidist/styles"*/}
                {/*                        alt="@lapidist/styles npm version"*/}
                {/*                        width={80}*/}
                {/*                        height={20}*/}
                {/*                    />*/}
                {/*                </Link>*/}
                {/*            </Box>*/}
                {/*            <Box>*/}
                {/*                <Link*/}
                {/*                    href="https://github.com/bylapidist/styles"*/}
                {/*                    rel="nofollow noopener"*/}
                {/*                >*/}
                {/*                    <img*/}
                {/*                        src="https://github.com/bylapidist/styles/workflows/Release/badge.svg"*/}
                {/*                        alt="@lapidist/styles build status"*/}
                {/*                        width={120}*/}
                {/*                        height={20}*/}
                {/*                    />*/}
                {/*                </Link>*/}
                {/*            </Box>*/}
                {/*        </Flex>*/}
                {/*    </Panel>*/}
                {/*    <Panel kind="primary" styles={cardStyles}>*/}
                {/*        <PanelHeading kind="primary" size={2}>*/}
                {/*            linting*/}
                {/*        </PanelHeading>*/}
                {/*        <Text styles={cardDescriptionStyles}>*/}
                {/*            My personal{' '}*/}
                {/*            <Link*/}
                {/*                href="https://eslint.org/"*/}
                {/*                target="_blank"*/}
                {/*                rel="nofollow noopener"*/}
                {/*            >*/}
                {/*                ESlint*/}
                {/*            </Link>{' '}*/}
                {/*            and{' '}*/}
                {/*            <Link*/}
                {/*                href="https://prettier.io/"*/}
                {/*                target="_blank"*/}
                {/*                rel="nofollow noopener"*/}
                {/*            >*/}
                {/*                Prettier*/}
                {/*            </Link>{' '}*/}
                {/*            configurations.*/}
                {/*        </Text>*/}
                {/*        <Flex styles={{ paddingY: '4' }}>*/}
                {/*            <Box styles={{ marginRight: '2' }}>*/}
                {/*                <Link*/}
                {/*                    href="https://www.npmjs.com/package/@lapidist/linting"*/}
                {/*                    rel="nofollow noopener"*/}
                {/*                >*/}
                {/*                    <img*/}
                {/*                        src="https://img.shields.io/npm/v/@lapidist/linting"*/}
                {/*                        alt="@lapidist/linting npm version"*/}
                {/*                        width={88}*/}
                {/*                        height={20}*/}
                {/*                    />*/}
                {/*                </Link>*/}
                {/*            </Box>*/}
                {/*            <Box>*/}
                {/*                <Link*/}
                {/*                    href="https://github.com/bylapidist/linting"*/}
                {/*                    rel="nofollow noopener"*/}
                {/*                >*/}
                {/*                    <img*/}
                {/*                        src="https://github.com/bylapidist/linting/workflows/Release/badge.svg"*/}
                {/*                        alt="@lapidist/linting build status"*/}
                {/*                        width={120}*/}
                {/*                        height={20}*/}
                {/*                    />*/}
                {/*                </Link>*/}
                {/*            </Box>*/}
                {/*        </Flex>*/}
                {/*    </Panel>*/}
                {/*</Flex>*/}
            </Box>
        </IndexLayout>
    );
};

export default IndexPage;
