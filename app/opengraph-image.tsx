import "server-only";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_COLORS = {
    blue: "#00af9f",
    green: "#92ca6b",
    yellow: "#e9ba4d",
} as const;

const BACKGROUND = "#0f172a";
const FOREGROUND = "#f8fafc";
const GRID_COLOR = "rgba(255,255,255,0.05)";

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

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: BACKGROUND,
                    color: FOREGROUND,
                    padding: "80px",
                    fontFamily: "system-ui, sans-serif",
                    backgroundImage: `linear-gradient(${GRID_COLOR} 1px, transparent 1px), linear-gradient(90deg, ${GRID_COLOR} 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            >
                <LogoLockup />
                <span style={{ fontSize: 56, color: LOGO_COLORS.blue }}>
                    Ship design systems teams love.
                </span>
            </div>
        ),
        size,
    );
}
