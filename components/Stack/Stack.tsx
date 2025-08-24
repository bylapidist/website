import type { ElementType, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Stack.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    gap?: string;
    orientation?: "vertical" | "horizontal";
    children: ReactNode;
}

export default function Stack({
    as: Component = "div",
    gap,
    orientation = "vertical",
    className,
    children,
    ...rest
}: Props) {
    const style = gap
        ? ({ "--stack-gap": gap } as React.CSSProperties)
        : undefined;
    return (
        <Component
            className={clsx(
                styles.stack,
                orientation === "horizontal"
                    ? styles.horizontal
                    : styles.vertical,
                className,
            )}
            style={style}
            {...rest}
        >
            {children}
        </Component>
    );
}
