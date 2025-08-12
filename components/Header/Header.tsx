"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/Container/Container";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import styles from "./Header.module.scss";

export default function Header() {
    const [theme, setTheme] = useState<"light" | "dark" | undefined>();

    useEffect(() => {
        const stored = window.localStorage.getItem("theme");
        if (stored === "light" || stored === "dark") {
            document.documentElement.setAttribute("data-theme", stored);
            document.documentElement.style.colorScheme = stored;
            setTheme(stored);
        }
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        document.documentElement.style.colorScheme = next;
        window.localStorage.setItem("theme", next);
        setTheme(next);
    };

    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link
                    href="/"
                    className={styles.logo}
                    aria-label="Brett Dorrans"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 150 24"
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <title>Brett Dorrans</title>
                        <text
                            x="0"
                            y="17"
                            fontSize="16"
                            fontFamily="inherit"
                            fill="currentColor"
                        >
                            Brett Dorrans
                        </text>
                    </svg>
                </Link>
                <nav aria-label="Main">
                    <ul className={styles.nav}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/articles">Articles</Link>
                        </li>
                        <li>
                            <Link href="/#services">Services</Link>
                        </li>
                        <li>
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <button
                    type="button"
                    className={styles.themeToggle}
                    onClick={toggleTheme}
                    aria-pressed={theme === "dark"}
                >
                    <span aria-hidden="true">
                        {theme === "dark" ? "🌙" : "☀️"}
                    </span>
                    <VisuallyHidden>Toggle dark mode</VisuallyHidden>
                </button>
            </Container>
        </header>
    );
}
