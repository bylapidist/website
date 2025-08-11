import { useId } from "react";
import styles from "./Stat.module.scss";

interface Props {
    value: string;
    label: string;
    suffix?: string;
}

export default function Stat({ value, label, suffix }: Props) {
    const id = useId();
    return (
        <div className={styles.stat}>
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
