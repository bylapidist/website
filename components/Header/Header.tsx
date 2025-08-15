"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container/Container";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";
import LogoMark from "./LogoMark";

export default function Header() {
    const pathname = usePathname();
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
                <nav aria-label="Primary">
                    <ul className={styles.nav}>
                        <li>
                            <Link href="/#about">About</Link>
                        </li>
                        <li>
                            <Link href="/#case-studies">Selected Work</Link>
                        </li>
                        <li>
                            <Link
                                href="/articles"
                                aria-current={
                                    pathname.startsWith("/articles")
                                        ? "page"
                                        : undefined
                                }
                            >
                                Articles
                            </Link>
                        </li>
                        <li>
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <ThemeToggle />
            </Container>
        </header>
    );
}
