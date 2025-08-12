import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./CaseStudies.module.scss";

const studies = [
    {
        title: "Global fintech",
        before: "Fragmented widgets, duplicated effort, inaccessible flows.",
        after: "Unified tokens, audited patterns—CI checks keep regressions out.",
        impact: "-38% UI bugs • +24% velocity",
    },
    {
        title: "Healthcare SaaS",
        before: "Legacy components slowed delivery and failed WCAG.",
        after: "Modular library, automated a11y tests, streamlined release train.",
        impact: "+30% delivery speed • 0 a11y regressions",
    },
    {
        title: "Retail platform",
        before: "Inconsistent brand, rework across teams, brittle CSS.",
        after: "Token-driven theming, shared CI, design review playbook.",
        impact: "+20% accessibility score • 15% faster QA",
    },
];

export default function CaseStudies() {
    return (
        <Section id="case-studies" heading="Case studies" containerSize="l">
            <div className={styles.grid}>
                {studies.map((study) => (
                    <Card
                        key={study.title}
                        className={styles.case}
                        title={study.title}
                    >
                        <svg
                            className={styles.visual}
                            width="320"
                            height="180"
                            aria-hidden="true"
                            focusable="false"
                        />
                        <p>
                            <strong>Before:</strong> {study.before}
                        </p>
                        <p>
                            <strong>After:</strong> {study.after}
                        </p>
                        <p className={styles.impact}>
                            <strong>{study.impact}</strong>
                        </p>
                    </Card>
                ))}
            </div>
            <div className={styles.cta}>
                <Button href="#contact" size="lg">
                    Want these results for your team? Book a call.
                </Button>
            </div>
        </Section>
    );
}
