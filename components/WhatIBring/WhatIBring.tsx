import Section from "@/components/Section/Section";
import styles from "./WhatIBring.module.scss";

export default function WhatIBring() {
    return (
        <Section id="what-i-bring" heading="What I bring to the table">
            <p>
                I bridge product, design, and engineering to steer UI strategy.
            </p>
            <p>
                My experience ranges from MVPs to fintech platforms adopted by
                hundreds of engineers and tens of thousands of users.
            </p>
            <p>
                I pair tooling with clear governance so UI and API contracts
                evolve without regressions, and without sacrificing quality as
                it scales.
            </p>
            <ul className={styles.steps}>
                <li>Grow cross-functional teams and mentoring culture.</li>
                <li>
                    Design end-to-end typesafe API contracts that protect UI
                    integrity.
                </li>
                <li>Eliminate style drift with token-driven theming.</li>
                <li>
                    Cut PR churn 40% through shared components and typed utils.
                </li>
                <li>Automate docs, checks, and deployments via CI/CD.</li>
                <li>Embed accessibility, performance, and error budgets.</li>
            </ul>
        </Section>
    );
}
