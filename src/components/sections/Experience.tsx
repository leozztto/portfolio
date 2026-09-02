import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { changelog } from "@/content/changelog";

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-7xl px-6 py-8">
      <Reveal>
        <SectionHeader method="GET" route="/changelog" title="Experiência" />
      </Reveal>
      <Reveal delay={100}>
        <ExperienceTimeline entries={changelog} />
      </Reveal>
    </section>
  );
}
