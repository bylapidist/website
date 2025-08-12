import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./RecentWork.module.scss";

export default function RecentWork() {
    return (
        <Section
            id="recent-work"
            heading="Recent work & insights"
            className={styles.recentWork}
        >
            <div className={styles.cards}>
                <Card title="Talk: Scaling Design Systems at EnterpriseX">
                    <img
                        src="/placeholder.svg"
                        alt=""
                        className={styles.visual}
                    />
                    <p>Conference session on aligning teams with tokens.</p>
                </Card>
                <Card title="Article: Accessible components at scale">
                    <img
                        src="/placeholder.svg"
                        alt=""
                        className={styles.visual}
                    />
                    <p>Practical steps for baking a11y into every release.</p>
                </Card>
                <Card title="Open source: Color contrast tooling">
                    <img
                        src="/placeholder.svg"
                        alt=""
                        className={styles.visual}
                    />
                    <p>CLI to enforce contrast in CI pipelines.</p>
                </Card>
            </div>
        </Section>
    );
}
