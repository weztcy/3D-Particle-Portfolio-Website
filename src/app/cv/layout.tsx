import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum Vitae (CV) | Yohanes Dimas Pratama",
  description:
    "Official Curriculum Vitae (CV) of Yohanes Dimas Pratama — Full-Stack Web Developer, Data Analyst, AI & Machine Learning Engineer. Interactive slide reader and high-resolution PDF download.",
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    title: "Curriculum Vitae (CV) | Yohanes Dimas Pratama",
    description:
      "Interactive Curriculum Vitae (CV) of Yohanes Dimas Pratama — Web Developer, Data Analyst, AI & Machine Learning Engineer.",
    url: "/cv",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curriculum Vitae (CV) | Yohanes Dimas Pratama",
    description:
      "Official Curriculum Vitae of Yohanes Dimas Pratama with interactive viewer and direct PDF download.",
  },
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

