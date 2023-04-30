import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

type Response = {
    site: {
        siteMetadata: {
            title: string;
            description: string;
        };
    };
};
const Head = () => {
    const { site }: Response = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);

    return (
        <>
            <html lang="en" />
            <meta charSet="utf-8" />
            <title>{site.siteMetadata.title}</title>
            <meta name="description" content={site.siteMetadata.description} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta property="og:title" content={site.siteMetadata.title} />
            <meta
                property="og:description"
                content={site.siteMetadata.description}
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lapidist.net/" />
            <meta
                property="og:image"
                content="https://lapidist.net/oglogo.png"
            />
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
        </>
    );
};

export default Head;
