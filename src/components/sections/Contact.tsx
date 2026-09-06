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
        <div className="mt-2 rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 via-surface to-surface p-8 shadow-lg shadow-black/20 sm:p-10">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-success">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
            Aberto a oportunidades
          </p>
          <p className="mt-3 max-w-xl font-display text-2xl font-bold leading-tight text-text sm:text-3xl">
            100% remotas como Senior Software Engineer, Senior Backend Engineer
          </p>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Preferência por CLT. Avalio propostas PJ.
          </p>

          <div className="mt-8 flex flex-wrap items-stretch gap-4">
            {contactLinks.map((link, i) => (
              <Reveal key={link.href} delay={180 + i * 100}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={
                    link.primary
                      ? "inline-flex h-full items-center gap-2 rounded-lg border border-accent bg-accent px-6 py-3.5 font-mono text-sm font-bold text-bg shadow-md shadow-accent/20 transition hover:bg-accent/90 hover:shadow-accent/30"
                      : "inline-flex h-full items-center gap-2 rounded-lg border border-border px-5 py-3 font-mono text-sm text-text transition hover:-translate-y-0.5 hover:border-accent/50"
                  }
                >
                  {link.label}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
