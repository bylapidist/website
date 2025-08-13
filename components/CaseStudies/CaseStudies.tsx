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
            <div className={styles.grid}>
                <Card title="Global fintech">
                    <div className={styles.visual}>
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 120 80"
                            width="120"
                            height="80"
                        />
                    </div>
                    <p>
                        <strong>Before:</strong> fragmented widgets, duplicated
                        effort, inaccessible flows.
                    </p>
                    <p>
                        <strong>After:</strong> unified tokens, audited
                        patterns.
                    </p>
                    <p>
                        <strong>Impact:</strong>{" "}
                        <span className={styles.stat}>-38% UI bugs</span>,
                        <span className={styles.stat}> +24% velocity</span>.
                    </p>
                </Card>
                <Card title="Healthcare startup">
                    <div className={styles.visual}>
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 120 80"
                            width="120"
                            height="80"
                        />
                    </div>
                    <p>
                        <strong>Before:</strong> inaccessible forms blocking
                        rollout.
                    </p>
                    <p>
                        <strong>After:</strong> accessible component library
                        with automated tests.
                    </p>
                    <p>
                        <strong>Impact:</strong>{" "}
                        <span className={styles.stat}>2× faster releases</span>.
                    </p>
                </Card>
                <Card title="Enterprise SaaS">
                    <div className={styles.visual}>
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 120 80"
                            width="120"
                            height="80"
                        />
                    </div>
                    <p>
                        <strong>Before:</strong> conflicting styles across 7
                        products.
                    </p>
                    <p>
                        <strong>After:</strong> cross-team design tokens and
                        linting.
                    </p>
                    <p>
                        <strong>Impact:</strong>{" "}
                        <span className={styles.stat}>
                            95%+ accessibility score
                        </span>
                        .
                    </p>
                </Card>
                <Card title="E-commerce platform">
                    <div className={styles.visual}>
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 120 80"
                            width="120"
                            height="80"
                        />
                    </div>
                    <p>
                        <strong>Before:</strong> slow theming and rebrand work.
                    </p>
                    <p>
                        <strong>After:</strong> themable system with automated
                        docs.
                    </p>
                    <p>
                        <strong>Impact:</strong>{" "}
                        <span className={styles.stat}>
                            30% quicker launches
                        </span>
                        .
                    </p>
                </Card>
            </div>
            <div className={styles.cta}>
                <p>Want these results for your team?</p>
                <Button href="#contact" size="lg">
                    Book a 20-min discovery call
                </Button>
            </div>
        </Section>
    );
}
