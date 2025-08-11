import Container from "@/components/Container/Container";
import styles from "@/app/page.module.scss";

export default function ProblemToSolution() {
    return (
        <section style={{ contentVisibility: "auto" }}>
            <Container>
                <h2>From problem to solution</h2>
                <ul className={styles.steps}>
                    <li>Tame design drift with scalable tokens.</li>
                    <li>Cut PR nitpicks via shared components.</li>
                    <li>Speed handoff through automated docs.</li>
                    <li>Bake in accessibility from the start.</li>
                </ul>
            </Container>
        </section>
    );
}
