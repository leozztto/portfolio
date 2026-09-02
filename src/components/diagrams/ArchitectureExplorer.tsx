"use client";

import { useState } from "react";
import { DistributedSystemDiagram } from "./DistributedSystemDiagram";
import { KafkaEventHubDiagram } from "./KafkaEventHubDiagram";

export function ArchitectureExplorer() {
  const [tab, setTab] = useState<"distributed" | "kafka">("distributed");

  const tabClass = (isActive: boolean) =>
    `flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs transition ${
      isActive
        ? "border-accent/60 bg-accent/10 text-text"
        : "border-border text-muted hover:border-accent/30 hover:text-text"
    }`;

  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setTab("distributed")} className={tabClass(tab === "distributed")}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#6EC1FF]" />
          Sistema Distribuído
        </button>
        <button onClick={() => setTab("kafka")} className={tabClass(tab === "kafka")}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
          Event Driven
        </button>
      </div>

      <div className="mt-6 flex justify-center">
        {tab === "distributed" ? <DistributedSystemDiagram /> : <KafkaEventHubDiagram />}
      </div>
    </div>
  );
}
