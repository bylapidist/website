import Section from "@/components/Section/Section";
import Card from "@/components/Card/Card";
import styles from "./Insights.module.scss";

export default function Insights() {
    return (
        <Section id="insights" heading="Recent work & insights" className={styles.insights}>
            <div className={styles.grid}>
                <Card title="Article: Token-First Design" className={styles.item}>
                    <svg className={styles.visual} viewBox="0 0 200 120" aria-hidden="true" />
                    <p>How a token-driven approach cut theme build time in half.</p>
                </Card>
                <Card title="Talk: Accessible Components" className={styles.item}>
                    <svg className={styles.visual} viewBox="0 0 200 120" aria-hidden="true" />
                    <p>Conference session on baking WCAG into system foundations.</p>
                </Card>
                <Card title="OSS: Audit CLI" className={styles.item}>
                    <svg className={styles.visual} viewBox="0 0 200 120" aria-hidden="true" />
                    <p>Open-source tool that reports design debt across repos.</p>
                </Card>
            </div>
        </Section>
    );
}
