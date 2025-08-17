import type { Metadata, Viewport } from "next";
import { Lexend_Deca, Roboto_Mono } from "next/font/google";
import "@/styles/tokens.scss";
import "@/styles/globals.scss";
import "@/styles/typography.scss";
import Header from "@/components/Header/Header";
import styles from "./layout.module.scss";

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
        <html lang="en-GB">
            <head>
                <meta
                    name="apple-mobile-web-app-title"
                    content={METADATA.brand}
                />
                <meta name="color-scheme" content="light dark" />
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: light)"
                    content={METADATA.theme.light}
                />
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: dark)"
                    content={METADATA.theme.dark}
                />
                <meta name="description" content={METADATA.description} />
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
            <body className={`${header.variable} ${body.variable}`}>
                <svg
                    aria-hidden="true"
                    className={styles.heroBg}
                    preserveAspectRatio="xMidYMid slice"
                    viewBox="0 0 1920 1080"
                >
                    <defs>
                        <radialGradient id="b" cx="20%" cy="25%" r="60%">
                            <stop
                                offset="0%"
                                stopColor="var(--colour-primary)"
                                stopOpacity=".25"
                            />
                            <stop
                                offset="100%"
                                stopColor="var(--colour-primary)"
                                stopOpacity="0"
                            />
                        </radialGradient>
                        <radialGradient id="a" cx="50%" cy="45%" r="42%">
                            <stop offset="0%" stopColor="#fff" />
                            <stop offset="100%" />
                        </radialGradient>
                        <filter
                            id="i"
                            width="140%"
                            height="140%"
                            x="-20%"
                            y="-20%"
                        >
                            <feTurbulence
                                baseFrequency=".8"
                                numOctaves="2"
                                result="turb"
                                stitchTiles="stitch"
                                type="fractalNoise"
                            />
                            <feColorMatrix type="saturate" values="0" />
                            <feComponentTransfer>
                                <feFuncA tableValues="0 0.03" type="table" />
                            </feComponentTransfer>
                        </filter>
                        <filter
                            id="f"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                        >
                            <feGaussianBlur stdDeviation="60" />
                        </filter>
                        <pattern
                            id="d"
                            width="64"
                            height="64"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                fill="none"
                                stroke="var(--colour-border)"
                                strokeOpacity=".25"
                                d="M64 0H0v64"
                            />
                            <path
                                fill="none"
                                stroke="var(--colour-border)"
                                strokeOpacity=".15"
                                d="M32 0v64M0 32h64"
                            />
                        </pattern>
                        <mask id="e">
                            <rect width="100%" height="100%" fill="url(#a)" />
                        </mask>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        fill="var(--surface-level-0)"
                    />
                    <rect width="100%" height="100%" fill="url(#b)" />
                    <rect width="100%" height="100%" fill="url(#c)" />
                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#d)"
                        mask="url(#e)"
                    />
                    <g filter="url(#f)">
                        <ellipse
                            cx="280"
                            cy="220"
                            fill="url(#g)"
                            opacity=".9"
                            rx="300"
                            ry="180"
                        />
                        <ellipse
                            cx="1640"
                            cy="900"
                            fill="url(#h)"
                            opacity=".9"
                            rx="360"
                            ry="220"
                        />
                        <ellipse
                            cx="1580"
                            cy="260"
                            fill="url(#g)"
                            opacity=".7"
                            rx="220"
                            ry="160"
                        />
                        <ellipse
                            cx="420"
                            cy="920"
                            fill="url(#h)"
                            opacity=".6"
                            rx="260"
                            ry="200"
                        />
                    </g>
                    <rect width="100%" height="100%" filter="url(#i)" />
                    <rect width="100%" height="100%" fill="url(#j)" />
                </svg>
                <a href="#main" className="skip-link">
                    Skip to content
                </a>
                <Header />
                <main id="main">{children}</main>
            </body>
        </html>
    );
}
