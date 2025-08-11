import { useId } from "react";
import styles from "./Stat.module.scss";

interface Props {
    value: string | number;
    label: string;
    suffix?: string;
    size?: "md" | "lg";
    className?: string;
}

export default function Stat({
    value,
    label,
    suffix,
    size = "md",
    className,
}: Props) {
    const id = useId();
    const classes = [styles.stat, className].filter(Boolean).join(" ");
    return (
        <div className={classes} data-size={size}>
            <div className={styles.value} aria-describedby={id}>
                {value}
                {suffix && <span aria-hidden="true">{suffix}</span>}
            </div>
            <div id={id} className={styles.label}>
                {label}
            </div>
        </div>
    );
}
