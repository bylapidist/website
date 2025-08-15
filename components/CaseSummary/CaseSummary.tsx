import styles from "./CaseSummary.module.scss";

interface Props {
    role: string;
    year: string;
    stack: string;
    outcomes: string;
}

export default function CaseSummary({ role, year, stack, outcomes }: Props) {
    return (
        <dl className={styles.summary}>
            <div>
                <dt>Role</dt>
                <dd>{role}</dd>
            </div>
            <div>
                <dt>Year</dt>
                <dd>{year}</dd>
            </div>
            <div>
                <dt>Stack</dt>
                <dd>{stack}</dd>
            </div>
            <div>
                <dt>Outcomes</dt>
                <dd>{outcomes}</dd>
            </div>
        </dl>
    );
}
