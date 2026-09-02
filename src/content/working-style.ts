import type { WorkingStyleItem } from "@/types/content";

export const workingStyle: WorkingStyleItem[] = [
  {
    title: "Backend escalável",
    description:
      "APIs REST e microsserviços em Java e Kotlin com Spring Boot, pensados para crescer junto com o negócio.",
    tags: ["Java", "Kotlin", "Spring Boot"],
  },
  {
    title: "Arquitetura orientada a eventos",
    description:
      "Mensageria e processamento assíncrono com Kafka e RabbitMQ, desacoplando serviços críticos.",
    tags: ["Kafka", "RabbitMQ", "Event-Driven"],
  },
  {
    title: "Cloud & infraestrutura",
    description:
      "Deploy e operação em Kubernetes sobre AWS, GCP e data centers próprios.",
    tags: ["AWS", "GCP", "Kubernetes", "Docker"],
  },
  {
    title: "Resiliência & observabilidade",
    description:
      "Sistemas pensados para alta disponibilidade, consistência de dados e recuperação de falhas.",
    tags: ["Resilience", "Observability"],
  },
  {
    title: "Dados",
    description:
      "Modelagem e persistência em bancos relacionais e não relacionais, conforme a necessidade do domínio.",
    tags: ["PostgreSQL", "SQL Server", "NoSQL"],
  },
  {
    title: "CI/CD & qualidade",
    description:
      "Integração e entrega contínuas, testes automatizados e padronização de arquitetura.",
    tags: ["CI/CD", "Testes", "Code Review"],
  },
];
