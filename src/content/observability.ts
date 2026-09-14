import type { ObservabilityEntry } from "@/types/content";

/**
 * Um item por projeto (ver `src/content/projects.ts`). Só o portfolio expõe um
 * endpoint público (`/api/status`), então só ele é medido ao vivo — os outros
 * dois têm sua observabilidade/qualidade declarada a partir do que já foi
 * entregue nesses projetos (ver `highlights` em `projects.ts`).
 */
export const observabilityEntries: ObservabilityEntry[] = [
  {
    projectName: "portfolio",
    method: "GET",
    route: "/",
    mode: "live",
    note: "Os dados abaixo são medidos agora mesmo, no seu navegador, com uma chamada real para cada rota pública deste site — a página inicial, a API /api/status (a mesma que alimenta o terminal lá no topo), o sitemap.xml e o robots.txt.",
  },
  {
    projectName: "lmf-event-driven-platform",
    method: "GET",
    route: "/actuator/prometheus",
    mode: "declared",
    note: "Stack de observabilidade do projeto — cluster Kubernetes privado, sem endpoint público para medir ao vivo.",
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
    note: "Qualidade garantida por CI dedicado — cluster Kubernetes privado, sem endpoint público para medir ao vivo.",
    metrics: [
      { label: "quality gate", value: "SonarCloud" },
      { label: "testes de integração", value: "Testcontainers" },
      { label: "contract tests", value: "Pact" },
      { label: "pipeline", value: "CI por módulo" },
    ],
  },
];
