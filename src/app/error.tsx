"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-grid flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-error">500 Internal Error</p>
      <h1 className="font-display text-3xl font-bold">Algo quebrou</h1>
      <p className="max-w-md text-sm text-muted">
        Ocorreu um erro inesperado ao renderizar esta página.
      </p>
      <button
        onClick={() => reset()}
        className="mt-2 inline-flex items-center gap-2 rounded border border-accent bg-accent/10 px-4 py-2.5 font-mono text-sm text-accent transition hover:bg-accent/20"
      >
        tentar novamente
      </button>
    </main>
  );
}
