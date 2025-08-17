import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1600, height: 900 };
export const contentType = "image/png";

const LOGO_COLORS = {
    blue: "#00af9f",
    green: "#92ca6b",
    yellow: "#e9ba4d",
} as const;

function LogoLockup() {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <svg width={128} height={128} viewBox="0 0 64 64">
                <polygon points="0,0 0,32 32,32" fill={LOGO_COLORS.blue} />
                <polygon points="0,32 0,64 32,64" fill={LOGO_COLORS.green} />
                <polygon points="32,0 32,64 64,32" fill={LOGO_COLORS.yellow} />
            </svg>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: 64,
                    fontWeight: 700,
                    lineHeight: 1,
                }}
            >
                <span>Brett</span>
                <span>Dorrans</span>
            </div>
        </div>
    );
}

export default function TwitterImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#000",
                    color: "#fff",
                    padding: "96px",
                    fontFamily: "sans-serif",
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            >
                <LogoLockup />
                <span style={{ fontSize: 72 }}>
                    Ship design systems teams love.
                </span>
            </div>
        ),
        size,
    );
}
