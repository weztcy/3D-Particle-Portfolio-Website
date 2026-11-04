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
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://yohanesdimas.com";
const SITE_TITLE =
  "Yohanes Dimas Pratama | Web Developer, Data Analyst, AI & Machine Learning Engineer";
const SITE_DESCRIPTION =
  "Official portfolio of Yohanes Dimas Pratama — Architecting modern full-stack web platforms, deep data analytics, autonomous AI agentic workflows, and production machine learning pipelines.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Yohanes Dimas Pratama",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Yohanes Dimas Pratama Portfolio",
  authors: [{ name: "Yohanes Dimas Pratama", url: SITE_URL }],
  creator: "Yohanes Dimas Pratama",
  publisher: "Yohanes Dimas Pratama",
  keywords: [
    "Yohanes Dimas Pratama",
    "Yohanes Dimas",
    "Dimas Pratama",
    "Web Developer Indonesia",
    "Data Analyst Indonesia",
    "AI Engineer Indonesia",
    "Machine Learning Engineer",
    "Full-Stack Web Development",
    "Software Engineering",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Python",
    "SQL",
    "Large Language Models (LLM)",
    "Retrieval-Augmented Generation (RAG)",
    "Agentic AI",
    "Model Context Protocol (MCP)",
    "Deep Learning",
    "Computer Vision",
    "Business Intelligence",
    "Power BI",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Yohanes Dimas Pratama Portfolio",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Yohanes Dimas Pratama Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
    creator: "@yohanesdimas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      (
        process.env.NEXT_PUBLIC_GSC_VERIFICATION ||
        "C68Cg97TWOMi4pkxb0dymnOXqSbbPFynHoMqp-YYVQU"
      ).replace(/^google-site-verification=/, ""),
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Yohanes Dimas Pratama",
      alternateName: ["Yohanes Dimas", "YDP"],
      url: SITE_URL,
      image: `${SITE_URL}/images/profile/profile-photo.png`,
      jobTitle:
        "Web Developer · Data Analyst · AI Engineer · Machine Learning Engineer",
      description: SITE_DESCRIPTION,
      email: "yohanesdimas888@gmail.com",
      telephone: "+6281337272669",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "ID",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Dian Nuswantoro University",
        sameAs: "https://dinus.ac.id",
      },
      sameAs: [
        "https://www.linkedin.com/in/yohanes-dimas",
        "https://github.com/weztcy",
        "https://wa.link/ebkby0",
      ],
      knowsAbout: [
        "Full-Stack Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "Data Analytics",
        "SQL",
        "Python",
        "Business Intelligence",
        "Artificial Intelligence",
        "Large Language Models (LLM)",
        "Retrieval-Augmented Generation (RAG)",
        "Agentic AI",
        "Model Context Protocol (MCP)",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing (NLP)",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Yohanes Dimas Pratama Portfolio",
      description: SITE_DESCRIPTION,
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Yohanes Dimas Pratama | Professional Portfolio",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      mainEntity: {
        "@id": `${SITE_URL}/#person`,
      },
    },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#06070A] text-slate-100 selection:bg-sky-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
