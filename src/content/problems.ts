import type { ProblemSolved } from "@/types/content";

export const problemsSolved: ProblemSolved[] = [
  {
    title: "Modernização de sistemas legados",
    description:
      "Evolução incremental de monólitos e aplicações antigas para arquiteturas de microsserviços, extraindo domínios um de cada vez, sem interromper fluxos em produção nem exigir reescritas completas.",
  },
  {
    title: "Arquitetura orientada a eventos e integrações resilientes",
    description:
      "Kafka e RabbitMQ para desacoplar serviços e processar alto volume de eventos, com retry, dead-letter queue e idempotência garantindo entrega mesmo diante de falhas de rede ou indisponibilidade entre serviços distribuídos.",
  },
  {
    title: "Consistência de dados em sistemas transacionais",
    description:
      "Bancos relacionais e não relacionais modelados para preservar integridade em operações críticas, aplicando padrões como transactional outbox para evitar duplicidade e perda de eventos.",
  },
  {
    title: "Escalabilidade, alta disponibilidade e entrega contínua",
    description:
      "Deploy em Kubernetes sobre AWS e GCP com foco em resiliência operacional, sustentado por pipelines de CI/CD, testes automatizados e padronização de código para acelerar entregas sem abrir mão de qualidade.",
  },
];
