import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contactLinks } from "@/content/contact";

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-10">
      <Reveal>
        <SectionHeader method="POST" route="/contato" title="Contato" />
      </Reveal>

      <Reveal delay={100}>
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          Aberto a oportunidades
        </p>
        <p className="mt-2 max-w-xl font-display text-xl text-text">
          100% remotas como Senior Software Engineer, Senior Backend Engineer
        </p>
        <p className="mt-2 max-w-xl text-xs text-muted">
          Preferência por CLT. Avalio propostas PJ.
        </p>
      </Reveal>

      <div className="mt-8 flex flex-wrap items-stretch gap-4">
        {contactLinks.map((link, i) => (
          <Reveal key={link.href} delay={180 + i * 100}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={
                link.primary
                  ? "inline-flex h-full items-center gap-2 rounded border border-accent bg-accent/10 px-4 py-2.5 font-mono text-sm text-accent transition hover:bg-accent/20"
                  : "inline-flex h-full items-center gap-2 rounded border border-border px-4 py-2.5 font-mono text-sm text-text transition hover:border-accent/50"
              }
            >
              {link.label}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
