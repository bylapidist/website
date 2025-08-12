import Section from "@/components/Section/Section";
import styles from "./Testimonials.module.scss";

const testimonials = [
    {
        name: "Alex Morgan",
        title: "VP Engineering, Globex",
        quote: "We cut front-end defects in half within a quarter thanks to Brett's system.",
    },
    {
        name: "Jamie Lee",
        title: "Product Lead, Initech",
        quote: "His approach let us deliver features weeks faster without sacrificing quality.",
    },
    {
        name: "Riley Patel",
        title: "Design Manager, Acme Corp",
        quote: "Our designers finally speak the same language across platforms.",
    },
];

export default function Testimonials() {
    return (
        <Section
            id="testimonials"
            heading="Testimonials"
            className={styles.testimonials}
            containerSize="l"
        >
            <ul className={styles.list}>
                {testimonials.map((t) => (
                    <li key={t.name} className={styles.item}>
                        <svg
                            className={styles.headshot}
                            width="48"
                            height="48"
                            aria-hidden="true"
                            focusable="false"
                        />
                        <blockquote className={styles.quote}>
                            &ldquo;{t.quote}&rdquo;
                        </blockquote>
                        <p className={styles.attribution}>
                            <strong>{t.name}</strong>, {t.title}
                        </p>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
