"use client";

import type { SVGProps } from "react";
import clsx from "clsx";
import styles from "./Header.module.scss";

export default function LogoMark({
    className,
    ...props
}: SVGProps<SVGSVGElement>) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 64 64"
            className={clsx(styles.logoMark, className)}
            {...props}
        >
            <polygon className={styles.logoBlue} points="0,0 0,32 32,32" />
            <polygon className={styles.logoGreen} points="0,32 0,64 32,64" />
            <polygon className={styles.logoYellow} points="32,0 32,64 64,32" />
        </svg>
    );
}
