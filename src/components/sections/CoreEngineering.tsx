import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillRadar } from "@/components/diagrams/SkillRadar";
import { radarSkills, coreEngineering } from "@/content/skills";

export function CoreEngineering() {
  return (
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
  );
}
