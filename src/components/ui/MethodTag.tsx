export function MethodTag({ method }: { method: string }) {
  const color = method === "GET" ? "text-success" : "text-accent";
  return <span className={`font-mono text-xs font-bold ${color}`}>{method}</span>;
}
