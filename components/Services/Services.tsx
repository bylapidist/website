import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./Services.module.scss";

export default function Services() {
    return (
        <Section id="services" heading="Signature services">
            <div className={styles.cards}>
                <Card title="Design System Bootstrap" highlight>
                    <svg
                        className={styles.icon}
                        aria-hidden="true"
                        viewBox="0 0 48 48"
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
                    />
                    <p>
                        Turn your existing assets into a clear system strategy
                        that reduces churn and flags risk early.
                    </p>
                </Card>
                <Card title="Hands-on Build">
                    <svg
                        className={styles.icon}
                        aria-hidden="true"
                        viewBox="0 0 48 48"
                    />
                    <p>
                        Ship reliable system foundations without diverting your
                        team, so releases stay on track.
                    </p>
                </Card>
                <Card title="Advisory & Team Uplift">
                    <svg
                        className={styles.icon}
                        aria-hidden="true"
                        viewBox="0 0 48 48"
                    />
                    <p>
                        Grow your team&apos;s capabilities with ongoing guidance
                        that lifts quality and autonomy.
                    </p>
                </Card>
            </div>
            <div className={styles.cta}>
                <p>Let&apos;s discuss which option fits your org.</p>
                <Button href="#contact">Book a call</Button>
            </div>
        </Section>
    );
}
