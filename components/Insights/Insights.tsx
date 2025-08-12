import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./Insights.module.scss";

const items = [
    {
        title: "Talk: Scaling design ops",
        description:
            "Conference presentation on building resilient design systems.",
    },
    {
        title: "Article: The accessibility checklist",
        description: "Practical guide for catching issues early.",
    },
    {
        title: "Open source: Token toolkit",
        description: "CLI for managing design tokens.",
    },
];

export default function Insights() {
    return (
        <Section
            id="insights"
            heading="Recent work & insights"
            className={styles.insights}
        >
            <div className={styles.grid}>
                {items.map((item) => (
                    <Card key={item.title} title={item.title}>
                        <img
                            src="/placeholder.svg"
                            alt=""
                            className={styles.visual}
                        />
                        <p>{item.description}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
