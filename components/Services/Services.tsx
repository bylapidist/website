import Card from "@/components/Card/Card";
import Container from "@/components/Container/Container";
import styles from "./Services.module.scss";

export default function Services() {
    return (
        <section
            id="services"
            role="region"
            aria-labelledby="services-heading"
            style={{ contentVisibility: "auto" }}
        >
            <Container>
                <h2 id="services-heading">Signature services</h2>
                <div className={styles.cards}>
                    <Card
                        title="Design System Bootstrap"
                        highlight
                        footer={<p>Timeline: 2-3 sprints</p>}
                    >
                        <p>Launch a production-ready design system in weeks.</p>
                        <p>Give your product team the momentum it needs.</p>
                    </Card>
                    <Card
                        title="System Audit & Roadmap"
                        footer={<p>Timeline: 2-3 sprints</p>}
                    >
                        <p>Turn your existing assets into a clear system strategy.</p>
                        <p>Receive a practical roadmap to grow what you have.</p>
                    </Card>
                    <Card
                        title="Hands-on Build"
                        footer={<p>Timeline: 4–8 sprints</p>}
                    >
                        <p>Ship reliable system foundations without diverting your team.</p>
                        <p>Gain patterns and processes that last.</p>
                    </Card>
                    <Card
                        title="Advisory & Team Uplift"
                        footer={<p>Timeline: ongoing</p>}
                    >
                        <p>Grow your team&apos;s capabilities with ongoing guidance.</p>
                        <p>Raise quality through tailored standards, coaching and reviews.</p>
                    </Card>
                </div>
            </Container>
        </section>
    );
}
