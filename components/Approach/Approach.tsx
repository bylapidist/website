import Section from "@/components/Section/Section";
import styles from "./Approach.module.scss";

export default function Approach() {
    return (
        <Section labelledBy="approach-heading">
            <h2 id="approach-heading">My approach</h2>
            <ol className={styles.steps}>
                <li>
                    <strong>Audit</strong> &rarr; analyse the current UI and
                    spot opportunities.
                </li>
                <li>
                    <strong>Prototype</strong> &rarr; early improvements and
                    gather feedback.
                </li>
                <li>
                    <strong>Rollout</strong> &rarr; launch, measure, and
                    refine.
                </li>
                <li>
                    <strong>Review</strong> &rarr; continuous improvements and
                    review.
                </li>
            </ol>
        </Section>
    );
}
