import type { StatusInfo } from "@/types/content";

/**
 * Parte não-identidade do payload de `/api/status` (os campos de identidade —
 * name, role, location, contact — vêm de `src/config/site.ts`).
 */
export const statusInfo: StatusInfo = {
  status: "online",
  stack: ["Java", "Kotlin", "Spring Boot", "Kafka", "Docker", "Kubernetes", "AWS"],
  experience_time: "10 anos",
  available_for: "novos projetos e oportunidades",
};
