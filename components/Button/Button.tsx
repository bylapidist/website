"use client";

import { forwardRef } from "react";
import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    MouseEvent,
    ReactNode,
    Ref,
} from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

type BaseProps = {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    className?: string;
    children: ReactNode;
    fullWidth?: boolean;
};

type ButtonProps = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
        disabled?: boolean;
    };

type Props = ButtonProps | AnchorProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
    (
        {
            variant = "primary",
            size = "md",
            className,
            children,
            href,
            fullWidth = false,
            ...rest
        },
        ref,
    ) => {
        const classes = clsx(styles.button, className);
        const data = {
            "data-variant": variant,
            "data-size": size,
            "data-fullwidth": fullWidth ? "true" : undefined,
        } as const;

        if (href) {
            const { disabled, onClick, tabIndex, ...anchorRest } =
                rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
                    disabled?: boolean;
                };

            function handleClick(event: MouseEvent<HTMLAnchorElement>) {
                if (disabled) {
                    event.preventDefault();
                    event.stopPropagation();
                    return;
                }
                onClick?.(event);
            }

            return (
                <a
                    {...anchorRest}
                    {...data}
                    href={disabled ? undefined : href}
                    className={classes}
                    ref={ref as Ref<HTMLAnchorElement>}
                    aria-disabled={disabled || undefined}
                    tabIndex={disabled ? -1 : tabIndex}
                    onClick={handleClick}
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
                disabled={buttonRest.disabled}
                ref={ref as Ref<HTMLButtonElement>}
            >
                {children}
            </button>
        );
    },
);

Button.displayName = "Button";

export default Button;
