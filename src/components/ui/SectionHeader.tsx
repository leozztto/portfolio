import { MethodTag } from "./MethodTag";

export function SectionHeader({
  method,
  route,
  title,
}: {
  method: string;
  route: string;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-baseline gap-3 border-b border-border pb-4">
      <MethodTag method={method} />
      <span className="font-mono text-xs text-muted">{route}</span>
      <h2 className="ml-auto font-display text-2xl font-bold">{title}</h2>
    </div>
  );
}
