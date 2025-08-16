"use client";

import { useEffect, useState } from "react";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
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
                <SunIcon className={styles.icon} />
            ) : (
                <MoonIcon className={styles.icon} />
            )}
            <VisuallyHidden>{label}</VisuallyHidden>
        </button>
    );
}
