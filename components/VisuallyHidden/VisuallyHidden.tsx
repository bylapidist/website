import type { ComponentPropsWithoutRef, ReactNode } from "react";

type VisuallyHiddenProps = {
    children: ReactNode;
} & ComponentPropsWithoutRef<"span">;

export default function VisuallyHidden({
    children,
    style,
    ...rest
}: VisuallyHiddenProps) {
    return (
        <span
            {...rest}
            style={{
                position: "absolute",
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                whiteSpace: "nowrap",
                border: 0,
                ...style,
            }}
        >
            {children}
        </span>
    );
}
