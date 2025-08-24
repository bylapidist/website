import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";
import { Size, Variant } from "@/types";
import styles from "./Checkbox.module.scss";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
    size?: Size;
    variant?: Variant;
    invalid?: boolean;
};

const Checkbox = forwardRef<HTMLInputElement, Props>(
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
                type="checkbox"
                className={clsx(styles.checkbox, className)}
                data-size={size}
                data-variant={variant}
                data-invalid={invalid ? "true" : undefined}
                aria-invalid={invalid || undefined}
            />
        );
    },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
