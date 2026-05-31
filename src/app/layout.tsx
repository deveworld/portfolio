import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://worldsw.dev"),
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
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deveworld | AI/ML Researcher",
    description: "Student Researcher specializing in LLMs and Korean NLP",
    site: "@dev_world_",
    creator: "@dev_world_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        <LanguageProvider>
          <LanguageToggle />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
