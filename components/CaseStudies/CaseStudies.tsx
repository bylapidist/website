import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import B2CVisual from "./B2CVisual";
import styles from "./CaseStudies.module.scss";
import EcommerceVisual from "./EcommerceVisual";
import GlobalFintechVisual from "./GlobalFintechVisual";

const caseStudies = [
    {
        title: "Global fintech",
        Visual: GlobalFintechVisual,
        context:
            "International payments platform processing millions of transactions daily.",
        team: "10 engineers across 3 squads",
        challenge:
            "Fragmented widgets and 40% component duplication causing accessibility defects.",
        solution:
            "Unified design tokens, built a shared component kit, and added CI accessibility audits.",
        impact: "Token-driven system adopted by 100% of teams; audits stopped regressions and cut UI bug backlog 33%.",
    },
    {
        title: "B2C SaaS",
        Visual: B2CVisual,
        context: "Consumer subscription service with web and mobile clients.",
        team: "6-person frontend guild",
        challenge: "Slow onboarding, inconsistent UI, hard-to-debug layouts.",
        solution:
            "Bootstrap docs and codemods standardised layouts and eliminated dead styles.",
        impact: "Halved onboarding time and lifted release velocity 20%.",
    },
    {
        title: "Ecommerce",
        Visual: EcommerceVisual,
        context: "Retail marketplace fulfilling millions of orders worldwide.",
        team: "8-person platform team",
        challenge: "Flaky components, accessibility gaps, shipping delays.",
        solution:
            "Refactored component library, added automated a11y tests, and simplified APIs.",
        impact: "Cut UI bug backlog 60% and achieved WCAG AA compliance.",
    },
];

export default function CaseStudies() {
    return (
        <Section
            id="case-studies"
            heading="Case studies"
            className={styles.caseStudies}
        >
            <p className={styles.tagline}>
                Real-world outcomes from complex UI work.
            </p>

            <ul className={styles.list}>
                {caseStudies.map(
                    ({
                        title,
                        Visual,
                        context,
                        team,
                        challenge,
                        solution,
                        impact,
                    }) => (
                        <Card
                            as="li"
                            key={title}
                            title={title}
                            className={styles.item}
                        >
                            <div className={styles.media}>
                                <Visual />
                            </div>
                            <div className={styles.content}>
                                <p>
                                    <strong>Business context:</strong> {context}
                                </p>
                                <p>
                                    <strong>Team:</strong> {team}
                                </p>
                                <p>
                                    <strong>Challenge:</strong> {challenge}
                                </p>
                                <p>
                                    <strong>Solution:</strong> {solution}
                                </p>
                                <p className={styles.impact}>
                                    <strong>Impact:</strong> {impact}
                                </p>
                            </div>
                        </Card>
                    ),
                )}
            </ul>
            <div className={styles.cta}>
                <p>Want these results for your team?</p>
                <Button href="#contact">Schedule a call</Button>
            </div>
        </Section>
    );
}
