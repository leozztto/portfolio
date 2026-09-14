"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MethodTag } from "@/components/ui/MethodTag";
import { observabilityEntries } from "@/content/observability";
import type { ObservabilityEntry } from "@/types/content";

const ROUTES: { method: string; path: string }[] = [
  { method: "GET", path: "/" },
  { method: "GET", path: "/api/status" },
  { method: "GET", path: "/sitemap.xml" },
  { method: "GET", path: "/robots.txt" },
];
type Ping = { path: string; ok: boolean; latencyMs: number; bytes: number; httpStatus?: number };

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <p className="font-mono text-lg font-bold text-text">{value}</p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
}

function EntryHeader({ entry }: { entry: ObservabilityEntry }) {
  return (
    <div className="mb-3 flex flex-wrap items-baseline gap-2">
      <MethodTag method={entry.method} />
      <span className="font-mono text-xs text-muted">{entry.route}</span>
      <h3 className="font-display text-base font-bold">{entry.projectName}</h3>
    </div>
  );
}

function LivePanel({ entry }: { entry: ObservabilityEntry }) {
  const [pings, setPings] = useState<Ping[]>([]);
  const [reportedStatus, setReportedStatus] = useState<string | null>(null);
  const [checkedAt, setCheckedAt] = useState<Date | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      const results: Ping[] = [];
      for (const route of ROUTES) {
        const start = performance.now();
        try {
          const res = await fetch(route.path, { cache: "no-store" });
          const text = await res.text();
          results.push({
            path: route.path,
            ok: res.ok,
            latencyMs: performance.now() - start,
            bytes: new Blob([text]).size,
            httpStatus: res.status,
          });
          if (res.ok && route.path === "/api/status") {
            try {
              const body = JSON.parse(text) as { status?: string };
              if (!cancelled && body.status) setReportedStatus(body.status);
            } catch {
              // corpo não-JSON não invalida a medição de latência
            }
          }
        } catch {
          results.push({
            path: route.path,
            ok: false,
            latencyMs: performance.now() - start,
            bytes: 0,
          });
        }
        if (cancelled) return;
        setPings([...results]);
        setCheckedAt(new Date());
      }
      setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const successful = pings.filter((p) => p.ok);
  const latencies = successful.map((p) => p.latencyMs).sort((a, b) => a - b);
  const min = latencies[0] ?? 0;
  const max = latencies[latencies.length - 1] ?? 0;
  const avg = latencies.length ? latencies.reduce((a, b) => a + b, 0) / latencies.length : 0;
  const p95 = latencies.length ? latencies[Math.floor(0.95 * (latencies.length - 1))] : 0;
  const jitter = max - min;
  const successRate = pings.length ? Math.round((successful.length / pings.length) * 100) : 0;

  return (
    <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 via-surface to-surface p-5">
      <EntryHeader entry={entry} />
      <p className="mb-4 text-justify text-sm text-muted">{entry.note}</p>

      {reportedStatus && (
        <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-[11px]">
          <span className="flex items-center gap-1.5 rounded-full border border-success/40 bg-success/10 px-2.5 py-1 text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            status reportado: {reportedStatus}
          </span>
          {checkedAt && (
            <span className="text-muted">
              última checagem: {checkedAt.toLocaleTimeString("pt-BR")}
            </span>
          )}
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-[1fr_320px] lg:items-start">
        <div className="rounded-xl border border-border bg-surface p-4 font-mono text-xs">
          <div className="mb-3 flex items-center gap-2 text-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
            <span className="ml-2">latency probe — 1 chamada por rota real</span>
          </div>
          <div>
            {ROUTES.map((route, i) => {
              const ping = pings[i];
              return (
                <div
                  key={route.path}
                  className="flex items-center justify-between border-b border-border/60 py-1.5 last:border-0"
                >
                  <span className="flex items-center gap-1.5 text-muted">
                    <MethodTag method={route.method} />
                    {route.path}
                  </span>
                  {!ping && <span className="text-muted">aguardando_</span>}
                  {ping && (
                    <span className={ping.ok ? "text-success" : "text-error"}>
                      {ping.ok
                        ? `${ping.httpStatus} · ${ping.latencyMs.toFixed(0)}ms · ${ping.bytes}B`
                        : "falhou"}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Stat label="mín" value={done ? `${min.toFixed(0)}ms` : "—"} />
          <Stat label="média" value={done ? `${avg.toFixed(0)}ms` : "—"} />
          <Stat label="p95" value={done ? `${p95.toFixed(0)}ms` : "—"} />
          <Stat label="máx" value={done ? `${max.toFixed(0)}ms` : "—"} />
          <Stat label="jitter" value={done ? `${jitter.toFixed(0)}ms` : "—"} />
          <Stat label="sucesso" value={done ? `${successRate}%` : "—"} />
        </div>
      </div>
    </div>
  );
}

function DeclaredPanel({ entry }: { entry: ObservabilityEntry }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <EntryHeader entry={entry} />
      <p className="mb-4 text-justify text-sm text-muted">{entry.note}</p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {entry.metrics?.map((m) => (
          <div key={m.label} className="rounded-xl border border-border bg-surface-alt p-4">
            <p className="font-mono text-sm font-bold text-text">{m.value}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Observability() {
  return (
    <section id="observabilidade" className="mx-auto max-w-7xl px-6 py-8">
      <Reveal>
        <SectionHeader method="GET" route="/observabilidade" title="Observabilidade" />
      </Reveal>

      <Reveal delay={80}>
        <p className="text-sm text-muted">
          Métricas separadas por projeto: cada uma das três aplicações abaixo tem uma abordagem
          própria de observabilidade, moldada pelo que ela realmente precisa monitorar em produção.
        </p>
      </Reveal>

      <div className="mt-6 space-y-5">
        {observabilityEntries.map((entry) =>
          entry.mode === "live" ? (
            <Reveal key={entry.projectName} delay={120}>
              <LivePanel entry={entry} />
            </Reveal>
          ) : (
            <Reveal key={entry.projectName} delay={120}>
              <DeclaredPanel entry={entry} />
            </Reveal>
          ),
        )}
      </div>
    </section>
  );
}
