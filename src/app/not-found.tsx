import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-grid flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-accent">404 Not Found</p>
      <h1 className="font-display text-3xl font-bold">Essa rota não existe</h1>
      <p className="max-w-md text-sm text-muted">
        O recurso que você tentou acessar não foi encontrado. Volte para a raiz.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 rounded border border-accent bg-accent/10 px-4 py-2.5 font-mono text-sm text-accent transition hover:bg-accent/20"
      >
        ← GET /
      </Link>
    </main>
  );
}
