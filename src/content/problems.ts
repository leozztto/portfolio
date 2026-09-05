import type { ProblemSolved } from "@/types/content";

export const problemsSolved: ProblemSolved[] = [
  {
    title: "Modernização sem parar o negócio",
    description:
      "Evolução incremental de legado para microsserviços, extraindo domínios um de cada vez e mantendo os fluxos existentes no ar — sem 'big bang' e sem congelar o roadmap do produto.",
  },
  {
    title: "Zero perda de evento em cenário de falha",
    description:
      "Integrações desenhadas para continuar entregando dado mesmo quando um serviço cai ou a rede falha, evitando reconciliação manual e retrabalho depois do incidente.",
  },
  {
    title: "Dado consistente sob concorrência",
    description:
      "Operações transacionais que não duplicam nem perdem informação mesmo com múltiplos serviços escrevendo ao mesmo tempo — essencial quando o dado representa dinheiro.",
  },
  {
    title: "Escalar sem inflar o time de operação",
    description:
      "Deploy e entrega automatizados para suportar pico de tráfego e novas features sem exigir mais gente cuidando de infraestrutura manualmente.",
  },
];
