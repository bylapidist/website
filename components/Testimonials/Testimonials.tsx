import "server-only";
import { Card, Section } from "@/components";
import { Variant } from "@/types";
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
    return (
        <Section
            id="testimonials"
            heading="Testimonials"
            className={styles.testimonials}
        >
            <div className={styles.cards}>
                <Card as="figure" variant={Variant.Testimonial}>
                    <blockquote>
                        “Brett is as rock solid as they get. He&apos;s a
                        standout professional whose multidimensional skills and
                        leadership make him an asset to any team.”
                    </blockquote>
                    <figcaption>
                        Marek Lenik
                        <br />
                        Engineering Lead at Wise
                    </figcaption>
                </Card>
                <Card as="figure" variant={Variant.Testimonial}>
                    <blockquote>
                        “Brett&apos;s contributions to the design systems team
                        have played a crucial role in planning and creating
                        shareable components utilised within LendInvest.”
                    </blockquote>
                    <figcaption>
                        Esteban Blanco
                        <br />
                        Senior Engineer at LendInvest
                    </figcaption>
                </Card>
            </div>
        </Section>
    );
}
