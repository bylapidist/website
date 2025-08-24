/* eslint-disable jsx-a11y/role-supports-aria-props */
import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";
import { Size, Variant } from "@/types";
import styles from "./Radio.module.scss";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
    size?: Size;
    variant?: Variant;
    invalid?: boolean;
};

const Radio = forwardRef<HTMLInputElement, Props>(
    (
        {
            size = Size.MD,
            variant = Variant.Primary,
            invalid,
            className,
            ...rest
        },
        ref,
    ) => {
        return (
            <input
                {...rest}
                ref={ref}
                type="radio"
                className={clsx(styles.radio, className)}
                data-size={size}
                data-variant={variant}
                data-invalid={invalid ? "true" : undefined}
                aria-invalid={invalid || undefined}
            />
        );
    },
);

Radio.displayName = "Radio";

export default Radio;
