import type { Metadata } from "next";
import { PROJECT_CASE_STUDIES } from "@/data";
import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PROJECT_CASE_STUDIES.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECT_CASE_STUDIES.find((p) => p.id === id);
  if (!project) {
    return { title: "Project Not Found" };
  }

  const title = `${project.title} | Case Study`;
  const description =
    project.summary ||
    project.overview ||
    `Detailed case study of ${project.title} by Yohanes Dimas Pratama.`;

  const ogImage = project.imageUrl || project.images?.[0];

  return {
    title,
    description,
    keywords: [
      project.title,
      project.categoryLabel,
      ...(project.techStack || []),
      "Yohanes Dimas Pratama",
      "Case Study",
      "Portfolio Project",
    ],
    alternates: {
      canonical: `/projects/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `/projects/${id}`,
      type: "article",
      images: ogImage ? [{ url: ogImage, alt: project.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PROJECT_CASE_STUDIES.find((p) => p.id === id);
  if (!project) {
    notFound();
  }

  return <ProjectDetailView projectId={id} />;
}
