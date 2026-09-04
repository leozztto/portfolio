import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    name: "lmf-bank-api",
    method: "POST",
    route: "/v1/accounts/:id/transfer",
    description:
      "Core banking simplificado com arquitetura ledger + projection e event-driven design: contas, depósitos, saques e transferências com idempotência via Kafka e autenticação JWT.",
    stack: ["Java 17", "Spring Boot 3.5", "Kafka", "PostgreSQL", "Docker", "Kubernetes"],
    request: `{ "amount": 250.00, "to_account": "acc_9f2" }`,
    response: `{ "status": "completed", "idempotent": true }`,
    href: "https://github.com/leozztto/LmfBankByLezzotto",
  },
  {
    name: "lmf-event-driven-platform",
    method: "PUBLISH",
    route: "/topics/order.created",
    description:
      "Monorepo de 8 microsserviços orquestrados por saga coreografada (order, payment, inventory, fraud, notification, audit, auth, gateway), com Outbox/Inbox, DLT e retry sobre Kafka.",
    stack: ["Java 17", "Spring Boot 3", "Kafka", "PostgreSQL", "Redis", "Kubernetes"],
    request: `POST /api/v1/orders`,
    response: `{ "orderId": "ord_7a1", "status": "PAYMENT_APPROVED" }`,
    href: "https://github.com/leozztto/LmfEventDrivenPlatform",
  },
  {
    name: "portfolio",
    method: "GET",
    route: "/projetos",
    description:
      "Este portfólio: site em Next.js modelado como uma API — seções como rotas, conteúdo tipado e componentes que só consomem dados, sem redeclarar shapes.",
    stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS"],
    request: `GET /`,
    response: `{ "status": 200, "rendered": "app-router" }`,
    href: "https://github.com/leozztto/portfolio",
  },
];
