import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    name: "lmf-event-driven-platform",
    method: "PUBLISH",
    route: "/topics/order.created",
    description:
      "Monorepo de 8 microsserviços em produção — order, payment, inventory, fraud, notification, audit, auth e gateway — orquestrados por saga coreografada sobre Kafka, com Outbox/Inbox, DLT e retry. Ganhou um Gateway com validação de JWT na borda, rate limiting e Swagger agregado, um Auth Service com JWT RS256 via JWKS, e observabilidade completa com Prometheus, Grafana e OpenTelemetry.",
    stack: [
      "Java 17",
      "Spring Boot 3",
      "Spring Cloud Gateway",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "Prometheus",
      "Kubernetes",
    ],
    request: `POST /api/v1/orders`,
    response: `{ "orderId": "ord_7a1", "status": "PAYMENT_APPROVED" }`,
    href: "https://github.com/leozztto/LmfEventDrivenPlatform",
    badge: "Grandes melhorias recentes",
    highlights: [
      "8 microsserviços completos (saga coreografada)",
      "Gateway: JWT na borda + rate limiting + Swagger agregado",
      "Auth Service: JWT RS256 via JWKS",
      "Observabilidade: Prometheus + Grafana + OpenTelemetry",
    ],
  },
  {
    name: "lmf-bank-api",
    method: "POST",
    route: "/v1/accounts/:id/transfer",
    description:
      "Core banking simplificado com arquitetura ledger + projection e event-driven design: contas, depósitos, saques e transferências com idempotência via Kafka. Reestruturado como monorepo (backend Spring Boot + frontend Next.js + Nginx como proxy reverso), com autenticação JWT por papéis (admin/usuário) e CI dedicado por módulo com Quality Gate no SonarCloud.",
    stack: [
      "Java 17",
      "Spring Boot 3.5",
      "Next.js 14",
      "Kafka",
      "PostgreSQL",
      "Flyway",
      "Docker",
      "Kubernetes",
    ],
    request: `{ "amount": 250.00, "to_account": "acc_9f2" }`,
    response: `{ "status": "completed", "idempotent": true }`,
    href: "https://github.com/leozztto/LmfBankByLezzotto",
    badge: "Grandes melhorias recentes",
    highlights: [
      "Monorepo backend + frontend + Nginx (ADR)",
      "CI por módulo c/ SonarCloud Quality Gate",
      "JWT c/ papéis admin/usuário",
      "Testes unitários, integração (Testcontainers) e Pact",
    ],
  },
  {
    name: "portfolio",
    method: "GET",
    route: "/home",
    description:
      "Este portfólio: site em Next.js 14 (App Router) inteiramente modelado como documentação de API — navegação e seções com rótulos de rota (GET /sobre, GET /projetos...), um terminal no hero que consome um endpoint real (/api/status), projetos exibidos como request/response e experiência profissional como changelog versionado. Conteúdo 100% tipado e separado dos componentes, que só consomem dados.",
    stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Vercel"],
    request: `GET /home`,
    response: `{ "status": 200, "rendered": "app-router" }`,
    href: "https://github.com/leozztto/portfolio",
    highlights: [
      "Conteúdo tipado em src/content/ + src/types/, sem shapes duplicados",
      "Endpoint real /api/status consumido pelo terminal do hero",
      "SEO: metadata, sitemap.ts, robots.ts e opengraph-image dinâmica",
      "Paleta e fontes centralizadas em lib/theme.ts e tailwind.config.ts",
    ],
  },
];
