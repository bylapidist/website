import Container from "@/components/Container/Container";
import styles from "./Approach.module.scss";

export default function Approach() {
    return (
        <section style={{ contentVisibility: "auto" }}>
            <Container>
                <h2>My Approach</h2>
                <ol className={styles.steps}>
                    <li>
                        <strong>Audit</strong> &rarr; understand your current
                        interface and spot opportunities.
                    </li>
                    <li>
                        <strong>Prototype</strong> &rarr; show early
                        improvements and gather feedback.
                    </li>
                    <li>
                        <strong>Rollout</strong> &rarr; launch, measure
                        adoption and refine.
                    </li>
                </ol>
            </Container>
        </section>
    );
}
