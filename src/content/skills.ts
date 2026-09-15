import type { CoreSkill, RadarSkill } from "@/types/content";

export const radarSkills: RadarSkill[] = [
  { label: ["Backend Java"], value: 5 },
  { label: ["Mensageria", "& Eventos"], value: 4.3 },
  { label: ["Cloud &", "DevOps"], value: 4.2 },
  { label: ["Dados", "(SQL/NoSQL)"], value: 4.6 },
  { label: ["Arquitetura", "& Design"], value: 4.5 },
  { label: ["Sistemas", "Distribuídos"], value: 4.7 },
];

export const techPillars: CoreSkill[] = [
  {
    title: "Java, Kotlin & Spring",
    badge: "Core Backend",
    items: "APIs REST · Microsserviços · Sistemas críticos · Spring Boot em produção",
  },
  {
    title: "Kafka & Mensageria",
    badge: "Event-Driven",
    items: "Integrações assíncronas · Event Driven Architecture · Alto Volume de Eventos",
  },
  {
    title: "Cloud & Delivery",
    badge: "Infra & DevOps",
    items: "Kubernetes · Docker · AWS/GCP · Data Centers · CI/CD · automação de pipelines",
  },
  {
    title: "Dados",
    badge: "Data Layer",
    items: "PostgreSQL/MySql · Redis · Cassandra · Bancos relacionais, não relacionais, em Cache",
  },
  {
    title: "Arquitetura & Resiliência",
    badge: "System Design",
    items: "Microsserviços · Event-Driven · Alta disponibilidade · Concorrência · Observabilidade",
  },
  {
    title: "IA & Agentes",
    badge: "Applied AI",
    items: "Codificação assistida por IA · LLMs e agentes · Java aplicado a agentes (em formação)",
  },
];
