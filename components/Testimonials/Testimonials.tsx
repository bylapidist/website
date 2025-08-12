import Section from "@/components/Section/Section";
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
    return (
        <Section id="testimonials" heading="Testimonials" className={styles.testimonials}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <svg className={styles.avatar} viewBox="0 0 80 80" aria-hidden="true" />
                    <blockquote>
                        “Brett brought order to our UI chaos and made our team faster.”
                    </blockquote>
                    <p className={styles.attribution}>Jane Patel, Head of Product at FinBank</p>
                </li>
                <li className={styles.item}>
                    <svg className={styles.avatar} viewBox="0 0 80 80" aria-hidden="true" />
                    <blockquote>
                        “His guidance on accessibility was a game changer for our org.”
                    </blockquote>
                    <p className={styles.attribution}>Marcus Lee, Engineering Manager at Healthio</p>
                </li>
                <li className={styles.item}>
                    <svg className={styles.avatar} viewBox="0 0 80 80" aria-hidden="true" />
                    <blockquote>
                        “We shipped a cohesive system without derailing our roadmap.”
                    </blockquote>
                    <p className={styles.attribution}>Sara Gómez, Design Lead at CloudSuite</p>
                </li>
            </ul>
        </Section>
    );
}
