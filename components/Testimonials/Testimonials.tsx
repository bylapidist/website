import Section from "@/components/Section/Section";
import styles from "./Testimonials.module.scss";

const testimonials = [
    {
        name: "Jordan Smith",
        title: "Engineering Manager, Acme Corp",
        quote: "Brett's system work cut our UI bugs almost in half.",
    },
    {
        name: "Priya Patel",
        title: "Design Lead, Globex",
        quote: "Our team shipped faster and with more confidence.",
    },
    {
        name: "Liu Wei",
        title: "Product Director, Initech",
        quote: "The accessibility uplift was immediate and measurable.",
    },
];

export default function Testimonials() {
    return (
        <Section heading="Testimonials" className={styles.testimonials}>
            <ul className={styles.list}>
                {testimonials.map((t) => (
                    <li key={t.name} className={styles.item}>
                        <svg
                            className={styles.avatar}
                            aria-label={`${t.name} headshot`}
                            viewBox="0 0 80 80"
                            width="80"
                            height="80"
                        />
                        <blockquote>{t.quote}</blockquote>
                        <p className={styles.caption}>
                            <strong>{t.name}</strong>, {t.title}
                        </p>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
