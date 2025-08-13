import Button from "@/components/Button/Button";
import Section from "@/components/Section/Section";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <Section
            className={styles.hero}
            labelledBy="hero-heading"
            containerSize="l"
            contentVisibility={false}
        >
            <svg
                aria-hidden="true"
                className={styles.heroBg}
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 1920 1080"
            >
                <defs>
                    <radialGradient id="b" cx="20%" cy="25%" r="60%">
                        <stop
                            offset="0%"
                            stopColor="var(--primary)"
                            stopOpacity=".25"
                        />
                        <stop
                            offset="100%"
                            stopColor="var(--primary)"
                            stopOpacity="0"
                        />
                    </radialGradient>
                    <radialGradient id="a" cx="50%" cy="45%" r="42%">
                        <stop offset="0%" stopColor="#fff" />
                        <stop offset="100%" />
                    </radialGradient>
                    <filter id="i" width="140%" height="140%" x="-20%" y="-20%">
                        <feTurbulence
                            baseFrequency=".8"
                            numOctaves="2"
                            result="turb"
                            stitchTiles="stitch"
                            type="fractalNoise"
                        />
                        <feColorMatrix type="saturate" values="0" />
                        <feComponentTransfer>
                            <feFuncA tableValues="0 0.03" type="table" />
                        </feComponentTransfer>
                    </filter>
                    <filter id="f" width="200%" height="200%" x="-50%" y="-50%">
                        <feGaussianBlur stdDeviation="60" />
                    </filter>
                    <pattern
                        id="d"
                        width="64"
                        height="64"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            fill="none"
                            stroke="var(--border)"
                            strokeOpacity=".25"
                            d="M64 0H0v64"
                        />
                        <path
                            fill="none"
                            stroke="var(--border)"
                            strokeOpacity=".15"
                            d="M32 0v64M0 32h64"
                        />
                    </pattern>
                    <mask id="e">
                        <rect width="100%" height="100%" fill="url(#a)" />
                    </mask>
                </defs>
                <rect width="100%" height="100%" fill="var(--bg)" />
                <rect width="100%" height="100%" fill="url(#b)" />
                <rect width="100%" height="100%" fill="url(#c)" />
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#d)"
                    mask="url(#e)"
                />
                <g filter="url(#f)">
                    <ellipse
                        cx="280"
                        cy="220"
                        fill="url(#g)"
                        opacity=".9"
                        rx="300"
                        ry="180"
                    />
                    <ellipse
                        cx="1640"
                        cy="900"
                        fill="url(#h)"
                        opacity=".9"
                        rx="360"
                        ry="220"
                    />
                    <ellipse
                        cx="1580"
                        cy="260"
                        fill="url(#g)"
                        opacity=".7"
                        rx="220"
                        ry="160"
                    />
                    <ellipse
                        cx="420"
                        cy="920"
                        fill="url(#h)"
                        opacity=".6"
                        rx="260"
                        ry="200"
                    />
                </g>
                <rect width="100%" height="100%" filter="url(#i)" />
                <rect width="100%" height="100%" fill="url(#j)" />
            </svg>
            <div className={styles.ctaGroup}>
                <h1 id="hero-heading" className={styles.heroTitle}>
                    Ship design systems teams trust.
                </h1>
                <p className={styles.heroIntro}>
                    I help product orgs ship consistent UI faster. Governance,
                    performance, and accessibility baked in.
                </p>
            </div>
            <div className={styles.ctaGroup}>
                <div className={styles.cta}>
                    <Button href="#contact" size="lg">
                        Book a 20-min discovery call
                    </Button>
                    <p className={styles.note}>Let&apos;s chat.</p>
                </div>
                <div className={styles.cta}>
                    <Button
                        href="/brett-dorrans-cv.pdf"
                        variant="secondary"
                        size="lg"
                    >
                        Download capabilities deck
                    </Button>
                    <p className={styles.note}>No email gate.</p>
                </div>
            </div>
        </Section>
    );
}
