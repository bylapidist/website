import Section from "@/components/Section/Section";
import styles from "./RecentWork.module.scss";

const items = [
    { title: "Design tokens: beyond the basics", type: "Article" },
    { title: "Accessible components in React", type: "Talk" },
    { title: "Open-source color contrast checker", type: "Open-source" },
];

export default function RecentWork() {
    return (
        <Section
            id="recent-work"
            heading="Recent work & insights"
            containerSize="l"
        >
            <ul className={styles.list}>
                {items.map((item) => (
                    <li key={item.title} className={styles.item}>
                        <svg
                            className={styles.thumb}
                            width="120"
                            height="80"
                            aria-hidden="true"
                            focusable="false"
                        />
                        <div>
                            <p className={styles.title}>{item.title}</p>
                            <p className={styles.type}>{item.type}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
