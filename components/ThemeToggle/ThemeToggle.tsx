"use client";

import { useEffect } from "react";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import { useDisclosure } from "@/hooks";
import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle() {
    const { isOpen, open, close } = useDisclosure();

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
        if (initial === "dark") {
            open();
        } else {
            close();
        }
    }, [open, close]);

    const theme = isOpen ? "dark" : "light";

    function toggle() {
        const next = theme === "dark" ? "light" : "dark";
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(next);
        window.localStorage.setItem("theme", next);
        if (theme === "dark") {
            close();
        } else {
            open();
        }
    }

    const label =
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

    return (
        <button
            type="button"
            className={styles.toggle}
            onClick={toggle}
            aria-label={label}
            aria-pressed={isOpen}
            data-theme={theme}
        >
            <span className={styles.icon} aria-hidden="true">
                {theme === "light" ? "☾" : "☀"}
            </span>
            <VisuallyHidden>{label}</VisuallyHidden>
        </button>
    );
}
