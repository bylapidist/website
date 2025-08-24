import type { ElementType, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Grid.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    gap?: string;
    children: ReactNode;
}

export default function Grid({
    as: Component = "div",
    gap,
    className,
    children,
    ...rest
}: Props) {
    const style = gap
        ? ({ "--grid-gap": gap } as React.CSSProperties)
        : undefined;
    return (
        <Component
            className={clsx(styles.grid, className)}
            style={style}
            {...rest}
        >
            {children}
        </Component>
    );
}
