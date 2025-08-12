import Container from "@/components/Container/Container";
import Stat from "@/components/Stat/Stat";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import styles from "./Stats.module.scss";

export default function Stats() {
    return (
        <section
            role="region"
            aria-labelledby="stats-heading"
            style={{ contentVisibility: "auto" }}
        >
            <Container>
                <h2 id="stats-heading">
                    <VisuallyHidden>Stats</VisuallyHidden>
                </h2>
                <div className={styles.stats}>
                    <Stat value="15+ years" label="engineering expertise" />
                    <Stat value="Enterprise" label="scalable fintech apps" />
                    <Stat value="Remote" label="UK & beyond" />
                </div>
            </Container>
        </section>
    );
}
