import type { ElementType, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Stack.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    gap?: string;
    children: ReactNode;
}

export default function Stack({
    as: Component = "div",
    gap,
    className,
    children,
    ...rest
}: Props) {
    const style = gap
        ? ({ "--stack-gap": gap } as React.CSSProperties)
        : undefined;
    return (
        <Component
            className={clsx(styles.stack, className)}
            style={style}
            {...rest}
        >
            {children}
        </Component>
    );
}
