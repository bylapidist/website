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
                    <img
                        src="/placeholder.svg"
                        alt=""
                        className={styles.icon}
                    />
                    <p>
                        Launch a production-ready design system in weeks &mdash;
                        boosting velocity, cutting rework, and improving
                        accessibility from day one.
                    </p>
                </Card>
                <Card title="System Audit & Roadmap">
                    <img
                        src="/placeholder.svg"
                        alt=""
                        className={styles.icon}
                    />
                    <p>
                        Turn your existing assets into a clear system strategy
                        that aligns teams and uncovers quick wins.
                    </p>
                </Card>
                <Card title="Hands-on Build">
                    <img
                        src="/placeholder.svg"
                        alt=""
                        className={styles.icon}
                    />
                    <p>
                        Ship reliable system foundations without diverting your
                        team &mdash; patterns and processes that last.
                    </p>
                </Card>
                <Card title="Advisory & Team Uplift">
                    <img
                        src="/placeholder.svg"
                        alt=""
                        className={styles.icon}
                    />
                    <p>
                        Raise quality through tailored standards, coaching, and
                        reviews &mdash; growing your team&rsquo;s capabilities.
                    </p>
                </Card>
            </div>
            <div className={styles.cta}>
                <Button href="#contact" size="lg">
                    Let&rsquo;s discuss which option fits your org
                </Button>
            </div>
        </Section>
    );
}
