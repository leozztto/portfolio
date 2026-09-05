import type { CoreSkill, RadarSkill } from "@/types/content";

export const radarSkills: RadarSkill[] = [
  { label: ["Backend Java"], value: 5 },
  { label: ["Mensageria", "& Eventos"], value: 5 },
  { label: ["Cloud & DevOps"], value: 4.5 },
  { label: ["Dados", "(SQL/NoSQL)"], value: 4.5 },
  { label: ["Arquitetura", "& Design"], value: 4.5 },
  { label: ["Sistemas", "Distribuídos"], value: 5 },
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
    items: "RabbitMQ · Integrações assíncronas · Alto volume de eventos",
  },
  {
    title: "Cloud & Delivery",
    badge: "Infra & DevOps",
    items: "Kubernetes · Docker · AWS/GCP · Data Centers próprios · CI/CD · automação de pipelines",
  },
  {
    title: "Dados",
    badge: "Data Layer",
    items: "PostgreSQL · SQL Server · Bancos relacionais e não relacionais",
  },
  {
    title: "Arquitetura & Resiliência",
    badge: "System Design",
    items: "Microsserviços · Event-Driven · Alta disponibilidade · Observabilidade",
  },
];
