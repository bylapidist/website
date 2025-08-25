import type { ElementType, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Layout.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    gap?: string;
    orientation?: "vertical" | "horizontal";
    layout?: "stack" | "grid" | "card";
    children: ReactNode;
}

export default function Layout({
    as: Component = "div",
    gap,
    orientation = "vertical",
    layout = "stack",
    className,
    children,
    ...rest
}: Props) {
    const style =
        gap || layout === "card"
            ? ({
                  ...(layout === "grid" || layout === "card"
                      ? {
                            "--grid-gap": gap ?? "var(--space-xl)",
                        }
                      : { "--stack-gap": gap }),
              } as React.CSSProperties)
            : undefined;
    return (
        <Component
            className={clsx(
                layout === "grid" || layout === "card"
                    ? styles.grid
                    : styles.stack,
                layout === "stack" &&
                    (orientation === "horizontal"
                        ? styles.horizontal
                        : styles.vertical),
                layout === "card" && styles.cardGrid,
                className,
            )}
            style={style}
            {...rest}
        >
            {children}
        </Component>
    );
}
