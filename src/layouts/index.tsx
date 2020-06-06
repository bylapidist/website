import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider, Container } from '@lapidist/components';
import styled from 'styled-components';

interface StaticQueryProps {
    site: {
        siteMetadata: {
            title: string;
            description: string;
        };
    };
}

const IndexWrapper: React.FC = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

const IndexLayout: React.FC = ({ children }): JSX.Element => (
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
                <Helmet>
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
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700"
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
                </Helmet>
                <ThemeProvider>
                    <IndexWrapper>
                        <Container padding={10}>{children}</Container>
                    </IndexWrapper>
                </ThemeProvider>
            </>
        )}
    />
);

export default IndexLayout;
