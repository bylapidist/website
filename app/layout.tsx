import type { Metadata, Viewport } from "next";
import { Lexend_Deca, Roboto_Mono } from "next/font/google";
import "@/styles/tokens.scss";
import "@/styles/globals.scss";
import "@/styles/typography.scss";
import Header from "@/components/Header/Header";

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
                <script
                    dangerouslySetInnerHTML={{
                        __html: "try{const t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t;}}catch(e){}",
                    }}
                />
                <a href="#main" className="skip-link">
                    Skip to content
                </a>
                <Header />
                <main id="main">{children}</main>
            </body>
        </html>
    );
}
