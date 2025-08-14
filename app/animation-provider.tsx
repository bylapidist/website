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
    const firstRender = useRef(true);

    useEffect(() => {
        firstRender.current = false;
    }, []);

    const motionProps = firstRender.current
        ? {}
        : {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -16 },
              transition: { duration: 0.2 },
          };

    const features = domAnimation;

    return (
        <MotionConfig reducedMotion="user">
            <LazyMotion features={features}>
                <AnimatePresence mode="wait">
                    <m.main id="main" key={pathname} {...motionProps}>
                        {children}
                    </m.main>
                </AnimatePresence>
            </LazyMotion>
        </MotionConfig>
    );
}
