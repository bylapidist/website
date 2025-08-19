"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container/Container";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";
import LogoMark from "./LogoMark";

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 0);
        }

        function onResize() {
            if (headerRef.current) {
                document.documentElement.style.setProperty(
                    "--header-offset",
                    `${String(headerRef.current.offsetHeight)}px`,
                );
            }
        }

        onScroll();
        onResize();
        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    useEffect(() => {
        if (window.location.hash) {
            const el = document.getElementById(
                window.location.hash.substring(1),
            );
            el?.scrollIntoView();
        }
    }, []);

    return (
        <header
            ref={headerRef}
            className={styles.header}
            data-scrolled={scrolled || undefined}
        >
            <Container className={styles.inner} as="div" cq="page">
                <nav>
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
