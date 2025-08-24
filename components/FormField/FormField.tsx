import { cloneElement, ReactElement, ReactNode, useId } from "react";
import clsx from "clsx";
import Label from "@/components/Label/Label";
import styles from "./FormField.module.scss";

type FieldProps = {
    id?: string;
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
    required?: boolean;
    invalid?: boolean;
    children: ReactElement<{
        id?: string;
        invalid?: boolean;
        "aria-describedby"?: string;
    }>;
};

const FormField = ({
    id: idProp,
    label,
    description,
    error,
    required,
    invalid,
    children,
}: FieldProps) => {
    const generatedId = useId();
    const id = idProp ?? children.props.id ?? generatedId;
    const descriptionId = description ? `${id}-desc` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const ariaDescribedBy =
        [children.props["aria-describedby"], descriptionId, errorId]
            .filter(Boolean)
            .join(" ") || undefined;
    const isInvalid = invalid || Boolean(error);

    const control = cloneElement(children, {
        id,
        invalid: isInvalid || undefined,
        "aria-describedby": ariaDescribedBy,
    });

    return (
        <div className={clsx(styles.field)}>
            {label && (
                <Label htmlFor={id} required={required} invalid={isInvalid}>
                    {label}
                </Label>
            )}
            {control}
            {description && (
                <p id={descriptionId} className={styles.description}>
                    {description}
                </p>
            )}
            {error && (
                <p id={errorId} className={styles.error}>
                    {error}
                </p>
            )}
        </div>
    );
};

export default FormField;
