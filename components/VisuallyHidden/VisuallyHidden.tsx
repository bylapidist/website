import type { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";

type VisuallyHiddenProps = {
    children: ReactNode;
} & ComponentPropsWithoutRef<"span">;

export default function VisuallyHidden({
    children,
    className,
    ...rest
}: VisuallyHiddenProps) {
    return (
        <span {...rest} className={clsx("visually-hidden", className)}>
            {children}
        </span>
    );
}
