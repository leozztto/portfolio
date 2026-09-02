"use client";

import { useState } from "react";

type Entry = {
  version: string;
  date: string;
  role: string;
  company: string;
  notes: string[];
};

export default function ExperienceTimeline({ entries }: { entries: Entry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-7 border-l border-border pl-6">
      {entries.map((entry, i) => {
        const isOpen = openIndex === i;
        const hasDetails = entry.notes.length > 0;
        return (
          <div key={entry.version} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent" />

            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-accent">{entry.version}</p>
                <h3 className="mt-0.5 font-display text-lg font-bold">
                  {entry.company} - {entry.role}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted/70">{entry.date}</p>
              </div>

              {hasDetails && (
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="shrink-0 rounded border border-border px-3 py-1.5 font-mono text-[11px] text-muted transition hover:border-accent/50 hover:text-text"
                >
                  {isOpen ? "− ver menos" : "+ ver mais"}
                </button>
              )}
            </div>

            {hasDetails && (
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  isOpen ? "mt-3 max-h-[480px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-1.5 pb-1">
                  {entry.notes.map((note) => (
                    <li key={note} className="text-sm text-muted">
                      <span className="text-accent">—</span> {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
