import { CERTIFICATIONS_LIST } from "@/data";
import CertificationDetailView from "@/components/certifications/CertificationDetailView";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return CERTIFICATIONS_LIST.map((cert) => ({
    id: cert.id,
  }));
}

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cert = CERTIFICATIONS_LIST.find((c) => c.id === id);
  if (!cert) {
    notFound();
  }

  return <CertificationDetailView certId={id} />;
}
