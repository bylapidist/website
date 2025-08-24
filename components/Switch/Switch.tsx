import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";
import { Size, Variant } from "@/packages/types";
import styles from "./Switch.module.scss";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
    size?: Size;
    variant?: Variant;
    invalid?: boolean;
};

const Switch = forwardRef<HTMLInputElement, Props>(
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
                role="switch"
                className={clsx(styles.switch, className)}
                data-size={size}
                data-variant={variant}
                data-invalid={invalid ? "true" : undefined}
                aria-invalid={invalid || undefined}
            />
        );
    },
);

Switch.displayName = "Switch";

export default Switch;
