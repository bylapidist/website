"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { m } from "framer-motion";
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
    children,
}: Props) {
    const sectionStyle = contentVisibility
        ? ({ contentVisibility: "auto", ...style } as CSSProperties)
        : style;

    const headingId = heading
        ? (labelledBy ?? (id ? `${id}-heading` : undefined))
        : labelledBy;
    const HeadingTag = `h${String(headingLevel)}` as ElementType;

    return (
        <m.section
            id={id}
            aria-labelledby={headingId}
            className={className}
            style={sectionStyle}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3 }}
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
