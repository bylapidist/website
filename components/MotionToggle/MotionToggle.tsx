"use client";

import { useEffect, useState } from "react";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import MotionIcon from "./MotionIcon";
import MotionOffIcon from "./MotionOffIcon";
import styles from "./MotionToggle.module.scss";

export default function MotionToggle() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const stored = window.localStorage.getItem("reduced-motion");
        const prefers = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        const initial = stored !== null ? stored === "true" : prefers;
        document.documentElement.classList.toggle("reducedMotion", initial);
        setReduced(initial);
    }, []);

    function toggle() {
        const next = !reduced;
        document.documentElement.classList.toggle("reducedMotion", next);
        window.localStorage.setItem("reduced-motion", String(next));
        window.dispatchEvent(new Event("reduced-motion"));
        setReduced(next);
    }

    const label = reduced ? "Enable motion" : "Reduce motion";

    return (
        <button
            type="button"
            className={styles.toggle}
            onClick={toggle}
            aria-label={label}
            data-reduced={reduced}
        >
            {reduced ? (
                <MotionOffIcon className={styles.icon} />
            ) : (
                <MotionIcon className={styles.icon} />
            )}
            <VisuallyHidden>{label}</VisuallyHidden>
        </button>
    );
}
