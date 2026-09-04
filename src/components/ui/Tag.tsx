export function Tag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`rounded-full border border-border font-mono text-muted ${className}`}>
      {children}
    </span>
  );
}
