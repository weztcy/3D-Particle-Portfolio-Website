import type { Metadata } from "next";
import { PUBLICATIONS_LIST } from "@/data";
import PublicationDetailView from "@/components/publications/PublicationDetailView";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PUBLICATIONS_LIST.map((pub) => ({
    id: pub.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const pub = PUBLICATIONS_LIST.find((p) => p.id === id);
  if (!pub) {
    return { title: "Publication Not Found" };
  }

  const title = `${pub.title} | ${pub.publisher}`;
  const description =
    pub.abstractSummary ||
    `Peer-reviewed scientific paper: ${pub.title} published in ${pub.publisher} by Yohanes Dimas Pratama.`;

  return {
    title,
    description,
    keywords: [
      pub.title,
      pub.publisher,
      pub.journalLevel,
      ...(pub.keywords || []),
      "Research Paper",
      "Yohanes Dimas Pratama",
      "Publication",
    ],
    alternates: {
      canonical: `/publications/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `/publications/${id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PublicationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pub = PUBLICATIONS_LIST.find((p) => p.id === id);
  if (!pub) {
    notFound();
  }

  return <PublicationDetailView publicationId={id} />;
}
