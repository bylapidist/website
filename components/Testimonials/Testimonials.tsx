import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./Testimonials.module.scss";

const testimonials = [
    {
        name: "Alex Rivera",
        title: "VP Engineering, Acme",
        quote: "Brett transformed our UI workflow overnight.",
    },
    {
        name: "Jamie Lee",
        title: "Product Lead, Globex",
        quote: "His systems cut our bugs by a third.",
    },
    {
        name: "Morgan Patel",
        title: "Design Manager, Initech",
        quote: "A trusted partner who ships.",
    },
];

export default function Testimonials() {
    return (
        <Section id="testimonials" heading="Testimonials" className={styles.testimonials}>
            <ul className={styles.list}>
                {testimonials.map((t) => (
                    <li key={t.name} className={styles.item}>
                        <Card title={t.name}>
                            <div className={styles.headshotWrapper}>
                                <img
                                    src="/placeholder.svg"
                                    alt={`${t.name} headshot`}
                                    className={styles.headshot}
                                />
                            </div>
                            <blockquote>{t.quote}</blockquote>
                            <p className={styles.attribution}>{t.title}</p>
                        </Card>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
