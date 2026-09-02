import type { CriticalDomain } from "@/types/content";

export const criticalDomains: CriticalDomain[] = [
  {
    sector: "Financeiro & Pagamentos",
    short: "Financeiro",
    companies: "PagBank · Banco PAN",
    detail:
      "Sistemas transacionais de adquirência e tokenização, com processamento de mais de 300 mil eventos diários, foco em segurança e performance.",
    highlights: ["+300 mil eventos/dia", "Tokenização & segurança", "Kafka + RabbitMQ"],
  },
  {
    sector: "Varejo & ERP",
    short: "Varejo",
    companies: "CISS · TIVIT",
    detail:
      "Microsserviços e APIs para sistemas de gestão de varejo, com mensageria e arquitetura orientada a eventos.",
    highlights: ["Microsserviços Java/Spring", "APIs REST + BFF", "Mensageria"],
  },
  {
    sector: "Dados & Migração",
    short: "Dados",
    companies: "Limber Software · LZ Consultoria",
    detail:
      "Conversão e migração de dados entre PostgreSQL, Firebird, MySQL e Oracle em ambientes de produção.",
    highlights: ["PostgreSQL · Firebird · MySQL · Oracle", "ETL & conversão", "Implantação e suporte"],
  },
];
