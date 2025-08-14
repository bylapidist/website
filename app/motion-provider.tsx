"use client";

import type { ReactNode } from "react";
import {
    AnimatePresence,
    domAnimation,
    LazyMotion,
    m,
    useReducedMotion,
} from "framer-motion";
import { usePathname } from "next/navigation";

export default function MotionProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const shouldReduceMotion = useReducedMotion();

    return (
        <LazyMotion features={domAnimation} strict>
            <AnimatePresence mode="wait" initial={false}>
                <m.main
                    key={pathname}
                    id="main"
                    initial={shouldReduceMotion ? "visible" : "hidden"}
                    animate="visible"
                    exit={shouldReduceMotion ? undefined : "exit"}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -20 },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                >
                    {children}
                </m.main>
            </AnimatePresence>
        </LazyMotion>
    );
}
