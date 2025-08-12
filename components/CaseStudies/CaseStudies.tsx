import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./CaseStudies.module.scss";

const studies = [
    {
        title: "Global fintech",
        before: "Fragmented widgets, duplicated effort, inaccessible flows.",
        after: "Unified tokens, audited patterns—CI checks keep regressions out.",
        impact: "-38% UI bugs / +24% velocity",
    },
    {
        title: "Health startup",
        before: "Design debt slowed releases.",
        after: "Component library with accessibility baked in.",
        impact: "Shipped features 2× faster",
    },
    {
        title: "Enterprise SaaS",
        before: "Inconsistent UX across products.",
        after: "Cross-suite design language.",
        impact: "+30% adoption across teams",
    },
];

export default function CaseStudies() {
    return (
        <Section
            id="case-studies"
            heading="Case studies"
            className={styles.caseStudies}
        >
            <div className={styles.grid}>
                {studies.map((study) => (
                    <Card key={study.title} title={study.title}>
                        <img
                            src="/placeholder.svg"
                            alt=""
                            className={styles.visual}
                        />
                        <p>
                            <strong>Before:</strong> {study.before}
                        </p>
                        <p>
                            <strong>After:</strong> {study.after}
                        </p>
                        <p className={styles.impact}>
                            <strong>Impact:</strong> {study.impact}
                        </p>
                    </Card>
                ))}
            </div>
            <div className={styles.cta}>
                <p>Want these results for your team?</p>
                <Button href="#contact" size="lg">Book a call</Button>
            </div>
        </Section>
    );
}
