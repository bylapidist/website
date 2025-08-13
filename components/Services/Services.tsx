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
                        aria-hidden="true"
                        viewBox="0 0 48 48"
                        width="48"
                        height="48"
                    />
                    <p>
                        Launch a production-ready design system in weeks —
                        boosting velocity, cutting rework, and improving
                        accessibility from day one.
                    </p>
                </Card>
                <Card title="System Audit & Roadmap">
                    <svg
                        className={styles.icon}
                        aria-hidden="true"
                        viewBox="0 0 48 48"
                        width="48"
                        height="48"
                    />
                    <p>
                        Turn existing assets into a clear system strategy —
                        spotting gaps, prioritising fixes, and mapping a path to
                        scale.
                    </p>
                </Card>
                <Card title="Hands-on Build">
                    <svg
                        className={styles.icon}
                        aria-hidden="true"
                        viewBox="0 0 48 48"
                        width="48"
                        height="48"
                    />
                    <p>
                        Ship reliable foundations without diverting your team —
                        documented patterns ready for reuse.
                    </p>
                </Card>
                <Card title="Advisory & Team Uplift">
                    <svg
                        className={styles.icon}
                        aria-hidden="true"
                        viewBox="0 0 48 48"
                        width="48"
                        height="48"
                    />
                    <p>
                        Grow capabilities with ongoing guidance — raising
                        quality through tailored standards and coaching.
                    </p>
                </Card>
            </div>
            <div className={styles.cta}>
                <p>Let&apos;s discuss which option fits your org.</p>
                <Button href="#contact" size="lg">
                    Book a 20-min discovery call
                </Button>
            </div>
        </Section>
    );
}
