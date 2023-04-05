import React from 'react';
import type { AppProps } from 'next/app';
import '@lapidist/components/dist/style.css';
import './app.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
