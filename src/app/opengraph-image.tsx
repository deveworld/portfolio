import { ImageResponse } from "next/og";

export const alt = "Deveworld | AI/ML Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#050505",
                    backgroundImage:
                        "radial-gradient(circle at 50% 18%, rgba(255,255,255,0.10), transparent 60%)",
                    color: "white",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ fontSize: 110, fontWeight: 700, letterSpacing: "-0.04em" }}>
                    Deveworld
                </div>
                <div style={{ fontSize: 42, color: "rgba(255,255,255,0.85)", marginTop: 4 }}>
                    Gihyeon Sim
                </div>
                <div
                    style={{
                        fontSize: 32,
                        color: "rgba(255,255,255,0.55)",
                        marginTop: 32,
                    }}
                >
                    Student Researcher · AI/ML · Backend
                </div>
                <div style={{ fontSize: 24, color: "rgba(255,255,255,0.4)", marginTop: 56 }}>
                    worldsw.dev
                </div>
            </div>
        ),
        { ...size }
    );
}
