import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import { Size, Variant } from "@/types";
import styles from "./Textarea.module.scss";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    size?: Size;
    variant?: Variant;
    invalid?: boolean;
};

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
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
            <textarea
                {...rest}
                ref={ref}
                className={clsx(styles.textarea, className)}
                data-size={size}
                data-variant={variant}
                data-invalid={invalid ? "true" : undefined}
                aria-invalid={invalid || undefined}
            />
        );
    },
);

Textarea.displayName = "Textarea";

export default Textarea;
