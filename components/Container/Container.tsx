import type { ReactNode, ElementType } from "react";

interface Props {
    as?: ElementType;
    size?: "s" | "m" | "l";
    cq?: string;
    className?: string;
    children: ReactNode;
}

export default function Container({
    as: Component = "div",
    size = "m",
    cq,
    className,
    children,
}: Props) {
    const classes = ["container", className].filter(Boolean).join(" ");
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
