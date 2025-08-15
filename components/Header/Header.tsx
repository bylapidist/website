"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container/Container";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";
import LogoMark from "./LogoMark";

export default function Header() {
    const pathname = usePathname();
    const navItems = [
        { href: "/#about", label: "About" },
        { href: "/#case-studies", label: "Selected Work" },
        { href: "/articles", label: "Articles" },
        { href: "/contact", label: "Contact" },
    ];
    return (
        <header className={styles.header}>
            <Container className={styles.inner} as="div" cq="page">
                <Link
                    href="/"
                    className={styles.logo}
                    aria-label="Brett Dorrans"
                >
                    <LogoMark />
                    <span className={styles.logoLockup}>
                        <span>Brett</span>
                        <span>Dorrans</span>
                    </span>
                </Link>
                <nav aria-label="Main" className={styles.nav}>
                    <ul>
                        {navItems.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    aria-current={
                                        pathname === href ? "page" : undefined
                                    }
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <ThemeToggle />
            </Container>
        </header>
    );
}
