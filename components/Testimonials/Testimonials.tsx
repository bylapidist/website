import Section from "@/components/Section/Section";
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
    return (
        <Section
            id="testimonials"
            heading="Testimonials"
            className={styles.testimonials}
        >
            <div className={styles.cards}>
                <figure className={styles.card}>
                    <svg
                        className={styles.avatar}
                        aria-hidden="true"
                        viewBox="0 0 64 64"
                    />
                    <blockquote>
                        “Brett helped us go from chaos to clarity in record
                        time.”
                    </blockquote>
                    <figcaption>
                        Alex Morgan, Product Lead at FinCorp
                    </figcaption>
                </figure>
                <figure className={styles.card}>
                    <svg
                        className={styles.avatar}
                        aria-hidden="true"
                        viewBox="0 0 64 64"
                    />
                    <blockquote>
                        “The design system uplift cut our review cycles in
                        half.”
                    </blockquote>
                    <figcaption>
                        Priya Shah, UX Director at DataWorks
                    </figcaption>
                </figure>
                <figure className={styles.card}>
                    <svg
                        className={styles.avatar}
                        aria-hidden="true"
                        viewBox="0 0 64 64"
                    />
                    <blockquote>
                        “Our engineers finally have a UI toolkit they trust.”
                    </blockquote>
                    <figcaption>
                        Liam Chen, Engineering Manager at ShopHub
                    </figcaption>
                </figure>
            </div>
        </Section>
    );
}
