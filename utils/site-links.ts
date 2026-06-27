export interface SiteLink {
    href: string;
    label: string;
}

export const siteLinks: SiteLink[] = [
    { href: "/articles", label: "Writing" },
    { href: "/#projects", label: "Projects" },
    { href: "/about", label: "About" },
];

export const footerLinks: SiteLink[] = [
    { href: "/articles", label: "Writing" },
    { href: "/about", label: "About" },
    {
        href: "/accessibility-statement",
        label: "Accessibility statement",
    },
];
