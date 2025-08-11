import type { Metadata, Viewport } from "next";
import { Lexend_Deca, Roboto_Mono } from "next/font/google";

import "@/styles/tokens.scss";
import "@/styles/globals.scss";

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
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
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
    icons: { icon: "/favicon.svg" },
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
