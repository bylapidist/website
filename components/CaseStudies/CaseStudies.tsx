import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./CaseStudies.module.scss";

export default function CaseStudies() {
    return (
        <Section id="case-studies" heading="Case studies" className={styles.caseStudies}>
            <div className={styles.grid}>
                <Card title="Global fintech" className={styles.case}>
                    <svg className={styles.visual} viewBox="0 0 200 120" aria-hidden="true" />
                    <dl>
                        <dt>Before</dt>
                        <dd>fragmented widgets, duplicated effort, inaccessible flows</dd>
                        <dt>After</dt>
                        <dd>unified tokens, audited patterns, CI checks blocking regressions</dd>
                        <dt>Impact</dt>
                        <dd>
                            <span className={styles.stat}>-38% UI bugs</span>
                            <span className={styles.stat}>+24% velocity</span>
                        </dd>
                    </dl>
                </Card>
                <Card title="Health tech startup" className={styles.case}>
                    <svg className={styles.visual} viewBox="0 0 200 120" aria-hidden="true" />
                    <dl>
                        <dt>Before</dt>
                        <dd>inconsistent components, slow onboarding</dd>
                        <dt>After</dt>
                        <dd>design tokens, accessible templates, docs in one place</dd>
                        <dt>Impact</dt>
                        <dd>
                            <span className={styles.stat}>2x release cadence</span>
                            <span className={styles.stat}>0 a11y violations</span>
                        </dd>
                    </dl>
                </Card>
                <Card title="Enterprise SaaS" className={styles.case}>
                    <svg className={styles.visual} viewBox="0 0 200 120" aria-hidden="true" />
                    <dl>
                        <dt>Before</dt>
                        <dd>bespoke UI per product, high maintenance cost</dd>
                        <dt>After</dt>
                        <dd>shared components, automated theme builds</dd>
                        <dt>Impact</dt>
                        <dd>
                            <span className={styles.stat}>-30% build time</span>
                            <span className={styles.stat}>+40% design reuse</span>
                        </dd>
                    </dl>
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
