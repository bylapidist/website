"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container/Container";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";
import LogoMark from "./LogoMark";

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 0);
        }

        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <header className={styles.header} data-scrolled={scrolled || undefined}>
            <Container className={styles.inner} as="div" cq="page">
                <nav role="navigation">
                    <Link
                        href="/"
                        className={styles.logo}
                        aria-label="Brett Dorrans"
                        aria-current={pathname === "/" ? "page" : undefined}
                    >
                        <LogoMark />
                        <span className={styles.logoLockup}>
                            <span>Brett</span>
                            <span>Dorrans</span>
                        </span>
                    </Link>
                </nav>
                <ThemeToggle />
            </Container>
        </header>
    );
}
