"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import Container from "@/components/Container/Container";

interface Props {
    id?: string;
    labelledBy?: string;
    heading?: ReactNode;
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    headingClassName?: string;
    className?: string;
    containerSize?: "s" | "m" | "l";
    style?: CSSProperties;
    contentVisibility?: boolean;
    animate?: boolean;
    children: ReactNode;
}

export default function Section({
    id,
    labelledBy,
    heading,
    headingLevel = 2,
    headingClassName,
    className,
    containerSize,
    style,
    contentVisibility = true,
    animate = true,
    children,
}: Props) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px" });
    const shouldReduceMotion = useReducedMotion();

    const sectionStyle = contentVisibility
        ? ({ contentVisibility: "auto", ...style } as CSSProperties)
        : style;

    const headingId = heading
        ? (labelledBy ?? (id ? `${id}-heading` : undefined))
        : labelledBy;
    const HeadingTag = `h${String(headingLevel)}` as ElementType;

    const shouldAnimate = animate && !shouldReduceMotion;

    if (!shouldAnimate) {
        return (
            <section
                id={id}
                aria-labelledby={headingId}
                className={className}
                style={sectionStyle}
            >
                <Container size={containerSize}>
                    {heading && (
                        <HeadingTag id={headingId} className={headingClassName}>
                            {heading}
                        </HeadingTag>
                    )}
                    {children}
                </Container>
            </section>
        );
    }

    return (
        <m.section
            ref={ref}
            id={id}
            aria-labelledby={headingId}
            aria-hidden={!isInView ? true : undefined}
            className={className}
            style={sectionStyle}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {
                    opacity: 0,
                    y: 32,
                    visibility: "hidden",
                    pointerEvents: "none",
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    visibility: "visible",
                    pointerEvents: "auto",
                },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <Container size={containerSize}>
                {heading && (
                    <HeadingTag id={headingId} className={headingClassName}>
                        {heading}
                    </HeadingTag>
                )}
                {children}
            </Container>
        </m.section>
    );
}
