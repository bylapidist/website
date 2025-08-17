import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import ConsultingTeamUpliftIcon from "./icons/ConsultingTeamUpliftIcon";
import DesignSystemBootstrapIcon from "./icons/DesignSystemBootstrapIcon";
import HandsOnBuildIcon from "./icons/HandsOnBuildIcon";
import SystemAuditRoadmapIcon from "./icons/SystemAuditRoadmapIcon";
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
                    title="Design System Bootstrap"
                    icon={<DesignSystemBootstrapIcon className={styles.icon} />}
                >
                    <p>
                        Launch a production-ready design system in weeks &ndash;
                        boosting velocity, cutting rework, and improving
                        accessibility from day one.
                    </p>
                </Card>
                <Card
                    title="System Audit & Roadmap"
                    icon={<SystemAuditRoadmapIcon className={styles.icon} />}
                >
                    <p>
                        Turn existing assets into a strategic UI architecture
                        roadmap that reduces churn and flags risk early.
                    </p>
                </Card>
                <Card
                    title="Hands-on Build"
                    icon={<HandsOnBuildIcon className={styles.icon} />}
                >
                    <p>
                        Ship resilient foundations without diverting your team
                        so releases stay on schedule.
                    </p>
                </Card>
                <Card
                    title="Consulting & Team Uplift"
                    icon={<ConsultingTeamUpliftIcon className={styles.icon} />}
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
