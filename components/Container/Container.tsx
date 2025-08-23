import type { ElementType, ReactNode } from "react";
import clsx from "clsx";
import { Size } from "@/lib/enums";
import styles from "./Container.module.scss";

interface Props {
    as?: ElementType;
    size?: Size;
    cq?: "page" | "section";
    className?: string;
    children: ReactNode;
}

export default function Container({
    as: Component = "div",
    size = Size.Md,
    cq = "section",
    className,
    children,
}: Props) {
    const classes = clsx(styles.container, className);
    return (
        <Component
            className={classes}
            data-size={size}
            style={{ containerType: "inline-size", containerName: cq }}
        >
            {children}
        </Component>
    );
}
