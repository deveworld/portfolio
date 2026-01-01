import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deveworld | AI/ML Researcher",
  description: "Student Researcher specializing in LLMs, Test-Time Training, and Korean NLP. Building open-source AI research.",
  keywords: ["AI", "ML", "NLP", "LLM", "Test-Time Training", "Korean NLP", "Deveworld"],
  authors: [{ name: "Deveworld", url: "https://worldsw.dev" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Deveworld | AI/ML Researcher",
    description: "Student Researcher specializing in LLMs and Korean NLP",
    url: "https://worldsw.dev",
    siteName: "Deveworld",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
