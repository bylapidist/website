import Section from "@/components/Section/Section";
import styles from "./Approach.module.scss";

export default function Approach() {
    return (
        <Section id="approach" heading="My approach">
            <ol className={styles.steps}>
                <li>
                    <strong>Assess</strong> &rarr; review frontend, API
                    boundaries, data flows, and CI.
                </li>
                <li>
                    <strong>Align</strong> &rarr; co-create a roadmap with
                    design, product, and backend leads.
                </li>
                <li>
                    <strong>Execute</strong> &rarr; deliver tokens, components,
                    API contracts, and docs iteratively.
                </li>
                <li>
                    <strong>Govern</strong> &rarr; bake metrics, tests, and
                    review loops into CI for sustained quality.
                </li>
            </ol>
        </Section>
    );
}
