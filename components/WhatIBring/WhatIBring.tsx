import { Card, Container } from "@/components";
import styles from "./WhatIBring.module.scss";

export default function WhatIBring() {
    return (
        <Container>
            <Card
                as="section"
                id="what-i-bring"
                heading="What I bring to the table"
                headingLevel={2}
            >
                <div className={styles.copy}>
                    <p>
                        I bridge product, design, and engineering to steer UI
                        strategy.
                    </p>
                    <p>
                        My experience ranges from MVPs to fintech platforms
                        adopted by hundreds of engineers and tens of thousands
                        of users.
                    </p>
                    <p>
                        I pair tooling with clear governance so UI and API
                        contracts evolve without regressions, and without
                        sacrificing quality as it scales.
                    </p>
                    <ul className={styles.steps}>
                        <li>
                            I grow cross-functional teams and mentoring culture.
                        </li>
                        <li>
                            I design end-to-end typesafe API contracts that
                            protect UI integrity.
                        </li>
                        <li>
                            I eliminate style drift with token-driven theming.
                        </li>
                        <li>
                            I cut PR churn ~40% through shared components and
                            typed utils.
                        </li>
                        <li>
                            I automate docs, checks, and deployments via CI/CD.
                        </li>
                        <li>
                            I embed accessibility, performance, and error
                            budgets.
                        </li>
                    </ul>
                </div>
            </Card>
        </Container>
    );
}
