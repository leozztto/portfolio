"use client";

import { useState } from "react";
import type { Project } from "@/types/content";
import { MethodTag } from "@/components/ui/MethodTag";
import { Tag } from "@/components/ui/Tag";

export function ProjectsList({ projects }: { projects: Project[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-5">
      {projects.map((p, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={p.name}
            className={`rounded-xl border bg-gradient-to-br from-accent/10 via-surface to-surface p-6 transition ${
              isOpen
                ? "border-accent/60 shadow-xl shadow-black/30"
                : "border-accent/30 shadow-lg shadow-black/20"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full flex-wrap items-center justify-between gap-3 text-left"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <MethodTag method={p.method} />
                  <span className="font-mono text-xs text-muted">{p.route}</span>
                  {p.badge && (
                    <span className="rounded-full border border-accent/50 bg-accent/15 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-accent">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-1 font-display text-lg font-bold">{p.name}</h3>
              </div>

              <span className="shrink-0 rounded-lg border border-accent/30 px-3 py-1.5 font-mono text-[11px] text-muted transition hover:border-accent/50 hover:text-text">
                {isOpen ? "− ver menos" : "+ ver mais"}
              </span>
            </button>

            <p className="mt-3 text-sm text-justify text-muted">{p.description}</p>

            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                isOpen ? "mt-4 max-h-[640px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {p.highlights && p.highlights.length > 0 && (
                <ul className="space-y-1.5 pb-1">
                  {p.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted">
                      <span className="text-accent">—</span> {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-3 rounded border border-border bg-surface-alt p-3 font-mono text-[11px] leading-relaxed text-muted">
                <p className="text-text">→ {p.request}</p>
                <p className="mt-1 text-success">← {p.response}</p>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s} className="px-2 py-0.5 text-[10px]">
                      {s}
                    </Tag>
                  ))}
                </div>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-mono text-xs text-accent underline-offset-4 hover:underline"
                >
                  Ver repositório no GitHub →
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
