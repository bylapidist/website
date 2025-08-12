"use client";

import { useEffect, useState } from "react";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        if (typeof window === "undefined") return;
        const stored = window.localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        const initial =
            (stored as "light" | "dark" | null) ??
            (prefersDark ? "dark" : "light");
        document.documentElement.classList.toggle("dark", initial === "dark");
        document.documentElement.classList.toggle("light", initial === "light");
        setTheme(initial);
    }, []);

    function toggle() {
        const next = theme === "dark" ? "light" : "dark";
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(next);
        window.localStorage.setItem("theme", next);
        setTheme(next);
    }

    const label =
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

    return (
        <button
            type="button"
            className={styles.toggle}
            onClick={toggle}
            aria-label={label}
        >
            {theme === "dark" ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={styles.icon}
                >
                    <circle cx="12" cy="12" r="5" />
                    <g strokeWidth="2" stroke="currentColor" fill="none">
                        <line x1="12" y1="1" x2="12" y2="4" />
                        <line x1="12" y1="20" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="4" y2="12" />
                        <line x1="20" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                    </g>
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={styles.icon}
                >
                    <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z" />
                </svg>
            )}
            <VisuallyHidden>{label}</VisuallyHidden>
        </button>
    );
}
