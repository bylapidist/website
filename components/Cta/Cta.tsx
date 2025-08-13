import Button from "@/components/Button/Button";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "md" | "lg";
    loading?: boolean;
    className?: string;
    children?: ReactNode;
    href?: string;
}

export function BookCallButton({
    children = "Book a call",
    href = "#contact",
    ...props
}: Props) {
    return (
        <Button href={href} {...props}>
            {children}
        </Button>
    );
}

export function DownloadDeckButton({
    children = "Download capabilities deck",
    href = "/brett-dorrans-cv.pdf",
    variant = "secondary",
    ...props
}: Props) {
    return (
        <Button href={href} variant={variant} {...props}>
            {children}
        </Button>
    );
}
