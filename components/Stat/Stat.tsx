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
    const classes = [styles.stat, className].filter(Boolean).join(" ");
    return (
        <dl className={classes} data-size={size}>
            <dt>
                {value}
                {suffix && <span aria-hidden="true">{suffix}</span>}
            </dt>
            <dd>{label}</dd>
        </dl>
    );
}
