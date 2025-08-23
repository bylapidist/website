import { useEffect, useState } from "react";

export default function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );
        const handleChange = () => {
            const stored = window.localStorage.getItem("reduced-motion");
            if (stored !== null) {
                setPrefersReducedMotion(stored === "true");
            } else {
                setPrefersReducedMotion(mediaQuery.matches);
            }
        };
        handleChange();
        mediaQuery.addEventListener("change", handleChange);
        window.addEventListener("reduced-motion", handleChange);
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
            window.removeEventListener("reduced-motion", handleChange);
        };
    }, []);

    return prefersReducedMotion;
}
