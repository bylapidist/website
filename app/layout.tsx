import type { Metadata, Viewport } from "next";
import { Lexend_Deca, Roboto_Mono } from "next/font/google";
import "@/styles/globals.scss";
import Background from "@/components/Background/Background";
import Header from "@/components/Header/Header";

const header = Lexend_Deca({
    variable: "--font-header",
    subsets: ["latin"],
    display: "swap",
});

const body = Roboto_Mono({
    variable: "--font-body",
    subsets: ["latin"],
    display: "swap",
});

export const viewport: Viewport = {
    colorScheme: "light dark",
    width: "device-width",
    initialScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#090909" },
    ],
};

const METADATA = {
    url: "https://lapidist.net",
    name: "Brett Dorrans",
    brand: "Lapidist",
    lang: "en-GB",
    title: "Lead Frontend Engineer & Design Systems Specialist | Remote UK",
    description:
        "Ship design systems teams love. I architect UI platforms, uplift engineering culture, and deliver accessible, high-performance products.",
    keywords: [
        "Lead Frontend Engineer",
        "Design Systems Specialist",
        "UK Remote",
    ],
    theme: {
        light: "#ffffff",
        dark: "#090909",
    },
    images: {
        favicon: "/favicon.ico",
        og: "/opengraph-image",
        twitter: "/twitter-image",
        mask: "/mask-icon.svg",
    },
} as const;

export const metadata: Metadata = {
    metadataBase: new URL(METADATA.url),
    title: {
        default: METADATA.title,
        template: `%s | ${METADATA.name}`,
    },
    description: METADATA.description,
    keywords: [...METADATA.keywords],
    icons: { icon: METADATA.images.favicon },
    openGraph: {
        title: METADATA.title,
        description: METADATA.description,
        url: METADATA.url,
        siteName: METADATA.name,
        images: [{ url: METADATA.images.og }],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: METADATA.title,
        description: METADATA.description,
        images: [METADATA.images.twitter],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
        },
    },
    alternates: { canonical: METADATA.url },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en-GB" className={`${header.variable} ${body.variable}`}>
            <head>
                <meta
                    name="apple-mobile-web-app-title"
                    content={METADATA.brand}
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link rel="preload" as="image" href={METADATA.images.og} />
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    href="/rss.xml"
                />
                <link
                    rel="mask-icon"
                    href={METADATA.images.mask}
                    color="#6847ff"
                />
            </head>
            <body className={body.className}>
                <Background />
                <a href="#main" className="skip-link">
                    Skip to content
                </a>
                <Header />
                <main id="main">{children}</main>
            </body>
        </html>
    );
}
