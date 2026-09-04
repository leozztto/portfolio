import type { ChangelogEntry } from "@/types/content";

export const changelog: ChangelogEntry[] = [
  {
    version: "v6.0.0",
    date: "jun 2026 — atual",
    role: "Engenheiro de Software Sênior",
    company: "LEZZOTTO Tech Ltda",
    notes: [
      "Atuação como Engenheiro de Software Sênior, com foco em arquitetura de sistemas distribuídos e decisões de system design de ponta a ponta.",
      "Definição de padrões arquiteturais para microsserviços e mensageria, priorizando escalabilidade, resiliência e observabilidade.",
      "Uso de ferramentas de codificação assistida por IA (agentes como Claude Code) no dia a dia de desenvolvimento, para gerar, revisar e refatorar código com mais velocidade e consistência.",
      "Aplicação de IA na análise de trade-offs arquiteturais e na documentação de decisões técnicas, acelerando o processo de design de sistemas.",
      "Construção de features e produtos que incorporam LLMs e agentes de IA, unindo a experiência em sistemas distribuídos com os estudos em Java e Agentes de IA.",
    ],
  },
  {
    version: "v5.0.0",
    date: "set 2024 — abr 2026",
    role: "Engenheiro de Software SR",
    company: "PagBank",
    notes: [
      "No PagBank, atuei como engenheiro sênior na evolução de soluções de adquirência e tokenização",
      "Tomada de decisões arquiteturais e implementação de sistemas transacionais de alta criticidade.",
      "Evolução de microsserviços back-end em Java e Spring Boot para soluções de adquirência e tokenização.",
      "Implementação de arquitetura orientada a eventos com Apache Kafka e RabbitMQ.",
      "Deploy e operação em Kubernetes sobre AWS e DataCenters próprios.",
      "Contribuição para o aumento de volume transacional e expansão da bandeira Banricompras.",
      "Atuação em segurança, tokenização e performance tuning de sistemas transacionais críticos.",
    ],
  },
  {
    version: "v4.0.0",
    date: "fev 2023 — set 2024",
    role: "Engenheiro de Software",
    company: "Banco PAN",
    notes: [
      "No Banco PAN, participei da construção de um ecossistema(microsservices) distribuído para investimentos, processando mais de 300 mil eventos diários.",
      "Arquitetura orientada a eventos com Apache Kafka e SQS.",
      "Deploy de microsserviços em Kubernetes sobre AWS.",
      "Participação em decisões de arquitetura e definição de padrões técnicos, reduzindo o acoplamento entre serviços.",
    ],
  },
  {
    version: "v3.0.0",
    date: "dez 2022 — fev 2023",
    role: "Desenvolvedor de Software Back-End",
    company: "TIVIT",
    notes: [
      "Desenvolvimento de microsserviços, API REST e BFF em Java 8/11 com Spring Boot, Data, Security, JPA e Hibernate.",
      "Comunicação entre serviços com FeignClient, containers em Docker e Kubernetes.",
      "Testes unitários, de integração, carga e estresse com JUnit e Sonar.",
    ],
  },
  {
    version: "v2.0.0",
    date: "nov 2020 — dez 2022",
    role: "Desenvolvedor Full Stack",
    company: "CISS S.A.",
    notes: [
      "Back-end em Java com Spring MVC/Boot, Security, JPA e Hibernate; front-end em Angular.",
      "Desenvolvimento de aplicações de mensageria e relatórios com JasperReport.",
      "Bancos de dados DB2, SQL Server e PL/SQL.",
    ],
  },
  {
    version: "v1.0.0",
    date: "2016 — 2020",
    role: "Desenvolvedor de Software / Especialista em Conversão de Dados",
    company: "Viasoft, Limber Software e LZ Consultoria",
    notes: [
      "Desenvolvimento desktop com Delphi e relatórios/consultas personalizadas.",
      "Migração e conversão de dados entre PostgreSQL, Firebird, MySQL e Oracle.",
      "Implantação de sistemas e suporte técnico a clientes.",
    ],
  },
];
