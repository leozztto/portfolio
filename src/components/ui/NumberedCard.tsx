import { Reveal } from "./Reveal";

export function NumberedCard({
  index,
  delay,
  numberClassName = "text-accent/60",
  children,
}: {
  index: number;
  delay: number;
  numberClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal
      delay={delay}
      className="group rounded-lg border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/40"
    >
      <p className={`font-mono text-2xl font-bold transition ${numberClassName}`}>
        {String(index + 1).padStart(2, "0")}
      </p>
      {children}
    </Reveal>
  );
}
