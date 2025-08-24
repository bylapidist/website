import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Icon from "@/components/Icon/Icon";
import Section from "@/components/Section/Section";
import { Size } from "@/packages/types";
import styles from "./Services.module.scss";

export default function Services() {
    return (
        <Section
            id="services"
            heading="Signature services"
            headingClassName={styles.heading}
        >
            <div className={styles.cards}>
                <Card
                    heading="Design System Bootstrap"
                    icon={
                        <Icon
                            name="design-system-bootstrap"
                            size={Size.XL}
                            className={styles.icon}
                            decorative
                        />
                    }
                >
                    <p>
                        Launch a production-ready design system in weeks &ndash;
                        boosting velocity, cutting rework, and improving
                        accessibility from day one.
                    </p>
                </Card>
                <Card
                    heading="System Audit & Roadmap"
                    icon={
                        <Icon
                            name="system-audit-roadmap"
                            size={Size.XL}
                            className={styles.icon}
                            decorative
                        />
                    }
                >
                    <p>
                        Turn existing assets into a strategic UI architecture
                        roadmap that reduces churn and flags risk early.
                    </p>
                </Card>
                <Card
                    heading="Hands-on Build"
                    icon={
                        <Icon
                            name="hands-on-build"
                            size={Size.XL}
                            className={styles.icon}
                            decorative
                        />
                    }
                >
                    <p>
                        Ship resilient foundations without diverting your team
                        so releases stay on schedule.
                    </p>
                </Card>
                <Card
                    heading="Consulting & Team Uplift"
                    icon={
                        <Icon
                            name="consulting-team-uplift"
                            size={Size.XL}
                            className={styles.icon}
                            decorative
                        />
                    }
                >
                    <p>
                        Raise team capability with ongoing mentorship that lifts
                        quality and autonomy.
                    </p>
                </Card>
            </div>
            <div className={styles.cta}>
                <p>Let&apos;s discuss which option fits your team.</p>
                <Button href="#contact">Start the conversation</Button>
            </div>
        </Section>
    );
}
