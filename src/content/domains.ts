import type { CriticalDomain } from "@/types/content";

export const criticalDomains: CriticalDomain[] = [
  {
    sector: "Financeiro & Pagamentos",
    short: "Financeiro",
    companies: "PagBank · Banco PAN · TIVIT",
    detail:
      "Sistemas transacionais de adquirência e tokenização no PagBank, microsserviços para sistemas financeiros na TIVIT e um ecossistema de investimentos no Banco PAN processando mais de 300 mil eventos diários — foco em segurança e performance.",
    highlights: [
      "Ecossistema c/ +300 mil eventos/dia",
      "Tokenização & segurança",
      "Kafka + RabbitMQ",
    ],
  },
  {
    sector: "Varejo & ERP",
    short: "Varejo",
    companies: "CISS · Viasoft · Limber Software",
    detail:
      "Entre a gestão de varejo na CISS e os ERPs da Viasoft (construção civil) e da Limber Software (turismo), desenvolvi microsserviços, APIs REST e BFFs em Java/Spring Boot, com mensageria para desacoplar módulos de estoque, vendas e integrações fiscais.",
    highlights: ["Microsserviços Java/Spring", "APIs REST + BFF", "Mensageria"],
  },
  {
    sector: "Dados & Migração",
    short: "Dados",
    companies: "Limber Software · LZ Consultoria",
    detail:
      "Na Limber Software e na LZ Consultoria, conduzi projetos de migração e conversão de dados legados entre PostgreSQL, Firebird, MySQL e Oracle para múltiplos clientes em produção — do desenho do ETL à implantação e suporte pós-entrega.",
    highlights: [
      "PostgreSQL · Firebird · MySQL · Oracle",
      "ETL & conversão",
      "Implantação e suporte",
    ],
  },
];
