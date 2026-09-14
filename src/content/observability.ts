import type { ObservabilityEntry } from "@/types/content";

/**
 * Um item por projeto (ver `src/content/projects.ts`). O portfolio expõe um
 * endpoint público (`/api/status`) e por isso é sondado ao vivo; os outros
 * dois rodam em cluster Kubernetes privado, então o texto descreve a
 * observabilidade/qualidade real implementada em cada um (ver `highlights`
 * em `projects.ts`).
 */
export const observabilityEntries: ObservabilityEntry[] = [
  {
    projectName: "portfolio",
    method: "GET",
    route: "/",
    mode: "live",
    note: "Um site Next.js pede uma observabilidade mais direta: um endpoint de status real (/api/status, o mesmo que alimenta o terminal lá no topo) sondado agora mesmo, no seu navegador, junto com a página inicial, o sitemap.xml e o robots.txt. Os números abaixo vêm dessas chamadas reais, feitas ao vivo.",
  },
  {
    projectName: "lmf-event-driven-platform",
    method: "GET",
    route: "/actuator/prometheus",
    mode: "declared",
    note: "Os 8 microsserviços expõem métricas via Micrometer/Actuator, coletadas pelo Prometheus e visualizadas em dashboards no Grafana. O rastreamento distribuído com OpenTelemetry acompanha cada evento ao longo da saga coreografada no Kafka, e o padrão Outbox/Inbox com Dead Letter Topic e retry dá visibilidade sobre falhas e reprocessamento de mensagens. Esse cluster é privado, então os números abaixo vêm do que já foi implementado no projeto, não de uma sondagem em tempo real.",
    metrics: [
      { label: "métricas", value: "Prometheus" },
      { label: "dashboards", value: "Grafana" },
      { label: "tracing distribuído", value: "OpenTelemetry" },
      { label: "resiliência", value: "DLT + retry" },
    ],
  },
  {
    projectName: "lmf-bank-api",
    method: "GET",
    route: "/actuator/health",
    mode: "declared",
    note: "A confiabilidade é monitorada por um pipeline de CI dedicado a cada módulo do monorepo (backend, frontend e Nginx), com Quality Gate no SonarCloud bloqueando merges que reduzam cobertura ou introduzam code smells. Testes de integração com Testcontainers validam o comportamento real do banco e do Kafka, e contract tests com Pact garantem que backend e frontend não quebrem o contrato da API. Esse cluster é privado, então os números abaixo vêm do que já foi implementado no projeto, não de uma sondagem em tempo real.",
    metrics: [
      { label: "quality gate", value: "SonarCloud" },
      { label: "testes de integração", value: "Testcontainers" },
      { label: "contract tests", value: "Pact" },
      { label: "pipeline", value: "CI por módulo" },
    ],
  },
];
