import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    name: "lmf-bank-api",
    method: "POST",
    route: "/v1/accounts/:id/transfer",
    description:
      "Sistema bancário digital com arquitetura ledger + projection + event-driven, idempotência via Kafka e autenticação JWT.",
    stack: ["Java 17", "Spring Boot", "Kafka", "PostgreSQL", "Kubernetes"],
    request: `{ "amount": 250.00, "to_account": "acc_9f2" }`,
    response: `{ "status": "completed", "idempotent": true }`,
    href: "https://github.com/leozztto/LmfBankByLezzotto",
  },
  {
    name: "lmf-event-driven-platform",
    method: "PublishEvent",
    route: "/v1/order",
    description:
      "Sistema Event-driven para comércio eletrônico, com microsserviços desacoplados, mensageria e deploy em Kubernetes e docker",
    stack: ["Java17", "Spring Boot, Kafka broker", "PostgreSQL", "Kubernetes", "Docker"],
    request: `Post /v1/order`,
    response: `{ "status": "em construção" }`,
    href: "https://github.com/leozztto/LmfEventDrivenPlatform",
  },
  {
    name: "resilient-microservice-template",
    method: "POST",
    route: "/v1/bootstrap",
    description:
      "Template de microsserviço Spring Boot com circuit breaker, observabilidade e deploy padronizado em Kubernetes/AWS.",
    stack: ["Spring Boot", "Docker", "AWS"],
    request: `{ "service_name": "orders-api" }`,
    response: `{ "created": true, "namespace": "prod" }`,
    href: "#",
  },
];
