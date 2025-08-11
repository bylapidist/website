import Container from "@/components/Container/Container";
import Stat from "@/components/Stat/Stat";
import styles from "./Stats.module.scss";

export default function Stats() {
    return (
        <section style={{ contentVisibility: "auto" }}>
            <Container>
                <div className={styles.stats}>
                    <Stat value="15+ years" label="engineering expertise" />
                    <Stat value="Enterprise" label="scalable fintech apps" />
                    <Stat value="Remote" label="UK & beyond" />
                </div>
            </Container>
        </section>
    );
}
