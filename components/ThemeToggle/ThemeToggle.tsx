"use client";

import { useEffect, useState } from "react";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle() {
    type Theme = "light" | "dark";
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const stored = window.localStorage.getItem("theme") as Theme | null;
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const initial = stored ?? (mq.matches ? "dark" : "light");
        document.documentElement.dataset.theme = initial;
        document.documentElement.style.colorScheme = initial;
        setTheme(initial);
    }, []);

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        document.documentElement.style.colorScheme = next;
        window.localStorage.setItem("theme", next);
        setTheme(next);
    };

    const isDark = theme === "dark";

    return (
        <button
            type="button"
            className={styles.toggle}
            onClick={toggle}
            aria-pressed={isDark}
        >
            {isDark ? (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                >
                    <path
                        d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z"
                        fill="currentColor"
                    />
                </svg>
            ) : (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                >
                    <circle cx="12" cy="12" r="5" fill="currentColor" />
                    <g stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                </svg>
            )}
            <VisuallyHidden>
                {isDark ? "Switch to light mode" : "Switch to dark mode"}
            </VisuallyHidden>
        </button>
    );
}
