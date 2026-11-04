import { MetadataRoute } from "next";
import {
  PROJECT_CASE_STUDIES,
  CERTIFICATIONS_LIST,
  PUBLICATIONS_LIST,
} from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yohanesdimas.com";
  const currentDate = new Date().toISOString();

  // 1. Static Root & Core Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // 2. Dynamic Project Detail Routes (18 Case Studies)
  const projectRoutes: MetadataRoute.Sitemap = PROJECT_CASE_STUDIES.map(
    (project) => ({
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  // 3. Dynamic Certification Detail Routes (18 Certifications)
  const certificationRoutes: MetadataRoute.Sitemap = CERTIFICATIONS_LIST.map(
    (cert) => ({
      url: `${baseUrl}/certifications/${cert.id}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  // 4. Dynamic Publication Detail Routes
  const publicationRoutes: MetadataRoute.Sitemap = PUBLICATIONS_LIST.map(
    (pub) => ({
      url: `${baseUrl}/publications/${pub.id}`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.8,
    })
  );

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...certificationRoutes,
    ...publicationRoutes,
  ];
}

