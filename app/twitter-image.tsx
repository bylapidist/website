import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1600, height: 900 };
export const contentType = "image/png";

export default function TwitterImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: "#000",
                    color: "#fff",
                    padding: "96px",
                    fontFamily: "sans-serif",
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            >
                <span style={{ fontSize: 80, fontWeight: 700 }}>
                    Brett Dorrans
                </span>
                <span style={{ fontSize: 56 }}>
                    Principal Frontend Engineer & Design Systems Specialist
                </span>
                <span style={{ fontSize: 48 }}>
                    Ship design systems teams love.
                </span>
            </div>
        ),
        size,
    );
}
