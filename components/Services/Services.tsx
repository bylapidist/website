import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./Services.module.scss";

export default function Services() {
    return (
        <Section id="services" heading="Signature services" className={styles.services}>
            <div className={styles.cards}>
                <Card title="Design System Bootstrap" highlight>
                    <svg className={styles.icon} viewBox="0 0 40 40" aria-hidden="true" />
                    <p>
                        Launch a production-ready design system in weeks &mdash;
                        boosting velocity, cutting rework, and improving
                        accessibility from day one.
                    </p>
                    <p>Give your product team the momentum it needs.</p>
                </Card>
                <Card title="System Audit & Roadmap">
                    <svg className={styles.icon} viewBox="0 0 40 40" aria-hidden="true" />
                    <p>
                        Turn existing assets into a clear system strategy that
                        reduces design debt.
                    </p>
                    <p>Receive a practical roadmap to grow what you have.</p>
                </Card>
                <Card title="Hands-on Build">
                    <svg className={styles.icon} viewBox="0 0 40 40" aria-hidden="true" />
                    <p>
                        Ship reliable system foundations without diverting your
                        team, so releases stay on track.
                    </p>
                    <p>Gain patterns and processes that last.</p>
                </Card>
                <Card title="Advisory & Team Uplift">
                    <svg className={styles.icon} viewBox="0 0 40 40" aria-hidden="true" />
                    <p>
                        Grow your team&apos;s capabilities with ongoing guidance
                        that raises quality and confidence.
                    </p>
                    <p>
                        Tailored standards, coaching and reviews keep the
                        momentum.
                    </p>
                </Card>
            </div>
            <div className={styles.cta}>
                <Button href="#contact" size="lg">
                    Let&apos;s discuss which option fits your org
                </Button>
            </div>
        </Section>
    );
}
