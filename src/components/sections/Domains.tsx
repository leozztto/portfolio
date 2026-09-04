import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { NumberedCard } from "@/components/ui/NumberedCard";
import { Tag } from "@/components/ui/Tag";
import { criticalDomains } from "@/content/domains";

export function Domains() {
  return (
    <section id="dominios" className="mx-auto max-w-7xl px-6 py-8">
      <Reveal>
        <SectionHeader method="GET" route="/dominios" title="Domínios de Experiência" />
      </Reveal>
      <Reveal delay={80}>
        <p className="mb-10 text-base text-muted">
          Confiabilidade onde a tolerância a falhas é mínima — experiência em setores onde
          disponibilidade e integridade de dados são requisitos de negócio, não apenas requisitos
          técnicos.
        </p>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-3">
        {criticalDomains.map((domain, i) => (
          <NumberedCard key={domain.sector} index={i} delay={i * 100}>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              {domain.short}
            </p>
            <h3 className="mt-1 font-display text-base font-bold">{domain.sector}</h3>
            <p className="mt-1 font-mono text-[11px] text-muted">{domain.companies}</p>
            <p className="mt-3 text-sm text-muted">{domain.detail}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {domain.highlights.map((h) => (
                <Tag key={h} className="px-2.5 py-1 text-[10px]">
                  {h}
                </Tag>
              ))}
            </div>
          </NumberedCard>
        ))}
      </div>
    </section>
  );
}
