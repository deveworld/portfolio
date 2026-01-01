import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: "#0D0D0D",
                    surface: "#141414",
                    elevated: "#1A1A1A",
                },
                border: {
                    subtle: "#262626",
                    hover: "#333333",
                },
                text: {
                    primary: "#FAFAFA",
                    secondary: "#A3A3A3",
                    muted: "#737373",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "Pretendard", "-apple-system", "sans-serif"],
            },
            spacing: {
                "18": "4.5rem",
                "22": "5.5rem",
            },
        },
    },
    plugins: [],
};

export default config;
