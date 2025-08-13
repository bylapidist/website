import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./Services.module.scss";

export default function Services() {
    return (
        <Section id="services" heading="Signature services">
            <div className={styles.cards}>
                <Card title="Design System Bootstrap" className={styles.card}>
                    <svg
                        className={styles.icon}
                        aria-hidden="true"
                        viewBox="0 0 48 48"
                    >
                        <g
                            fill="none"
                            stroke="var(--logo-yellow)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M24 6c4.5 4.5 7 10 7 16s-2.5 11.5-7 16c-4.5-4.5-7-10-7-16s2.5-11.5 7-16z" />
                            <path d="M17 28l-4 6M31 28l4 6" />
                            <circle cx="24" cy="18" r="4" />
                            <path d="M24 38c0 3-2 5-2 5h4s-2-2-2-5z" />
                            <path d="M12 34h6M30 34h6" />
                        </g>
                    </svg>
                    <p>
                        Launch a production-ready design system in weeks —
                        boosting velocity, cutting rework, and improving
                        accessibility from day one.
                    </p>
                </Card>
                <Card title="System Audit & Roadmap">
                    <svg
                        className={styles.icon}
                        aria-hidden="true"
                        viewBox="0 0 48 48"
                    >
                        <g
                            fill="none"
                            stroke="var(--logo-blue)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="12" y="10" width="24" height="28" rx="3" />
                            <path d="M20 10h8a2 2 0 0 1 2 2v2H18v-2a2 2 0 0 1 2-2z" />
                            <circle cx="24" cy="24" r="6" />
                            <path d="M21.5 24l2 2 3-4" />
                        </g>
                    </svg>
                    <p>
                        Turn your existing assets into a clear system strategy
                        that reduces churn and flags risk early.
                    </p>
                </Card>
                <Card title="Hands-on Build">
                    <svg
                        className={styles.icon}
                        aria-hidden="true"
                        viewBox="0 0 48 48"
                    >
                        <g
                            fill="none"
                            stroke="var(--logo-green)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14 10h14l4 4-6 6h-6l-6-6z" />
                            <path d="M20 20l12 12" />
                            <line x1="32" y1="32" x2="28" y2="36" />
                        </g>
                    </svg>
                    <p>
                        Ship reliable system foundations without diverting your
                        team, so releases stay on track.
                    </p>
                </Card>
                <Card title="Consulting & Team Uplift">
                    <svg
                        className={styles.icon}
                        aria-hidden="true"
                        viewBox="0 0 48 48"
                    >
                        <g
                            fill="none"
                            stroke="var(--primary"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="24" y1="40" x2="24" y2="10" />
                            <polyline points="16,18 24,10 32,18" />
                        </g>
                    </svg>
                    <p>
                        Grow your team&apos;s capabilities with ongoing guidance
                        that lifts quality and autonomy.
                    </p>
                </Card>
            </div>
            <div className={styles.cta}>
                <p>Let&apos;s discuss which options fit your team.</p>
                <Button href="#contact">Book a call</Button>
            </div>
        </Section>
    );
}
