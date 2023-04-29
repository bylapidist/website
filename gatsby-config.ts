import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config({
    path: '.env'
});

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'Brett Dorrans: Senior Frontend Software Engineer in Glasgow, Scotland',
        description:
            'Brett Dorrans: Senior Frontend Software Engineer in Glasgow, Scotland',
        siteUrl: 'https://lapidist.net',
        author: {
            name: 'Brett Dorrans',
            url: 'https://lapidist.net',
            email: 'hello@lapidist.net'
        }
    },
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                trackingIds: ['G-LYKNFMMRX9'],
                gtagConfig: {
                    anonymize_ip: true,
                    cookie_expires: 0
                },
                pluginConfig: {
                    respectDNT: true
                }
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Brett Dorrans: Senior Frontend Software Engineer in Glasgow, Scotland',
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
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/'
            },
            __key: 'images'
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/'
            },
            __key: 'pages'
        },
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'GitHub',
                fieldName: 'github',
                url: 'https://api.github.com/graphql',
                headers: {
                    Authorization: `Bearer ${process.env.GATSBY_GITHUB_TOKEN}`
                }
            }
        },
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl: 'https://lapidist.net'
            }
        },
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                workboxConfig: {
                    globPatterns: ['**/*']
                }
            }
        }
    ]
};

export default config;
