import Section from "@/components/Section/Section";
import styles from "./WhatIBring.module.scss";

export default function WhatIBring() {
    return (
        <Section labelledBy="problem-to-solution-heading">
            <h2 id="problem-to-solution-heading">What I bring to the table</h2>
            <p>I bridge the gap between product, design and engineering.</p>
            <p>
                My work has shaped everything from small internal tools to
                enterprise level design systems used across the globe.
            </p>
            <p>
                With the right tools, smart processes, and well structured
                teams, I make sure your UI systems do more than scale.
            </p>
            <ul className={styles.steps}>
                <li>Build teams and cross-functional culture.</li>
                <li>Tame design drift with scalable tokens.</li>
                <li>Cut PR nitpicks via shared components.</li>
                <li>Speed handoff through automated docs.</li>
                <li>Bake in accessibility from the start.</li>
                <li>Scale complex UI products quickly.</li>
            </ul>
        </Section>
    );
}
