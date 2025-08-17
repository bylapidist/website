import Section from "@/components/Section/Section";
import styles from "./Approach.module.scss";

export default function Approach() {
    return (
        <Section id="approach" heading="My approach">
            <ol className={styles.steps}>
                <li>
                    <strong>Assess</strong> &rarr; deep-dive current UI,
                    tooling, and workflows.
                </li>
                <li>
                    <strong>Align</strong> &rarr; co-create a roadmap with
                    design and product leads.
                </li>
                <li>
                    <strong>Execute</strong> &rarr; deliver tokens, components,
                    contracts, and docs iteratively.
                </li>
                <li>
                    <strong>Govern</strong> &rarr; bake metrics and review loops
                    into CI for sustained quality.
                </li>
            </ol>
        </Section>
    );
}
