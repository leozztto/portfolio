import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillRadar } from "@/components/diagrams/SkillRadar";
import { radarSkills, techPillars } from "@/content/skills";
import { problemsSolved } from "@/content/problems";

export function WorkingStyle() {
  return (
    <section id="atuacao" className="mx-auto max-w-7xl px-6 py-8">
      <Reveal>
        <SectionHeader method="GET" route="/atuacao" title="Como Atuo" />
      </Reveal>
      <Reveal delay={80}>
        <p className="mb-10 text-base text-muted">
          Combino desenvolvimento hands-on e arquitetura, transformando problemas de negócio em
          sistemas confiáveis, escaláveis e fáceis de evoluir. O mapa e os pilares abaixo resumem
          onde essa experiência é mais forte.
        </p>
      </Reveal>

      <div className="grid items-stretch gap-8 lg:grid-cols-[480px_1fr]">
        {/* Mapa de domínios (radar) */}
        <Reveal
          delay={120}
          className="flex flex-col rounded-lg border border-border bg-surface p-6"
        >
          <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Mapa de domínios
            </p>
            <p className="font-mono text-[10px] text-muted/60">Visão arquitetural</p>
          </div>
          <div className="mx-auto flex w-full max-w-[420px] flex-1 items-center">
            <SkillRadar skills={radarSkills} />
          </div>
        </Reveal>

        {/* Pilares técnicos — um único card, com o mesmo padding do
            painel ao lado, para que os dois comecem exatamente na mesma linha */}
        <Reveal delay={150} className="flex flex-col rounded-lg border border-border bg-surface p-6">
          <div className="flex flex-1 flex-col justify-between divide-y divide-border">
            {techPillars.map((item) => (
              <div key={item.title} className="py-3 first:pt-0 last:pb-0">
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

      {/* Problemas que resolvo */}
      <div className="mt-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Foco em resultado
          </p>
          <h3 className="mb-8 mt-1 font-display text-xl font-bold">Problemas que resolvo</h3>
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
  );
}
