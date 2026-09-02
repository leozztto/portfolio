import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MethodTag } from "@/components/ui/MethodTag";
import { projects } from "@/content/projects";

export function Projects() {
  return (
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
  );
}
