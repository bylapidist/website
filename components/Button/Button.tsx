"use client";

import { forwardRef } from "react";
import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
    Ref,
} from "react";
import clsx from "clsx";
import { Size, Variant } from "@/packages/types";
import styles from "./Button.module.scss";

type BaseProps = {
    variant?: Variant.Primary | Variant.Secondary;
    size?: Size;
    className?: string;
    children: ReactNode;
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
            variant = Variant.Primary,
            size = Size.MD,
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
        } as const;

        if (href) {
            const { disabled, onClick, tabIndex, ...anchorRest } =
                rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
                    disabled?: boolean;
                };
            return (
                <a
                    {...anchorRest}
                    {...data}
                    href={href}
                    className={classes}
                    ref={ref as Ref<HTMLAnchorElement>}
                    aria-disabled={disabled ? "true" : undefined}
                    tabIndex={disabled ? -1 : tabIndex}
                    onClick={
                        disabled
                            ? (event) => {
                                  event.preventDefault();
                                  event.stopPropagation();
                              }
                            : onClick
                    }
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
