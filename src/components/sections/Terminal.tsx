"use client";

import { useEffect, useState } from "react";

type Status = {
  status: string;
  name: string;
  role: string;
  location: string;
  stack: string[];
  experience_time: string;
  available_for: string;
  contact: string;
};

export function Terminal() {
  const [data, setData] = useState<Status | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/status")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  return (
    <div className="w-full max-w-2xl rounded-lg border border-border bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-error/70" />
        <span className="h-3 w-3 rounded-full bg-accent/70" />
        <span className="h-3 w-3 rounded-full bg-success/70" />
        <span className="ml-3 font-mono text-xs text-muted">
          zsh — GET /api/status
        </span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">
        <p className="text-muted">
          <span className="text-success">➜</span> ~ curl https://leandromf.dev/api/status
        </p>
        {!loaded && (
          <p className="mt-2 text-muted">
            aguardando resposta<span className="blink">_</span>
          </p>
        )}
        {loaded && data && (
          <pre className="mt-2 whitespace-pre-wrap text-text">
{`{
  "status": "`}<span className="text-success">{data.status}</span>{`",
  "name": "${data.name}",
  "role": "${data.role}",
  "location": "${data.location}",
  "stack": [${data.stack.map((s) => `"${s}"`).join(", ")}],
  "experience_time": "${data.experience_time}",
  "available_for": "${data.available_for}"
}`}
          </pre>
        )}
        {loaded && !data && (
          <p className="mt-2 text-error">erro: não foi possível conectar ao endpoint.</p>
        )}
      </div>
    </div>
  );
}
