import { PROJECT_CASE_STUDIES } from "@/data";
import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PROJECT_CASE_STUDIES.map((project) => ({
    id: project.id,
  }));
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
