import { forwardRef } from "react";
import type { LabelHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Label.module.scss";

type Props = LabelHTMLAttributes<HTMLLabelElement> & {
    invalid?: boolean;
    required?: boolean;
};

const Label = forwardRef<HTMLLabelElement, Props>(
    ({ className, invalid, required, children, ...rest }, ref) => (
        <label
            {...rest}
            ref={ref}
            className={clsx(styles.label, className)}
            data-invalid={invalid ? "true" : undefined}
            data-required={required ? "true" : undefined}
        >
            {children}
        </label>
    ),
);

Label.displayName = "Label";

export default Label;
