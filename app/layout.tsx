import "server-only";
import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "@/styles/globals.scss";
import { Header } from "@/components";

const headerFallback = Hanken_Grotesk({
    variable: "--font-header-fallback",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const prose = Newsreader({
    variable: "--font-prose",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

const mono = IBM_Plex_Mono({
    variable: "--font-body",
    subsets: ["latin"],
    weight: ["400", "500"],
    display: "swap",
});

export const viewport: Viewport = {
    colorScheme: "light dark",
    width: "device-width",
    initialScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#F8F8F6" },
        { media: "(prefers-color-scheme: dark)", color: "#0C0D10" },
    ],
};

const METADATA = {
    url: "https://lapidist.net",
    name: "Brett Dorrans",
    brand: "Lapidist",
    lang: "en-GB",
    title: "Staff Frontend Engineer & Design Systems Specialist | Remote UK",
    description:
        "I build frontend platforms and the design systems that hold them together. Fifteen years turning sprawling interfaces into systems that stay coherent.",
    keywords: [
        "Staff Frontend Engineer",
        "Design Systems Specialist",
        "UK Remote",
    ],
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
        type: "article",
        authors: [METADATA.name],
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
        <html
            lang="en-GB"
            className={`${headerFallback.variable} ${prose.variable} ${mono.variable}`}
            suppressHydrationWarning
        >
            <head>
                <meta
                    name="apple-mobile-web-app-title"
                    content={METADATA.brand}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(() => {
                            try {
                                const stored = localStorage.getItem("theme");
                                const prefersDark = window.matchMedia(
                                    "(prefers-color-scheme: dark)",
                                ).matches;
                                const theme =
                                    stored ?? (prefersDark ? "dark" : "light");
                                document.documentElement.classList.remove(
                                    "light",
                                    "dark",
                                );
                                document.documentElement.classList.add(theme);
                            } catch {
                                /* no-op */
                            }
                        })();`,
                    }}
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
                    color="#1F4E8C"
                />
            </head>
            <body suppressHydrationWarning>
                <a href="#main" className="skip-link">
                    Skip to content
                </a>
                <Header />
                <main id="main">{children}</main>
            </body>
        </html>
    );
}
