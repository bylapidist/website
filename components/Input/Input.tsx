import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";
import { Size, Variant } from "@/types";
import styles from "./Input.module.scss";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: Size;
    variant?: Variant;
    invalid?: boolean;
};

const Input = forwardRef<HTMLInputElement, Props>(
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
                className={clsx(styles.input, className)}
                data-size={size}
                data-variant={variant}
                data-invalid={invalid ? "true" : undefined}
                aria-invalid={invalid || undefined}
            />
        );
    },
);

Input.displayName = "Input";

export default Input;
