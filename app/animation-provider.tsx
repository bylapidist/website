"use client";

import { useEffect, useRef, type ReactNode } from "react";
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
    const initialLoad = useRef(true);

    useEffect(() => {
        initialLoad.current = false;
    }, []);

    return (
        <MotionConfig reducedMotion="user">
            <LazyMotion features={domAnimation}>
                <AnimatePresence mode="wait" initial={false}>
                    <m.main
                        id="main"
                        key={pathname}
                        initial={
                            initialLoad.current ? false : { opacity: 0, y: 16 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.2 }}
                    >
                        {children}
                    </m.main>
                </AnimatePresence>
            </LazyMotion>
        </MotionConfig>
    );
}
