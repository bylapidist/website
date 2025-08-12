import type { Metadata, Viewport } from "next";
import { Lexend_Deca, Roboto_Mono } from "next/font/google";
import "@/styles/tokens.scss";
import "@/styles/globals.scss";

// Limit downloaded font weights to reduce font file size.
// Only the normal (400) and semi-bold (600) weights are used across the
// site, so we explicitly request those weights from Google Fonts. This
// prevents the default variable font files from being included, trimming
// several unnecessary woff2 files from the build and improving
// Lighthouse performance scores.
const header = Lexend_Deca({
    variable: "--font-header",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "600"],
});

const body = Roboto_Mono({
    variable: "--font-body",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "600"],
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
        default:
            "Brett Dorrans – Principal Frontend Engineer & Design Systems Specialist",
        template: "%s | Brett Dorrans",
    },
    description:
        "Ship design systems teams love. I help product orgs ship consistent UI faster — with governance, performance and accessibility built in.",
    icons: { icon: "/favicon.ico" },
    openGraph: {
        title: "Brett Dorrans – Principal Frontend Engineer & Design Systems Specialist",
        description:
            "Ship design systems teams love. I help product orgs ship consistent UI faster — with governance, performance and accessibility built in.",
        url: "https://lapidist.net",
        siteName: "Brett Dorrans",
        images: [{ url: "/opengraph-image" }],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Brett Dorrans – Principal Frontend Engineer & Design Systems Specialist",
        description:
            "Ship design systems teams love. I help product orgs ship consistent UI faster — with governance, performance and accessibility built in.",
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
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link rel="preload" as="image" href="/opengraph-image" />
                <link rel="mask-icon" href="/mask-icon.svg" color="#6847ff" />
            </head>
            <body className={`${header.variable} ${body.variable}`}>
                <a href="#main" className="skip-link">
                    Skip to content
                </a>
                <main id="main">{children}</main>
            </body>
        </html>
    );
}
