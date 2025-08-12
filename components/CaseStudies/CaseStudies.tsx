import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./CaseStudies.module.scss";

export default function CaseStudies() {
    return (
        <Section
            id="case-studies"
            heading="Case studies"
            className={styles.caseStudies}
        >
            <div className={styles.cards}>
                <Card title="Global fintech">
                    <img
                        src="/placeholder.svg"
                        alt=""
                        className={styles.visual}
                    />
                    <p>
                        <strong>Before:</strong> fragmented widgets, duplicated
                        effort, inaccessible flows.
                    </p>
                    <p>
                        <strong>After:</strong> unified tokens, audited patterns
                        &mdash; CI checks keep regressions out.
                    </p>
                    <p>
                        <strong>Impact:</strong> -38% UI bugs, +24% velocity on
                        UI tickets.
                    </p>
                    <p className={styles.stat}>-38% UI bugs</p>
                </Card>
                <Card title="Healthcare SaaS">
                    <img
                        src="/placeholder.svg"
                        alt=""
                        className={styles.visual}
                    />
                    <p>
                        <strong>Before:</strong> slow UI updates, inconsistent
                        components, unclear ownership.
                    </p>
                    <p>
                        <strong>After:</strong> centralized library, automated
                        docs, clear contribution model.
                    </p>
                    <p>
                        <strong>Impact:</strong> release cycles 2× faster,
                        support tickets down 30%.
                    </p>
                    <p className={styles.stat}>2× faster releases</p>
                </Card>
                <Card title="E-commerce platform">
                    <img
                        src="/placeholder.svg"
                        alt=""
                        className={styles.visual}
                    />
                    <p>
                        <strong>Before:</strong> brand drift across storefronts,
                        costly redesigns.
                    </p>
                    <p>
                        <strong>After:</strong> themeable system, shared
                        primitives.
                    </p>
                    <p>
                        <strong>Impact:</strong> +18% conversion, 40% fewer
                        design iterations.
                    </p>
                    <p className={styles.stat}>+18% conversion</p>
                </Card>
            </div>
            <div className={styles.cta}>
                <Button href="#contact" size="lg">
                    Want these results for your team? Book a call
                </Button>
            </div>
        </Section>
    );
}
