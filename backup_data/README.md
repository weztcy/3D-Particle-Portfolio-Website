# Portfolio Data Backup (`backup_data/`)

> **Generated on:** `2026-11-09T10:32:52.693Z`  
> **Application:** Yohanes Dimas Pratama — 3D Particle Portfolio Website  
> **Source Directory:** `src/data/`

---

## Overview

This directory contains complete, granular, and lossless Markdown backups of all data collections driving the portfolio web application. Each data domain is preserved in an isolated Markdown file with human-readable documentation, categorized tables, and embedded raw JSON payloads.

---

## Backup Files Catalog

| File Name | Domain / Data Type | Source Path | Item Count | Format |
| :--- | :--- | :--- | :---: | :--- |
| [`profile.md`](./profile.md) | Personal bio, contacts, hero headlines, global metrics | `src/data/profile/profileData.ts` | 1 profile object | Markdown + JSON |
| [`career_experience.md`](./career_experience.md) | Professional timeline & work experiences | `src/data/career/experienceData.ts` | 2 positions | Markdown + JSON |
| [`career_education.md`](./career_education.md) | Higher education, degree, GPA & academic highlights | `src/data/career/educationData.ts` | 1 degree record | Markdown + JSON |
| [`certifications.md`](./certifications.md) | Verified industry certifications & bootcamps | `src/data/certifications/certificationsData.ts` | 15 certificates | Markdown + JSON |
| [`domain_pillars.md`](./domain_pillars.md) | 4 core technical pillars & capabilities | `src/data/domains/domainPillars.ts` | 4 pillars | Markdown + JSON |
| [`technical_skills.md`](./technical_skills.md) | Full technical skills matrix (Core Skills + Tech Stack) | `src/data/domains/technicalSkills.ts` | 252 skills | Markdown + JSON |
| [`soft_skills.md`](./soft_skills.md) | Core cognitive and leadership soft skills | `src/data/domains/softSkills.ts` | 6 skills | Markdown + JSON |
| [`projects.md`](./projects.md) | In-depth project case studies & engineering writeups | `src/data/projects/projectsData.ts` | 38 case studies | Markdown + JSON |
| [`publications.md`](./publications.md) | Academic research papers, citations & references | `src/data/publications/publicationsData.ts` | 1 publication | Markdown + JSON |
| [`lab_rag_scenarios.md`](./lab_rag_scenarios.md) | Interactive RAG benchmark scenarios & telemetry | `src/data/lab/ragScenariosData.ts` | 3 scenarios | Markdown + JSON |
| [`types_reference.md`](./types_reference.md) | TypeScript interface definitions & schema types | `src/data/types.ts` | Complete schema | Markdown + TypeScript |

---

## Data Portability & Restoration

Every backup markdown file contains:
1. **Human-Readable Markdown**: Structured headers, tables, bullet points, and code blocks for documentation and viewing on GitHub or any markdown editor.
2. **Machine-Readable Raw JSON**: A fenced ```json block at the end of each file containing the exact JavaScript/TypeScript data object for automated ingestion, schema migration, or codebase restoration.
