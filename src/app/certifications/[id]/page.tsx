import type { Metadata } from "next";
import { CERTIFICATIONS_LIST } from "@/data";
import CertificationDetailView from "@/components/certifications/CertificationDetailView";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return CERTIFICATIONS_LIST.map((cert) => ({
    id: cert.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const cert = CERTIFICATIONS_LIST.find((c) => c.id === id);
  if (!cert) {
    return { title: "Certification Not Found" };
  }

  const title = `${cert.title} | ${cert.issuer}`;
  const description =
    cert.overview ||
    `Verified professional certification: ${cert.title} issued by ${cert.issuer} to Yohanes Dimas Pratama.`;

  const ogImage = cert.imageUrl || cert.images?.[0];
  const moduleKeywords = cert.keyModules?.map((m) => m.title) || [];

  return {
    title,
    description,
    keywords: [
      cert.title,
      cert.issuer,
      ...moduleKeywords,
      "Certification",
      "Credential",
      "Yohanes Dimas Pratama",
    ],
    alternates: {
      canonical: `/certifications/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `/certifications/${id}`,
      type: "article",
      images: ogImage ? [{ url: ogImage, alt: cert.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
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
