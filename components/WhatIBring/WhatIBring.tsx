import Section from "@/components/Section/Section";
import styles from "./WhatIBring.module.scss";

export default function WhatIBring() {
    return (
        <Section id="what-i-bring" heading="What I bring to the table">
            <p>
                I bridge product, design, and engineering to steer UI strategy.
            </p>
            <p>
                My work spans scrappy MVPs to enterprise platforms adopted by
                hundreds of engineers and many more users.
            </p>
            <p>
                By pairing robust tooling with clear governance, I make sure
                your UI systems scale without sacrificing quality.
            </p>
            <ul className={styles.steps}>
                <li>Grow cross-functional teams and mentoring culture.</li>
                <li>Eliminate style drift with token-driven theming.</li>
                <li>Cut PR churn by 40% through shared components.</li>
                <li>Automate docs and handoff to speed delivery.</li>
                <li>Embed accessibility and performance budgets.</li>
                <li>Ship complex product surfaces in weeks, not months.</li>
            </ul>
        </Section>
    );
}
