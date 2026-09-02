import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stack } from "@/content/stack";
import { aboutStats, experienceAreas, education, studyingNow } from "@/content/about";

export function About() {
  return (
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
              Atuo com back-end há oito anos, boa parte desse tempo em sistemas críticos, que exigem
              alta resiliência: pagamentos, mensageria financeira e plataformas de alto volume
              transacional. Tenho grande preocupação em decisões de arquitetura que visam garantir a
              estabilidade do sistema sob carga real.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-4 max-w-2xl text-muted">
              No dia a dia isso se traduz em tecnologias como Java e Kotlin com Spring Boot, Kafka
              para mensageria e aplicações Event-Driven e deploys em Kubernetes sobre plataformas
              como AWS e GCP. Escalabilidade e consistência de dados guiam praticamente toda decisão
              técnica que tomo.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-4 max-w-2xl text-muted">
              Agora estou expandindo esse repertório para Inteligência Artificial, numa
              pós-graduação focada em Java aplicado a agentes de IA — a ideia é levar essa camada
              para os mesmos sistemas críticos onde já atuo e acelerar o desenvolvimento melhorando
              a visibilidade arquitetural.
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
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">Stack</p>
              <div className="flex flex-wrap gap-2">
                {stack
                  .flatMap((g) => g.items)
                  .map((item) => (
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
  );
}
