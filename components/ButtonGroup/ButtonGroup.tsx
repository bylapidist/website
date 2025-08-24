import type { ElementType, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./ButtonGroup.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    children: ReactNode;
}

export default function ButtonGroup({
    as: Component = "div",
    className,
    children,
    ...rest
}: Props) {
    return (
        <Component className={clsx(styles.buttonGroup, className)} {...rest}>
            {children}
        </Component>
    );
}
