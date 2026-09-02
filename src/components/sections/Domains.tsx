import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { criticalDomains } from "@/content/domains";

export function Domains() {
  return (
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
  );
}
