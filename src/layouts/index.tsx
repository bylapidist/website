import React, { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Box, Heading, Link, Logo, Text } from '@lapidist/components';
import {
    bodyStyles,
    cardContainerStyles,
    containerStyles,
    headingStyles,
    introStyles,
    linkContainerStyles,
    linkStyles,
    logoStyles,
    wrapperStyles
} from '../styles';

interface StaticQueryProps {
    site: {
        siteMetadata: {
            title: string;
            description: string;
        };
    };
}

const IndexLayout: React.FC<PropsWithChildren<unknown>> = ({
    children
}): JSX.Element => (
    <StaticQuery
        query={graphql`
            query IndexLayoutQuery {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={(data: StaticQueryProps): JSX.Element => (
            <>
                <Helmet htmlAttributes={{ lang: 'en' }}>
                    <meta charSet="utf-8" />
                    <title>{data.site.siteMetadata.title}</title>
                    <meta
                        name="description"
                        content={data.site.siteMetadata.description}
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta
                        property="og:title"
                        content={data.site.siteMetadata.title}
                    />
                    <meta
                        property="og:description"
                        content={data.site.siteMetadata.description}
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://lapidist.net/" />
                    <meta
                        property="og:image"
                        content="https://lapidist.net/oglogo.png"
                    />
                    <style>
                        {`
                            @font-face {
                                font-family: 'Montserrat';
                                font-style: normal;
                                font-weight: 400;
                                font-display: swap;
                                src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
                                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                            }
                            @font-face {
                                font-family: 'Montserrat';
                                font-style: normal;
                                font-weight: 500;
                                font-display: swap;
                                src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Hw5aXp-p7K4KLg.woff2) format('woff2');
                                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                            }
                            @font-face {
                                font-family: 'Montserrat';
                                font-style: normal;
                                font-weight: 700;
                                font-display: swap;
                                src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gnD_vx3rCs.woff2) format('woff2');
                                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                            }
                        `}
                    </style>
                    <script type="application/ld+json">
                        {`
                            {
                                "@context": "https://schema.org",
                                "@type": "Person",
                                "url": "https://lapidist.net",
                                "name": "Brett Dorrans",
                                "sameAs": [
                                    "https://www.linkedin.com/in/brettdorrans",
                                    "https://www.linkedin.com/pub/brett-dorrans/28/378/714",
                                    "https://github.com/brettdorrans",
                                    "https://github.com/bylapidist"
                                ]
                            }
                            `}
                    </script>
                </Helmet>
                <Box styles={bodyStyles}>
                    <Box styles={wrapperStyles}>
                        <header>
                            <Logo styles={logoStyles} animated />
                            <Heading size={1} styles={headingStyles}>
                                Brett Dorrans
                            </Heading>
                        </header>
                        <Box styles={containerStyles}>
                            <Text styles={introStyles}>
                                I&apos;m a Senior Software Engineer based in
                                Glasgow, Scotland. I have been building software
                                and strong client relationships for over a
                                decade.
                            </Text>
                            <Text
                                as="div"
                                styles={linkContainerStyles}
                                data-nosnippet
                            >
                                <Link
                                    styles={linkStyles}
                                    href="/brett-dorrans-cv.pdf"
                                >
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
                                <Link href="mailto:hello@lapidist.net">
                                    Email
                                </Link>
                            </Text>
                            <Box styles={cardContainerStyles} data-nosnippet>
                                {children}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </>
        )}
    />
);

export default IndexLayout;
