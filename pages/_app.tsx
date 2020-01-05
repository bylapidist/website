import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import ThemeProvider from '@lapidist/theme-provider';
import Container from '@lapidist/container';

export default class MyApp extends App {
    render(): JSX.Element {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>
                        Brett Dorrans: Software Engineer in Glasgow, Scotland
                    </title>
                    <meta
                        name="description"
                        content="Brett Dorrans: Senior Software Engineer in Glasgow, Scotland"
                    />
                    <meta property="og:title" content="Brett Dorrans" />
                    <meta
                        property="og:description"
                        content="Senior Software Engineer in Glasgow, Scotland"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://lapidist.net/" />
                    <meta
                        property="og:image"
                        content="https://lapidist.net/logo.png"
                    />
                    <meta name="theme-color" content="#ffffff" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <link
                        rel="mask-icon"
                        href="/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <link rel="canonical" href="https://lapidist.net/" />
                </Head>
                <ThemeProvider>
                    <Container padding="40px">
                        <Component {...pageProps} />
                    </Container>
                </ThemeProvider>
            </>
        );
    }
}
