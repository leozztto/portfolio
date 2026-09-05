import { Terminal } from "@/components/sections/Terminal";
import { NeuralNetwork } from "@/components/diagrams/NeuralNetwork";

export function Hero() {
  return (
    <section id="topo" className="relative isolate min-h-[640px] overflow-hidden sm:min-h-[760px]">
      <NeuralNetwork />
      <div className="relative z-0 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20">
        <div>
          <p className="mb-5 font-mono text-xl uppercase tracking-widest text-accent">200 OK</p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Foco em arquitetar o back-end
            <br className="hidden sm:block" /> para sustentar sistemas críticos e de alta
            disponibilidade.
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Engenheiro de software sênior especializado em sistemas financeiros de alto volume
            transacional, sempre com foco em escalabilidade e consistência de dados.
          </p>
        </div>
        <Terminal />
      </div>
    </section>
  );
}
