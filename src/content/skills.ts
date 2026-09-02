import type { CoreSkill, RadarSkill } from "@/types/content";

export const radarSkills: RadarSkill[] = [
  { label: ["Backend Java"], value: 5 },
  { label: ["Mensageria", "& Eventos"], value: 5 },
  { label: ["Cloud & DevOps"], value: 4.5 },
  { label: ["Dados", "(SQL/NoSQL)"], value: 4.5 },
  { label: ["Arquitetura", "& Design"], value: 4.5 },
  { label: ["Sistemas", "Distribuídos"], value: 5 },
];

export const coreEngineering: CoreSkill[] = [
  {
    title: "Java & Spring",
    badge: "Core Backend",
    items: "Produção · APIs REST · Microsserviços · Sistemas críticos · Spring Boot",
  },
  {
    title: "Kafka & Mensageria",
    badge: "Event-Driven",
    items: "Event-driven · RabbitMQ · Integrações assíncronas · Sistemas distribuídos",
  },
  {
    title: "AWS & GCP Cloud",
    badge: "Cloud Infrastructure",
    items: "Kubernetes · Docker · Deploy em nuvem · Data Centers",
  },
  {
    title: "Databases",
    badge: "Data Layer",
    items: "PostgreSQL · SQL Server · Bancos relacionais e não relacionais",
  },
  {
    title: "Containers & Delivery",
    badge: "DevOps & CI/CD",
    items: "Docker · Kubernetes · CI/CD · Automação de pipelines",
  },
  {
    title: "Architecture & Design",
    badge: "System Design",
    items: "Microsserviços · Event-Driven · Resiliência · Observabilidade",
  },
];
