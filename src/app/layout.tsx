import type { Metadata } from "next";
import {
  Space_Grotesk,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title:
    "Yohanes Dimas Pratama | Web Developer, Data Analyst, AI Engineer & Machine Learning Engineer",
  description:
    "Official personal portfolio of Yohanes Dimas Pratama — Architecting Immersive 3D Web Platforms, Causal Data Analytics, Intelligent Neural Systems & Production Machine Learning Pipelines.",
  keywords: [
    "Yohanes Dimas Pratama",
    "Web Developer",
    "Data Analyst",
    "AI Engineer",
    "Machine Learning Engineer",
    "Next.js",
    "Three.js",
    "LLM",
    "RAG",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-[#06070A] text-slate-100 selection:bg-sky-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

