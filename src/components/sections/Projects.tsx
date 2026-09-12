import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectsList } from "@/components/sections/ProjectsList";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-7xl px-6 py-8">
      <Reveal>
        <SectionHeader method="GET" route="/projetos" title="Projetos" />
      </Reveal>
      <Reveal delay={80}>
        <p className="mb-10 text-base text-justify text-muted">
          Sistemas construídos e mantidos por mim — do design da API REST e de eventos à
          persistência em PostgreSQL, passando por mensageria com Kafka, cache com Redis e deploy
          em containers com Docker e Kubernetes.
        </p>
      </Reveal>
      <Reveal delay={100}>
        <ProjectsList projects={projects} />
      </Reveal>
    </section>
  );
}
