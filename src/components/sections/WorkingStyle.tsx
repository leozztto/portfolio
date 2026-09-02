import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { workingStyle } from "@/content/working-style";
import { problemsSolved } from "@/content/problems";

export function WorkingStyle() {
  return (
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
  );
}
