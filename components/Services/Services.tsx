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
                    title="Design System Bootstrap & Governance"
                    icon={<DesignSystemBootstrapIcon className={styles.icon} />}
                >
                    <p>
                        Launch a production-ready system with tokens, components
                        and contribution rules that keep products consistent.
                    </p>
                </Card>
                <Card
                    title="Frontend Platform & DX Modernisation"
                    icon={<SystemAuditRoadmapIcon className={styles.icon} />}
                >
                    <p>
                        Refine build tooling, testing, and workflows to cut
                        defects and accelerate delivery.
                    </p>
                </Card>
                <Card
                    title="Full-Stack Foundations"
                    icon={<HandsOnBuildIcon className={styles.icon} />}
                >
                    <p>
                        Shape API contracts, data models, auth, and CI/CD so
                        frontend work lands cleanly.
                    </p>
                </Card>
                <Card
                    title="Consulting & Team Uplift"
                    icon={<ConsultingTeamUpliftIcon className={styles.icon} />}
                >
                    <p>
                        Raise capability across the stack with mentoring that
                        leaves teams self-sufficient.
                    </p>
                </Card>
            </div>
            <div className={styles.cta}>
                <p>Let&apos;s discuss which option fits your team.</p>
                <BookCallButton>Start the conversation</BookCallButton>
            </div>
        </Section>
    );
}
