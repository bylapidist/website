import type { SVGProps } from "react";
import clsx from "clsx";
import { Size, type WithSize } from "@/types/props";
import styles from "./Icon.module.scss";
import { icons, type IconName } from "./icons";

export interface IconProps extends SVGProps<SVGSVGElement>, WithSize {
    name: IconName;
    title?: string;
    decorative?: boolean;
}

export default function Icon({
    name,
    size = Size.MD,
    title,
    decorative = false,
    className,
    ...props
}: IconProps) {
    const icon = icons[name];
    return (
        <svg
            viewBox={icon.viewBox}
            className={clsx(styles.icon, className)}
            data-size={size}
            aria-hidden={decorative || undefined}
            {...props}
        >
            {!decorative && title ? <title>{title}</title> : null}
            {icon.path}
        </svg>
    );
}
