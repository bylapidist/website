import Container from "@/components/Container/Container";
import styles from "./Approach.module.scss";

export default function Approach() {
    return (
        <section
            role="region"
            aria-labelledby="approach-heading"
            style={{ contentVisibility: "auto" }}
        >
            <Container>
                <h2 id="approach-heading">My Approach</h2>
                <ol className={styles.steps}>
                    <li>
                        <strong>Audit</strong> &rarr; baseline current UI
                        workflows.
                    </li>
                    <li>
                        <strong>Prototype</strong> &rarr; prove value with
                        tokens, components, culture.
                    </li>
                    <li>
                        <strong>Rollout</strong> &rarr; ship, track adoption,
                        close gaps.
                    </li>
                </ol>
            </Container>
        </section>
    );
}
