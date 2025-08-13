import { forwardRef } from "react";
import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
    Ref,
} from "react";
import clsx from "clsx";
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

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
    (
        {
            variant = "primary",
            size = "md",
            loading = false,
            className,
            children,
            href,
            ...rest
        },
        ref,
    ) => {
        const classes = clsx(styles.button, className);
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
                    ref={ref as Ref<HTMLAnchorElement>}
                >
                    {children}
                </a>
            );
        }

        const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;

        return (
            <button
                {...buttonRest}
                type={buttonRest.type ?? "button"}
                {...data}
                className={classes}
                aria-busy={loading || undefined}
                disabled={loading || buttonRest.disabled}
                ref={ref as Ref<HTMLButtonElement>}
            >
                {children}
            </button>
        );
    },
);

Button.displayName = "Button";

export default Button;
