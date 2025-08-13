import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./Insights.module.scss";

export default function Insights() {
    return (
        <Section id="insights" heading="Recent work & insights" className={styles.insights}>
            <div className={styles.cards}>
                <Card title="Article: Designing token pipelines">
                    <p>How a small team delivered accessible theming at scale.</p>
                </Card>
                <Card title="Talk: Accessible components at speed">
                    <p>Conference session on merging velocity with a11y.</p>
                </Card>
                <Card title="Open-source: Audit tooling">
                    <p>CLI that flags design drift before code review.</p>
                </Card>
            </div>
        </Section>
    );
}
