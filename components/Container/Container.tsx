"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import clsx from "clsx";
import { Size } from "@/types";
import styles from "./Container.module.scss";

interface Props {
    as?: ElementType;
    size?: Size;
    cq?: "page" | "section";
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}

export default function Container({
    as: Component = "div",
    size = Size.MD,
    cq = "section",
    className,
    style,
    children,
}: Props) {
    const classes = clsx(styles.container, className);
    return (
        <Component
            className={classes}
            data-size={size}
            style={{
                // design-lint-disable-next-line
                containerType: "inline-size",
                containerName: cq,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
