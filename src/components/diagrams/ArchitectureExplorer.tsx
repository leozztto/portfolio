"use client";

import { useState, type ComponentType } from "react";
import { palette, diagram } from "@/lib/theme";
import { DistributedSystemDiagram } from "./DistributedSystemDiagram";
import { KafkaEventHubDiagram } from "./KafkaEventHubDiagram";
import { HexagonalArchitectureDiagram } from "./HexagonalArchitectureDiagram";
import { OutboxPatternDiagram } from "./OutboxPatternDiagram";

type TabId = "distributed" | "kafka" | "hexagonal" | "outbox";

const tabs: {
  id: TabId;
  label: string;
  dot: string;
  Diagram: ComponentType;
}[] = [
  {
    id: "distributed",
    label: "Sistema Distribuído",
    dot: diagram.blue,
    Diagram: DistributedSystemDiagram,
  },
  { id: "kafka", label: "Event Driven", dot: diagram.purple, Diagram: KafkaEventHubDiagram },
  {
    id: "hexagonal",
    label: "Hexagonal",
    dot: palette.success,
    Diagram: HexagonalArchitectureDiagram,
  },
  { id: "outbox", label: "Outbox", dot: palette.accent, Diagram: OutboxPatternDiagram },
];

export function ArchitectureExplorer() {
  const [tab, setTab] = useState<TabId>("distributed");
  const active = tabs.find((t) => t.id === tab) ?? tabs[0];
  const ActiveDiagram = active.Diagram;

  const tabClass = (isActive: boolean) =>
    `flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs transition ${
      isActive
        ? "border-accent/60 bg-accent/10 text-text"
        : "border-border text-muted hover:border-accent/30 hover:text-text"
    }`;

  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Padrões de arquitetura">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            onClick={() => setTab(t.id)}
            className={tabClass(tab === t.id)}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: t.dot }} />
            {t.label}
          </button>
        ))}
      </div>

      <div
        className="mt-6 flex justify-center"
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
      >
        <ActiveDiagram />
      </div>
    </div>
  );
}
