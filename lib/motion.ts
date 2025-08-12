import { useEffect, useRef } from "react";

export function useInView<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const prefersReduced = window
            .matchMedia("(prefers-reduced-motion: reduce)")
            .matches;

        if (prefersReduced) {
            node.classList.add("isVisible");
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("isVisible");
                    observer.disconnect();
                }
            });
        });

        observer.observe(node);
        return () => {
            observer.disconnect();
        };
    }, []);

    return ref;
}
