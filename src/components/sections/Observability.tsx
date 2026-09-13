"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const PING_COUNT = 6;

type Ping = { ok: boolean; latencyMs: number; bytes: number };

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <p className="font-mono text-lg font-bold text-text">{value}</p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
}

export function Observability() {
  const [pings, setPings] = useState<Ping[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      const results: Ping[] = [];
      for (let i = 0; i < PING_COUNT; i++) {
        const start = performance.now();
        try {
          const res = await fetch("/api/status", { cache: "no-store" });
          const text = await res.text();
          results.push({
            ok: res.ok,
            latencyMs: performance.now() - start,
            bytes: new Blob([text]).size,
          });
        } catch {
          results.push({ ok: false, latencyMs: performance.now() - start, bytes: 0 });
        }
        if (cancelled) return;
        setPings([...results]);
      }
      setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const latencies = pings
    .filter((p) => p.ok)
    .map((p) => p.latencyMs)
    .sort((a, b) => a - b);
  const min = latencies[0] ?? 0;
  const max = latencies[latencies.length - 1] ?? 0;
  const avg = latencies.length ? latencies.reduce((a, b) => a + b, 0) / latencies.length : 0;
  const p95 = latencies.length ? latencies[Math.floor(0.95 * (latencies.length - 1))] : 0;

  return (
    <section id="observabilidade" className="mx-auto max-w-7xl px-6 py-8">
      <Reveal>
        <SectionHeader method="GET" route="/observabilidade" title="Observabilidade" />
      </Reveal>

      <Reveal delay={80}>
        <p className="max-w-2xl text-sm text-muted">
          Sem números fixos: os dados abaixo são medidos agora, no seu navegador, disparando{" "}
          {PING_COUNT} chamadas reais para o endpoint{" "}
          <span className="font-mono text-accent">GET /api/status</span> — o mesmo que alimenta o
          terminal lá em cima.
        </p>
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
        <Reveal
          delay={120}
          className="rounded-xl border border-border bg-surface p-5 font-mono text-xs"
        >
          <div className="mb-3 flex items-center gap-2 text-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
            <span className="ml-2">latency probe — {PING_COUNT} req sequenciais</span>
          </div>
          <div>
            {Array.from({ length: PING_COUNT }).map((_, i) => {
              const ping = pings[i];
              return (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-border/60 py-1.5 last:border-0"
                >
                  <span className="text-muted">GET /api/status #{i + 1}</span>
                  {!ping && <span className="text-muted">aguardando_</span>}
                  {ping && (
                    <span className={ping.ok ? "text-success" : "text-error"}>
                      {ping.ok ? `${ping.latencyMs.toFixed(0)}ms · ${ping.bytes}B` : "falhou"}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={160} className="grid grid-cols-2 gap-3">
          <Stat label="mín" value={done ? `${min.toFixed(0)}ms` : "—"} />
          <Stat label="média" value={done ? `${avg.toFixed(0)}ms` : "—"} />
          <Stat label="p95" value={done ? `${p95.toFixed(0)}ms` : "—"} />
          <Stat label="máx" value={done ? `${max.toFixed(0)}ms` : "—"} />
        </Reveal>
      </div>
    </section>
  );
}
