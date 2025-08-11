import Card from "@/components/Card/Card";
import Container from "@/components/Container/Container";
import styles from "./Services.module.scss";

export default function Services() {
    return (
        <section id="services" style={{ contentVisibility: "auto" }}>
            <Container>
                <h2>Signature services</h2>
                <div className={styles.cards}>
                    <Card
                        title="Design System Bootstrap"
                        highlight
                        footer={<p>Timeline: 2-3 sprints</p>}
                    >
                        <p>For product teams needing momentum.</p>
                        <p>From audit to adoptable components in weeks.</p>
                    </Card>
                    <Card
                        title="System Audit & Roadmap"
                        footer={<p>Timeline: 2-3 sprints</p>}
                    >
                        <p>For orgs with assets but no strategy.</p>
                        <p>Build a pragmatic plan to evolve what exists.</p>
                    </Card>
                    <Card
                        title="Hands-on Build"
                        footer={<p>Timeline: 4–8 sprints</p>}
                    >
                        <p>For teams lacking capacity.</p>
                        <p>Patterns, tools, processes that endure and scale.</p>
                    </Card>
                    <Card
                        title="Advisory & Team Uplift"
                        footer={<p>Timeline: ongoing</p>}
                    >
                        <p>For growing teams.</p>
                        <p>
                            Standards, coaching and reviews that raise the bar.
                        </p>
                    </Card>
                </div>
            </Container>
        </section>
    );
}
