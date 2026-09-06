import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { ArchitectureExplorer } from "@/components/diagrams/ArchitectureExplorer";

export function Architecture() {
  return (
    <section id="arquitetura" className="mx-auto max-w-7xl px-6 py-8">
      <Reveal>
        <SectionHeader method="GET" route="/arquitetura" title="Arquitetura" />
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-[300px_1fr] lg:items-start">
        <Reveal delay={80}>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Como penso arquitetura
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold leading-tight">
            Simples de explicar,
            <br /> pronto pra <span className="text-accent">produção</span>
          </h3>
          <p className="mt-4 text-sm text-justify text-muted">
            Os diagramas ao lado resumem quatro padrões que uso bastante no dia a dia: serviços por
            trás de um gateway com cache distribuído, um fluxo orientado a eventos passando por um
            broker, um serviço isolado em camadas hexagonais e o transactional outbox garantindo
            entrega consistente. Alterne entre as abas para ver cada um.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "API Gateway",
              "Mensageria",
              "Cache distribuído",
              "Hexagonal",
              "Outbox Pattern",
              "Resiliência",
            ].map((tag) => (
              <Tag key={tag} className="px-3 py-1 text-[11px]">
                {tag}
              </Tag>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ArchitectureExplorer />
        </Reveal>
      </div>
    </section>
  );
}
