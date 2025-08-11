import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
} from "react";
import styles from "./Button.module.scss";

type BaseProps = {
    variant?: "primary" | "secondary" | "ghost";
    size?: "md" | "lg";
    loading?: boolean;
    className?: string;
    children: ReactNode;
};

type ButtonProps = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

type Props = ButtonProps | AnchorProps;

export default function Button({
    variant = "primary",
    size = "md",
    loading = false,
    className,
    children,
    href,
    ...rest
}: Props) {
    const classes = [styles.button, className].filter(Boolean).join(" ");
    const data = {
        "data-variant": variant,
        "data-size": size,
        "data-loading": loading,
    } as const;

    if (href) {
        return (
            <a
                {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
                {...data}
                href={href}
                className={classes}
                aria-busy={loading || undefined}
            >
                {children}
            </a>
        );
    }

    const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;

    return (
        <button
            {...buttonRest}
            {...data}
            className={classes}
            aria-busy={loading || undefined}
            disabled={loading || buttonRest.disabled}
        >
            {children}
        </button>
    );
}
