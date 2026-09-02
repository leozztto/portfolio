import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArchitectureExplorer } from "@/components/diagrams/ArchitectureExplorer";

export function Architecture() {
  return (
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
  );
}
