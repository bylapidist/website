import Card from "@/components/Card/Card";
import { BookCallButton } from "@/components/Cta/Cta";
import Section from "@/components/Section/Section";
import ConsultingTeamUpliftIcon from "./icons/ConsultingTeamUpliftIcon";
import DesignSystemBootstrapIcon from "./icons/DesignSystemBootstrapIcon";
import HandsOnBuildIcon from "./icons/HandsOnBuildIcon";
import SystemAuditRoadmapIcon from "./icons/SystemAuditRoadmapIcon";
import styles from "./Services.module.scss";

export default function Services() {
    return (
        <Section id="services" heading="Signature services">
            <div className={styles.cards}>
                <Card
                    title="Design System Bootstrap"
                    icon={<DesignSystemBootstrapIcon className={styles.icon} />}
                >
                    <p>
                        Launch a production-ready design system in weeks —
                        boosting velocity, cutting rework, and improving
                        accessibility from day one.
                    </p>
                </Card>
                <Card
                    title="System Audit & Roadmap"
                    icon={<SystemAuditRoadmapIcon className={styles.icon} />}
                >
                    <p>
                        Turn your existing assets into a clear system strategy
                        that reduces churn and flags risk early.
                    </p>
                </Card>
                <Card
                    title="Hands-on Build"
                    icon={<HandsOnBuildIcon className={styles.icon} />}
                >
                    <p>
                        Ship reliable system foundations without diverting your
                        team, so releases stay on track.
                    </p>
                </Card>
                <Card
                    title="Consulting & Team Uplift"
                    icon={<ConsultingTeamUpliftIcon className={styles.icon} />}
                >
                    <p>
                        Grow your team&apos;s capabilities with ongoing guidance
                        that lifts quality and autonomy.
                    </p>
                </Card>
            </div>
            <div className={styles.cta}>
                <p>Let&apos;s discuss which options fit your team.</p>
                <BookCallButton />
            </div>
        </Section>
    );
}
