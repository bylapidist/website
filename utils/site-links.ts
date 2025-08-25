export interface SiteLink {
    href: string;
    label: string;
}

export const siteLinks: SiteLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/articles", label: "Articles" },
    { href: "/#services", label: "Services" },
    { href: "/#contact", label: "Contact" },
    { href: "/accessibility-statement", label: "Accessibility Statement" },
    { href: "/ai-ethics-statement", label: "AI Ethics Statement" },
];
