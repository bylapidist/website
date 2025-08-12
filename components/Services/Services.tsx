import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./Services.module.scss";

export default function Services() {
    return (
        <Section id="services" heading="Signature services">
            <div className={styles.cards}>
                <Card title="Design System Bootstrap" highlight>
                    <p>Launch a production-ready design system in weeks.</p>
                    <p>Give your product team the momentum it needs.</p>
                </Card>
                <Card title="System Audit & Roadmap">
                    <p>
                        Turn your existing assets into a clear system strategy.
                    </p>
                    <p>Receive a practical roadmap to grow what you have.</p>
                </Card>
                <Card title="Hands-on Build">
                    <p>
                        Ship reliable system foundations without diverting your
                        team.
                    </p>
                    <p>Gain patterns and processes that last.</p>
                </Card>
                <Card title="Advisory & Team Uplift">
                    <p>
                        Grow your team&apos;s capabilities with ongoing
                        guidance.
                    </p>
                    <p>
                        Raise quality through tailored standards, coaching, and
                        reviews.
                    </p>
                </Card>
            </div>
        </Section>
    );
}
