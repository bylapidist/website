"use client";

import type { ReactNode } from "react";
import {
    AnimatePresence,
    domAnimation,
    LazyMotion,
    m,
    MotionConfig,
} from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
    children: ReactNode;
}

export default function AnimationProvider({ children }: Props) {
    const pathname = usePathname();
    return (
        <MotionConfig reducedMotion="user">
            <LazyMotion features={domAnimation}>
                <AnimatePresence mode="wait" initial={false}>
                    <m.div
                        key={pathname}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.2 }}
                    >
                        {children}
                    </m.div>
                </AnimatePresence>
            </LazyMotion>
        </MotionConfig>
    );
}
