import type { ReactNode, ElementType } from "react";

interface Props {
    as?: ElementType;
    size?: "s" | "m" | "l";
    cq?: "page" | "section";
    className?: string;
    children: ReactNode;
}

export default function Container({
    as: Component = "div",
    size = "m",
    cq = "section",
    className,
    children,
}: Props) {
    return (
        <Component
            className={className}
            data-size={size}
            style={{ containerType: "inline-size", containerName: cq }}
        >
            {children}
        </Component>
    );
}
