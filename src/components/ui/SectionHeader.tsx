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
    <div className="mb-8 flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-baseline sm:gap-3">
      <div className="flex items-baseline gap-3">
        <MethodTag method={method} />
        <span className="font-mono text-xs text-muted">{route}</span>
      </div>
      <h2 className="font-display text-2xl font-bold sm:ml-auto">{title}</h2>
    </div>
  );
}
