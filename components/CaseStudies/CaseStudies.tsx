import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./CaseStudies.module.scss";

export default function CaseStudies() {
    return (
        <Section id="case-studies" heading="Case studies" className={styles.caseStudies}>
            <div className={styles.cards}>
                <Card title="Global fintech" size="lg">
                    <svg className={styles.visual} aria-hidden="true" viewBox="0 0 160 90" />
                    <p>
                        <strong>Before:</strong> fragmented widgets, duplicated effort,
                        inaccessible flows.
                    </p>
                    <p>
                        <strong>After:</strong> unified tokens, audited patterns—CI checks
                        keep regressions out.
                    </p>
                    <p className={styles.impact}>
                        <span className={styles.stat}>-38% UI bugs</span>
                        <span className={styles.stat}>+24% velocity</span>
                    </p>
                </Card>
                <Card title="SaaS analytics" size="lg">
                    <svg className={styles.visual} aria-hidden="true" viewBox="0 0 160 90" />
                    <p>
                        <strong>Before:</strong> slow onboarding, inconsistent charts,
                        hard-to-debug layouts.
                    </p>
                    <p>
                        <strong>After:</strong> modular chart library and usage guidelines.
                    </p>
                    <p className={styles.impact}>
                        <span className={styles.stat}>-40% onboarding time</span>
                        <span className={styles.stat}>-30% support tickets</span>
                    </p>
                </Card>
                <Card title="E-commerce platform" size="lg">
                    <svg className={styles.visual} aria-hidden="true" viewBox="0 0 160 90" />
                    <p>
                        <strong>Before:</strong> unstyled components, accessibility gaps,
                        shipping delays.
                    </p>
                    <p>
                        <strong>After:</strong> accessible component library and automated
                        theme testing.
                    </p>
                    <p className={styles.impact}>
                        <span className={styles.stat}>+12% checkout completion</span>
                        <span className={styles.stat}>-25% build time</span>
                    </p>
                </Card>
            </div>
            <div className={styles.cta}>
                <p>Want these results for your team?</p>
                <Button href="#contact">Book a call</Button>
            </div>
        </Section>
    );
}
