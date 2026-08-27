import Terminal from "@/components/Terminal";
import Reveal from "@/components/Reveal";
import NeuralNetwork from "@/components/NeuralNetwork";
import Nav from "@/components/Nav";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ArchitectureExplorer from "@/components/ArchitectureExplorer";
import SkillRadar from "@/components/SkillRadar";

const nav = [
  { method: "GET", route: "/sobre", href: "#sobre" },
  { method: "GET", route: "/atuacao", href: "#atuacao" },
  { method: "GET", route: "/competencias", href: "#competencias" },
  { method: "GET", route: "/projetos", href: "#projetos" },
  { method: "GET", route: "/dominios", href: "#dominios" },
  { method: "GET", route: "/arquitetura", href: "#arquitetura" },
  { method: "GET", route: "/changelog", href: "#experiencia" },
  { method: "POST", route: "/contato", href: "#contato" },
];

const stack = [
  { group: "Linguagens", items: ["Java", "Kotlin", "SQL"] },
  { group: "Frameworks", items: ["Spring Boot", "Hibernate / JPA", "Angular"] },
  { group: "Mensageria & Dados", items: ["Kafka", "RabbitMQ", "PostgreSQL"] },
  { group: "Infra & Cloud", items: ["Docker", "Kubernetes", "AWS / GCP"] },
];

const radarSkills = [
  { label: ["Backend Java"], value: 5 },
  { label: ["Mensageria", "& Eventos"], value: 5 },
  { label: ["Cloud & DevOps"], value: 4.5 },
  { label: ["Dados", "(SQL/NoSQL)"], value: 4.5 },
  { label: ["Arquitetura", "& Design"], value: 4.5 },
  { label: ["Sistemas", "Distribuídos"], value: 5 },
];

const coreEngineering = [
  {
    title: "Java & Spring",
    badge: "Core Backend",
    items: "Produção · APIs REST · Microsserviços · Sistemas críticos · Spring Boot",
  },
  {
    title: "Kafka & Mensageria",
    badge: "Event-Driven",
    items: "Event-driven · RabbitMQ · Integrações assíncronas · Sistemas distribuídos",
  },
  {
    title: "AWS & GCP Cloud",
    badge: "Cloud Infrastructure",
    items: "Kubernetes · Docker · Deploy em nuvem · Data Centers",
  },
  {
    title: "Databases",
    badge: "Data Layer",
    items: "PostgreSQL · SQL Server · Bancos relacionais e não relacionais",
  },
  {
    title: "Containers & Delivery",
    badge: "DevOps & CI/CD",
    items: "Docker · Kubernetes · CI/CD · Automação de pipelines",
  },
  {
    title: "Architecture & Design",
    badge: "System Design",
    items: "Microsserviços · Event-Driven · Resiliência · Observabilidade",
  },
];

const experienceAreas = [
  "Microsserviços",
  "Design de APIs",
  "Mensageria",
  "CI/CD",
  "Bancos relacionais e não relacionais",
  "Arquitetura orientada a eventos",
  "Arquitetura de microsserviços",
];

const education = [
  "Análise e Desenvolvimento de Sistemas — UTFPR (2014–2018)",
  "MBA em Business Intelligence — Universidade Positivo (2019–2020)",
  "Bacharelado em Filosofia, Linguagem e Existencialismo — Faculdade Vicentina",
];

const studyingNow = [
  "Inteligência Artificial",
  "Pós-Graduação Java Elite — Java e Agentes de IA (UniPDS, 2026–2027)",
];

const aboutStats = [
  { value: "10", label: "anos em TI" },
  { value: "8", label: "anos em desenvolvimento de software" },
];

const workingStyle = [
  {
    title: "Backend escalável",
    description:
      "APIs REST e microsserviços em Java e Kotlin com Spring Boot, pensados para crescer junto com o negócio.",
    tags: ["Java", "Kotlin", "Spring Boot"],
  },
  {
    title: "Arquitetura orientada a eventos",
    description:
      "Mensageria e processamento assíncrono com Kafka e RabbitMQ, desacoplando serviços críticos.",
    tags: ["Kafka", "RabbitMQ", "Event-Driven"],
  },
  {
    title: "Cloud & infraestrutura",
    description:
      "Deploy e operação em Kubernetes sobre AWS, GCP e data centers próprios.",
    tags: ["AWS", "GCP", "Kubernetes", "Docker"],
  },
  {
    title: "Resiliência & observabilidade",
    description:
      "Sistemas pensados para alta disponibilidade, consistência de dados e recuperação de falhas.",
    tags: ["Resilience", "Observability"],
  },
  {
    title: "Dados",
    description:
      "Modelagem e persistência em bancos relacionais e não relacionais, conforme a necessidade do domínio.",
    tags: ["PostgreSQL", "SQL Server", "NoSQL"],
  },
  {
    title: "CI/CD & qualidade",
    description:
      "Integração e entrega contínuas, testes automatizados e padronização de arquitetura.",
    tags: ["CI/CD", "Testes", "Code Review"],
  },
];

const problemsSolved = [
  {
    title: "Modernização de sistemas legados",
    description:
      "Evolução incremental de aplicações antigas para arquiteturas de microsserviços, sem quebrar fluxos existentes.",
  },
  {
    title: "Integrações resilientes",
    description:
      "APIs, autenticação e mensageria com tratamento de falhas entre serviços distribuídos.",
  },
  {
    title: "Arquitetura orientada a eventos",
    description:
      "Kafka e RabbitMQ para desacoplar sistemas e processar alto volume de eventos.",
  },
  {
    title: "Consistência de dados",
    description:
      "Bancos relacionais e não relacionais, garantindo integridade em sistemas transacionais críticos.",
  },
  {
    title: "Escalabilidade e alta disponibilidade",
    description:
      "Deploy em Kubernetes sobre AWS e GCP com foco em resiliência operacional.",
  },
  {
    title: "CI/CD e qualidade técnica",
    description:
      "Pipelines de integração e entrega contínuas, testes automatizados e padronização de código.",
  },
];

const criticalDomains = [
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

const projects = [
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

const changelog = [
  {
    version: "v6.0.0",
    date: "jun 2026 — atual",
    role: "Engenheiro de Software Sênior",
    company: "LEZZOTTO Tech Ltda",
    notes: ["[Adicione aqui os destaques desta posição atual.]"],
  },
  {
    version: "v5.0.0",
    date: "set 2024 — abr 2026",
    role: "Engenheiro de Software SR",
    company: "PAGBANK",
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
    company: "BANCO PAN",
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
    date: "2017 — 2020",
    role: "Desenvolvedor de Software / Especialista em Conversão de Dados",
    company: "VIASOFT, LIMBER e LZ CONSULTORIA",
    notes: [
      "Desenvolvimento desktop com Delphi e relatórios/consultas personalizadas.",
      "Migração e conversão de dados entre PostgreSQL, Firebird, MySQL e Oracle.",
      "Implantação de sistemas e suporte técnico a clientes.",
    ],
  },
];

function MethodTag({ method }: { method: string }) {
  const color = method === "GET" ? "text-success" : "text-accent";
  return (
    <span className={`font-mono text-xs font-bold ${color}`}>{method}</span>
  );
}

export default function Home() {
  return (
    <main className="bg-grid min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-bg shadow-lg shadow-black/30">
        <Nav items={nav} />
      </header>

      {/* Hero */}
      <section className="relative isolate min-h-[640px] overflow-hidden sm:min-h-[760px]">
        <NeuralNetwork />
        <div className="relative z-0 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20">
          <div>
            <p className="mb-5 font-mono text-xl uppercase tracking-widest text-accent">
              200 OK
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              Foco em arquitetar o back-end
              <br className="hidden sm:block" /> para sustentar sistemas críticos e de alta disponibilidade.
            </h1>
            <p className="mt-4 max-w-xl text-muted">
              Engenheiro de software sênior especializado em sistemas
              financeiros de alto volume transacional, sempre com foco em escalabilidade e consistência de
              dados.
            </p>
          </div>
          <Terminal />
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-7xl px-6 py-8">
        <Reveal>
          <SectionHeader method="GET" route="/sobre" title="Sobre" />
        </Reveal>

        <Reveal delay={100}>
          <p className="font-mono text-xl uppercase tracking-widest text-accent">
            Senior Software Engineer · Back-End
          </p>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Bio */}
          <div>
            <Reveal delay={200}>
              <p className="max-w-2xl text-muted">
                Atuo com back-end há oito anos, boa parte desse tempo em
                sistemas críticos, que exigem alta resiliência: pagamentos, mensageria
                financeira e plataformas de alto volume transacional. Tenho grande 
                preocupação em decisões de arquitetura que visam garantir a estabilidade
                do sistema sob carga real.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-4 max-w-2xl text-muted">
                No dia a dia isso se traduz em tecnologias como Java e Kotlin 
                com Spring Boot, Kafka para mensageria e aplicações Event-Driven 
                e deploys em Kubernetes sobre plataformas como AWS e GCP.
                Escalabilidade e consistência de dados guiam praticamente toda
                decisão técnica que tomo.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 max-w-2xl text-muted">
                Agora estou expandindo esse repertório para Inteligência
                Artificial, numa pós-graduação focada em Java aplicado a
                agentes de IA — a ideia é levar essa camada para os mesmos
                sistemas críticos onde já atuo e acelerar o desenvolvimento 
                melhorando a visibilidade arquitetural.
              </p>
            </Reveal>

            <Reveal delay={350}>
              <div className="mt-8 flex gap-8">
                {aboutStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl font-bold text-text">
                      {stat.value}
                      <span className="text-accent">+</span>
                    </p>
                    <p className="text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-8">
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.flatMap((g) => g.items).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Metadados: experiência, formação, estudos */}
          <div className="space-y-6">
            <Reveal delay={200} className="rounded-lg border border-border bg-surface p-5">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                Experiência com
              </p>
              <ul className="space-y-1.5">
                {experienceAreas.map((item) => (
                  <li key={item} className="text-sm text-text">
                    <span className="text-accent">·</span> {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={280} className="rounded-lg border border-border bg-surface p-5">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                🎓 Formação
              </p>
              <ul className="space-y-1.5">
                {education.map((item) => (
                  <li key={item} className="text-sm text-text">
                    <span className="text-accent">·</span> {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={360} className="rounded-lg border border-border bg-surface p-5">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                📚 Atualmente estudando
              </p>
              <ul className="space-y-1.5">
                {studyingNow.map((item) => (
                  <li key={item} className="text-sm text-text">
                    <span className="text-accent">·</span> {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Como Atuo */}
      <section id="atuacao" className="mx-auto max-w-7xl px-6 py-8">
        <Reveal>
          <SectionHeader method="GET" route="/atuacao" title="Como Atuo" />
        </Reveal>
        <Reveal delay={80}>
          <p className="mb-10 text-base text-muted">
            Minha atuação combina desenvolvimento hands-on e arquitetura,
            transformando problemas de negócio em sistemas confiáveis, escaláveis
            e fáceis de evoluir.
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workingStyle.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="group rounded-lg border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/40"
            >
              <p className="mb-2 font-mono text-2xl font-bold text-accent/70 transition group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Problemas que resolvo */}
        <div className="mt-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Foco em resultado
            </p>
            <h3 className="mt-1 mb-8 font-display text-xl font-bold">
              Problemas que resolvo
            </h3>
          </Reveal>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {problemsSolved.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="flex gap-5">
                <span className="font-display text-3xl font-bold text-accent/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-display text-base font-bold">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Engineering */}
      <section id="competencias" className="mx-auto max-w-7xl px-6 py-8">
        <Reveal>
          <SectionHeader method="GET" route="/competencias" title="Core Engineering" />
        </Reveal>
        <Reveal delay={80}>
          <p className="mb-10 text-base text-muted">
            Competências aplicadas em produção — consolidadas em arquiteturas
            escaláveis, ecossistema Java e sistemas críticos.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[480px_1fr]">
          {/* Mapa de domínios (radar) */}
          <Reveal delay={120} className="rounded-lg border border-border bg-surface p-6">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Mapa de domínios
              </p>
              <p className="font-mono text-[10px] text-muted/60">Visão arquitetural</p>
            </div>
            <SkillRadar skills={radarSkills} />
          </Reveal>

          {/* Lista Core Engineering — um único card, com o mesmo padding do
              painel ao lado, para que os dois comecem exatamente na mesma linha */}
          <Reveal delay={150} className="rounded-lg border border-border bg-surface p-6">
            <div className="divide-y divide-border">
              {coreEngineering.map((item) => (
                <div key={item.title} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-sm font-medium text-text">{item.title}</h3>
                    <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[9px] text-accent">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted">{item.items}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="mx-auto max-w-7xl px-6 py-8">
        <Reveal>
          <SectionHeader method="GET" route="/projetos" title="Projetos" />
        </Reveal>
        <Reveal delay={80}>
          <p className="mb-10 text-base text-muted">
            Sistemas construídos e mantidos por mim — do design da API à
            persistência e ao processamento assíncrono.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} className="h-full">
              <a
                href={p.href}
                className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-black/30"
              >
                <div className="mb-2 flex items-center gap-2">
                  <MethodTag method={p.method} />
                  <span className="font-mono text-xs text-muted">{p.route}</span>
                </div>
                <h3 className="font-display text-lg font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
                <div className="mt-4 rounded border border-border bg-surface-alt p-3 font-mono text-[11px] leading-relaxed text-muted">
                  <p className="text-text">→ {p.request}</p>
                  <p className="mt-1 text-success">← {p.response}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Domínios de Experiência Crítica */}
      <section id="dominios" className="mx-auto max-w-7xl px-6 py-8">
        <Reveal>
          <SectionHeader method="GET" route="/dominios" title="Domínios de Experiência" />
        </Reveal>
        <Reveal delay={80}>
          <p className="mb-10 text-base text-muted">
            Confiabilidade onde a tolerância a falhas é mínima — experiência em
            setores onde disponibilidade e integridade de dados são requisitos
            de negócio, não apenas requisitos técnicos.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-3">
          {criticalDomains.map((domain, i) => (
            <Reveal
              key={domain.sector}
              delay={i * 100}
              className="rounded-lg border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/40"
            >
              <p className="font-mono text-2xl font-bold text-accent/60">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                Setor
              </p>
              <h3 className="mt-1 font-display text-base font-bold">{domain.sector}</h3>
              <p className="mt-1 font-mono text-[11px] text-muted">{domain.companies}</p>
              <p className="mt-3 text-sm text-muted">{domain.detail}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {domain.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Arquitetura */}
      <section id="arquitetura" className="mx-auto max-w-7xl px-6 py-8">
        <Reveal>
          <SectionHeader method="GET" route="/arquitetura" title="Arquitetura" />
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[340px_1fr] lg:items-start">
          <Reveal delay={80}>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Como penso arquitetura
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold leading-tight">
              Simples de explicar,
              <br /> pronto pra <span className="text-accent">produção</span>
            </h3>
            <p className="mt-4 text-sm text-muted">
              Os diagramas ao lado resumem dois padrões que uso bastante no
              dia a dia: um fluxo de serviços por trás de um gateway, e um
              fluxo orientado a eventos passando por um broker. Alterne entre
              as abas para ver cada um.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["APIs REST", "Mensageria", "Cache distribuído", "Resiliência", "Escalabilidade", "Observabilidade"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ArchitectureExplorer />
          </Reveal>
        </div>
      </section>

      {/* Experiência / Changelog */}
      <section id="experiencia" className="mx-auto max-w-7xl px-6 py-8">
        <Reveal>
          <SectionHeader method="GET" route="/changelog" title="Experiência" />
        </Reveal>
        <Reveal delay={100}>
          <ExperienceTimeline entries={changelog} />
        </Reveal>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto max-w-7xl px-6 py-10">
        <Reveal>
          <SectionHeader method="POST" route="/contato" title="Contato" />
        </Reveal>

        <Reveal delay={100}>
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Aberto a oportunidades
          </p>
          <p className="mt-2 max-w-xl font-display text-xl font-bold text-text">
            100% remotas como Senior Software Engineer, Senior Backend Engineer
          </p>
          <p className="mt-2 max-w-xl text-xs text-muted">
            Preferência por CLT. Avalio propostas PJ.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-stretch gap-4">
          {[
            {
              label: "↓ baixar currículo (PDF)",
              href: "/curriculo-leandro-franceschetto.pdf",
              download: true,
              primary: true,
            },
            { label: "leozztto@gmail.com", href: "mailto:leozztto@gmail.com" },
            { label: "linkedin.com/in/leandro-mf", href: "https://www.linkedin.com/in/leandro-mf" },
            { label: "github.com/leozztto", href: "https://github.com/leozztto" },
          ].map((link, i) => (
            <Reveal key={link.href} delay={180 + i * 100}>
              <a
                href={link.href}
                download={link.download || undefined}
                className={
                  link.primary
                    ? "inline-flex h-full items-center gap-2 rounded border border-accent bg-accent/10 px-4 py-2.5 font-mono text-sm text-accent transition hover:bg-accent/20"
                    : "inline-flex h-full items-center gap-2 rounded border border-border px-4 py-2.5 font-mono text-sm text-text transition hover:border-accent/50"
                }
              >
                {link.label}
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted">
          <span>© {new Date().getFullYear()} Leandro Menegazzo Franceschetto</span>
          <span>Senior Software Engineer — Back-End</span>
        </div>
      </footer>
    </main>
  );
}

function SectionHeader({
  method,
  route,
  title,
}: {
  method: string;
  route: string;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-baseline gap-3 border-b border-border pb-4">
      <MethodTag method={method} />
      <span className="font-mono text-xs text-muted">{route}</span>
      <h2 className="ml-auto font-display text-2xl font-bold">{title}</h2>
    </div>
  );
}
