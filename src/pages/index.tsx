import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Link,
    Logo,
    Text,
    Panel
} from '@lapidist/components';
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
    logoStyles,
    cardTertiaryHeadingStyles,
    cardSecondaryHeadingStyles,
    cardPrimaryHeadingStyles
} from '../styles';

const IndexPage = (): JSX.Element => (
    <IndexLayout>
        <header>
            <Logo styles={logoStyles} animated />
            <Heading size={1} styles={headingStyles}>
                Brett Dorrans
            </Heading>
        </header>
        <Box styles={containerStyles}>
            <Text styles={introStyles}>
                I&apos;m a Senior Software Engineer based in Glasgow, Scotland.
                I have been building software and strong client relationships
                for over a decade.
            </Text>
            <Text styles={linkContainerStyles} data-nosnippet>
                <Link styles={linkStyles} href="/brett-dorrans-cv-2020.pdf">
                    CV
                </Link>
                <Link
                    styles={linkStyles}
                    href="https://github.com/brettdorrans"
                >
                    GitHub
                </Link>
                <Link styles={linkStyles} href="https://github.com/bylapidist">
                    OSS GitHub
                </Link>
                <Link
                    styles={linkStyles}
                    href="https://www.linkedin.com/pub/brett-dorrans/28/378/714"
                >
                    LinkedIn
                </Link>
                <Link href="mailto:hello@lapidist.net">Email</Link>
            </Text>
            <Flex styles={cardContainerStyles}>
                <Panel kind="tertiary" styles={cardStyles}>
                    <Heading size={3} styles={cardTertiaryHeadingStyles}>
                        components
                    </Heading>
                    <Box>
                        <Text styles={cardDescriptionStyles}>
                            Opinionated{' '}
                            <Link
                                href="https://reactjs.org/"
                                target="_blank"
                                rel="nofollow noopener"
                            >
                                React
                            </Link>{' '}
                            UI library, built with{' '}
                            <Link
                                href="https://styled-components.com/"
                                target="_blank"
                                rel="nofollow noopener"
                            >
                                styled-components
                            </Link>{' '}
                            and{' '}
                            <Link
                                href="https://www.typescriptlang.org/"
                                target="_blank"
                                rel="nofollow noopener"
                            >
                                TypeScript
                            </Link>
                            .
                        </Text>
                        <Flex styles={{ paddingY: '4' }}>
                            <Box styles={{ marginRight: '2' }}>
                                <a
                                    href="https://www.npmjs.com/package/@lapidist/components"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        src="https://img.shields.io/npm/v/@lapidist/components"
                                        alt="@lapidist/components npm version"
                                    />
                                </a>
                            </Box>
                            <Box>
                                <a
                                    href="https://github.com/bylapidist/components/actions?query=workflow%3ARelease"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        src="https://github.com/bylapidist/components/workflows/Release/badge.svg"
                                        alt="@lapidist/components build status"
                                    />
                                </a>
                            </Box>
                        </Flex>
                    </Box>
                </Panel>
                <Panel kind="secondary" styles={cardStyles}>
                    <Heading size={3} styles={cardSecondaryHeadingStyles}>
                        styles
                    </Heading>
                    <Box>
                        <Text styles={cardDescriptionStyles}>
                            Strongly typed theming framework for{' '}
                            <Link
                                href="https://reactjs.org/"
                                target="_blank"
                                rel="nofollow noopener"
                            >
                                React
                            </Link>{' '}
                            components built with{' '}
                            <Link
                                href="https://github.com/frenic/csstype"
                                target="_blank"
                                rel="nofollow noopener"
                            >
                                CSSType
                            </Link>
                            , inspired by the{' '}
                            <Link
                                href="https://tailwindcss.com/"
                                target="_blank"
                                rel="nofollow noopener"
                            >
                                tailwindcss
                            </Link>{' '}
                            API.
                        </Text>
                        <Flex styles={{ paddingY: '4' }}>
                            <Box styles={{ marginRight: '2' }}>
                                <a
                                    href="https://www.npmjs.com/package/@lapidist/styles"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        src="https://img.shields.io/npm/v/@lapidist/styles"
                                        alt="@lapidist/styles npm version"
                                    />
                                </a>
                            </Box>
                            <Box>
                                <a
                                    href="https://github.com/bylapidist/styles/actions?query=workflow%3ARelease"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        src="https://github.com/bylapidist/styles/workflows/Release/badge.svg"
                                        alt="@lapidist/styles build status"
                                    />
                                </a>
                            </Box>
                        </Flex>
                    </Box>
                </Panel>
                <Panel kind="primary" styles={cardStyles}>
                    <Heading size={3} styles={cardPrimaryHeadingStyles}>
                        linting
                    </Heading>
                    <Box>
                        <Text styles={cardDescriptionStyles}>
                            My personal{' '}
                            <Link
                                href="https://eslint.org/"
                                target="_blank"
                                rel="nofollow noopener"
                            >
                                ESlint
                            </Link>{' '}
                            and{' '}
                            <Link
                                href="https://prettier.io/"
                                target="_blank"
                                rel="nofollow noopener"
                            >
                                Prettier
                            </Link>{' '}
                            configurations.
                        </Text>
                        <Flex styles={{ paddingY: '4' }}>
                            <Box styles={{ marginRight: '2' }}>
                                <a
                                    href="https://www.npmjs.com/package/@lapidist/linting"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        src="https://img.shields.io/npm/v/@lapidist/linting"
                                        alt="@lapidist/linting npm version"
                                    />
                                </a>
                            </Box>
                            <Box>
                                <a
                                    href="https://github.com/bylapidist/linting/actions?query=workflow%3ARelease"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        src="https://github.com/bylapidist/linting/workflows/Release/badge.svg"
                                        alt="@lapidist/linting build status"
                                    />
                                </a>
                            </Box>
                        </Flex>
                    </Box>
                </Panel>
            </Flex>
        </Box>
    </IndexLayout>
);

export default IndexPage;
