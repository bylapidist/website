import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./Services.module.scss";

export default function Services() {
    return (
        <Section
            id="services"
            heading="Signature services"
            className={styles.services}
        >
            <div className={styles.cards}>
                <Card title="Design System Bootstrap" highlight>
                    <svg
                        className={styles.icon}
                        width="40"
                        height="40"
                        aria-hidden="true"
                        focusable="false"
                    />
                    <p>
                        Launch a production-ready design system in
                        weeks—boosting velocity, cutting rework, and improving
                        accessibility from day one.
                    </p>
                </Card>
                <Card title="System Audit & Roadmap">
                    <svg
                        className={styles.icon}
                        width="40"
                        height="40"
                        aria-hidden="true"
                        focusable="false"
                    />
                    <p>
                        Turn your existing assets into a clear system strategy
                        that unlocks efficiency and reveals quick wins.
                    </p>
                </Card>
                <Card title="Hands-on Build">
                    <svg
                        className={styles.icon}
                        width="40"
                        height="40"
                        aria-hidden="true"
                        focusable="false"
                    />
                    <p>
                        Ship reliable system foundations without diverting your
                        team—gain patterns and processes that last.
                    </p>
                </Card>
                <Card title="Advisory & Team Uplift">
                    <svg
                        className={styles.icon}
                        width="40"
                        height="40"
                        aria-hidden="true"
                        focusable="false"
                    />
                    <p>
                        Grow your team’s capabilities with ongoing guidance,
                        raising quality through tailored standards, coaching,
                        and reviews.
                    </p>
                </Card>
            </div>
            <div className={styles.cta}>
                <Button href="#contact" size="lg">
                    Let’s discuss which option fits your org.
                </Button>
            </div>
        </Section>
    );
}
