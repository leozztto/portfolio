import { Nav } from "@/components/layout/Nav";
import { Reveal } from "@/components/ui/Reveal";
import { Terminal } from "@/components/sections/Terminal";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { NeuralNetwork } from "@/components/diagrams/NeuralNetwork";
import { SkillRadar } from "@/components/diagrams/SkillRadar";
import { ArchitectureExplorer } from "@/components/diagrams/ArchitectureExplorer";
import { siteConfig } from "@/config/site";
import { nav } from "@/content/navigation";
import { stack } from "@/content/stack";
import { radarSkills, coreEngineering } from "@/content/skills";
import { aboutStats, experienceAreas, education, studyingNow } from "@/content/about";
import { workingStyle } from "@/content/working-style";
import { problemsSolved } from "@/content/problems";
import { criticalDomains } from "@/content/domains";
import { projects } from "@/content/projects";
import { changelog } from "@/content/changelog";
import { contactLinks } from "@/content/contact";
import { MethodTag } from "@/components/ui/MethodTag";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
            Preferência por CLT. Avalio propostas PJ conforme escopo e contexto.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-stretch gap-4">
          {contactLinks.map((link, i) => (
            <Reveal key={link.href} delay={180 + i * 100}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
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
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span>{siteConfig.role}</span>
        </div>
      </footer>
    </main>
  );
}
