import type { ElementType, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import Grid from "../Grid/Grid";
import styles from "./CardGrid.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    gap?: string;
    children: ReactNode;
}

export default function CardGrid({
    as,
    gap,
    className,
    children,
    ...rest
}: Props) {
    return (
        <Grid
            as={as}
            gap={gap ?? "var(--space-xl)"}
            className={clsx(styles.cardGrid, className)}
            {...rest}
        >
            {children}
        </Grid>
    );
}
