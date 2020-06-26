/* eslint-disable @typescript-eslint/camelcase */

module.exports = {
    siteMetadata: {
        title: 'Brett Dorrans: Senior Software Engineer in Glasgow, Scotland',
        description:
            'Brett Dorrans: Senior Software Engineer in Glasgow, Scotland',
        siteUrl: 'https://lapidist.net',
        author: {
            name: 'Brett Dorrans',
            url: 'https://lapidist.net',
            email: 'hello@lapidist.net'
        }
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/src/content`
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1rem'
                        }
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1140,
                            quality: 90,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl: 'https://lapidist.net'
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name:
                    'Brett Dorrans: Senior Software Engineer in Glasgow, Scotland',
                short_name: 'Brett Dorrans',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#ffffff',
                display: 'standalone',
                icon: 'src/images/favicon-512x512.png',
                cache_busting_mode: 'none'
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-48222807-1',
                respectDNT: true,
                anonymize: true
            }
        },
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                workboxConfig: {
                    globPatterns: ['**/*']
                }
            }
        },
        'gatsby-transformer-json',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-typescript',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-react-helmet'
    ]
};
