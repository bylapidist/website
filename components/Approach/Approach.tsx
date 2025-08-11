import Container from "@/components/Container/Container";
import styles from "@/app/page.module.scss";

export default function Approach() {
    return (
        <section style={{ contentVisibility: "auto" }}>
            <Container>
                <h2>My Approach</h2>
                <ol className={styles.steps}>
                    <li>
                        <strong>Audit</strong> &rarr; baseline current UI workflows.
                    </li>
                    <li>
                        <strong>Prototype</strong> &rarr; prove value with tokens, components, culture.
                    </li>
                    <li>
                        <strong>Rollout</strong> &rarr; ship, track adoption, close gaps.
                    </li>
                </ol>
            </Container>
        </section>
    );
}
