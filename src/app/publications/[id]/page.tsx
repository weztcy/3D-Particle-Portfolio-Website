import { PUBLICATIONS_LIST } from "@/data";
import PublicationDetailView from "@/components/publications/PublicationDetailView";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PUBLICATIONS_LIST.map((pub) => ({
    id: pub.id,
  }));
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
