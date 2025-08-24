import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";
import clsx from "clsx";
import { Size, Variant } from "@/packages/types";
import styles from "./Select.module.scss";

type Props = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
    size?: Size;
    variant?: Variant;
    invalid?: boolean;
};

const Select = forwardRef<HTMLSelectElement, Props>(
    (
        {
            size = Size.MD,
            variant = Variant.Primary,
            invalid,
            className,
            children,
            ...rest
        },
        ref,
    ) => {
        return (
            <select
                {...rest}
                ref={ref}
                className={clsx(styles.select, className)}
                data-size={size}
                data-variant={variant}
                data-invalid={invalid ? "true" : undefined}
                aria-invalid={invalid || undefined}
            >
                {children}
            </select>
        );
    },
);

Select.displayName = "Select";

export default Select;
