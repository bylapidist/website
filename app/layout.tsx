import type { Metadata, Viewport } from "next";
import { Lexend_Deca, Roboto_Mono } from "next/font/google";
import "@/styles/tokens.scss";
import "@/styles/globals.scss";
import "@/styles/typography.scss";
import Header from "@/components/Header/Header";
import styles from "./layout.module.scss";

// Load variable fonts so optical size and slant can be controlled via
// `font-variation-settings` in CSS.
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

export const metadata: Metadata = {
    metadataBase: new URL("https://lapidist.net"),
    title: {
        default: "Principal Frontend Engineer & Design Systems Specialist",
        template: "%s | Brett Dorrans",
    },
    description:
        "Principal/Lead Frontend engineer specialising in enterprise design systems, accessibility, and UI platforms. Remote-first; UK-based.",
    icons: { icon: "/favicon.ico" },
    openGraph: {
        title: "Principal Frontend Engineer & Design Systems Specialist",
        description:
            "Principal/Lead Frontend engineer specialising in enterprise design systems, accessibility, and UI platforms. Remote-first; UK-based.",
        url: "https://lapidist.net",
        siteName: "Brett Dorrans",
        images: [{ url: "/opengraph-image" }],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Principal Frontend Engineer & Design Systems Specialist",
        description:
            "Principal/Lead Frontend engineer specialising in enterprise design systems, accessibility, and UI platforms. Remote-first; UK-based.",
        images: ["/twitter-image"],
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
    alternates: { canonical: "https://lapidist.net" },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en-GB">
            <head>
                <meta name="apple-mobile-web-app-title" content="Lapidist" />
                <meta name="color-scheme" content="light dark" />
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: light)"
                    content="#ffffff"
                />
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: dark)"
                    content="#090909"
                />
                <meta
                    name="description"
                    content="Principal/Lead Frontend engineer specialising in enterprise design systems, accessibility, and UI platforms. Remote-first; UK-based."
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link rel="preload" as="image" href="/opengraph-image" />
                <link rel="mask-icon" href="/mask-icon.svg" color="#6847ff" />
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
                                stopColor="var(--primary)"
                                stopOpacity=".25"
                            />
                            <stop
                                offset="100%"
                                stopColor="var(--primary)"
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
                                stroke="var(--border)"
                                strokeOpacity=".25"
                                d="M64 0H0v64"
                            />
                            <path
                                fill="none"
                                stroke="var(--border)"
                                strokeOpacity=".15"
                                d="M32 0v64M0 32h64"
                            />
                        </pattern>
                        <mask id="e">
                            <rect width="100%" height="100%" fill="url(#a)" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="var(--bg)" />
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
