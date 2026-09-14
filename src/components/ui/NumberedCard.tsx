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
    <Reveal delay={delay} className="h-full">
      <div className="group flex h-full flex-col rounded-xl border border-border bg-gradient-to-br from-surface/80 to-surface/35 p-7 shadow-lg shadow-black/20 transition !duration-200 hover:border-accent/50 hover:shadow-xl hover:shadow-black/30">
        <p className={`font-mono text-2xl font-bold transition ${numberClassName}`}>
          {String(index + 1).padStart(2, "0")}
        </p>
        {children}
      </div>
    </Reveal>
  );
}
