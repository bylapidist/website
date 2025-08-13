import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./Insights.module.scss";

export default function Insights() {
    return (
        <Section heading="Recent work & insights" className={styles.insights}>
            <div className={styles.grid}>
                <Card title="Design Tokens at Scale">
                    <div className={styles.visual}>
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 120 80"
                            width="120"
                            height="80"
                        />
                    </div>
                    <p>Article • Jan 2024</p>
                </Card>
                <Card title="A11y tooling for faster releases">
                    <div className={styles.visual}>
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 120 80"
                            width="120"
                            height="80"
                        />
                    </div>
                    <p>Talk • Frontend Conf 2023</p>
                </Card>
                <Card title="Open-source: React Aria Kit">
                    <div className={styles.visual}>
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 120 80"
                            width="120"
                            height="80"
                        />
                    </div>
                    <p>Open-source project</p>
                </Card>
            </div>
        </Section>
    );
}
