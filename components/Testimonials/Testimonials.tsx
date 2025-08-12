import Section from "@/components/Section/Section";
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
    return (
        <Section
            id="testimonials"
            heading="Testimonials"
            className={styles.testimonials}
        >
            <div className={styles.list}>
                <figure className={styles.item}>
                    <img
                        src="/placeholder.svg"
                        alt="Avery Chen headshot"
                        className={styles.headshot}
                    />
                    <blockquote>
                        &ldquo;The system Brett built cut our UI bugs and made
                        shipping new features a breeze.&rdquo;
                    </blockquote>
                    <figcaption>
                        <strong>Avery Chen</strong>, VP of Product at Globex
                    </figcaption>
                </figure>
                <figure className={styles.item}>
                    <img
                        src="/placeholder.svg"
                        alt="Jordan Lee headshot"
                        className={styles.headshot}
                    />
                    <blockquote>
                        &ldquo;His guidance aligned design and engineering
                        faster than any workshop we&rsquo;d run.&rdquo;
                    </blockquote>
                    <figcaption>
                        <strong>Jordan Lee</strong>, Head of Design at Initech
                    </figcaption>
                </figure>
                <figure className={styles.item}>
                    <img
                        src="/placeholder.svg"
                        alt="Morgan Patel headshot"
                        className={styles.headshot}
                    />
                    <blockquote>
                        &ldquo;We saw immediate wins &mdash; accessibility
                        jumped and rework dropped across teams.&rdquo;
                    </blockquote>
                    <figcaption>
                        <strong>Morgan Patel</strong>, Engineering Manager at
                        Acme Corp
                    </figcaption>
                </figure>
            </div>
        </Section>
    );
}
