"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  // vx/vy: drift ambiente, constante — mantém a rede sempre em movimento
  vx: number;
  vy: number;
  // kx/ky: impulso do clique — some rapidamente, é o "susto" de afastamento
  kx: number;
  ky: number;
  r: number;
  label?: string;
};

// Nós "hub" recebem rótulo — troque pelas suas tecnologias principais.
const HUB_LABELS = ["Java", "Spring Boot", "Kafka", "Kubernetes", "AWS", "PostgreSQL"];

export function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let pulses: { x: number; y: number; born: number }[] = [];
    let raf = 0;

    function initNodes() {
      const count = Math.max(70, Math.min(170, Math.floor((width * height) / 4200)));
      nodes = Array.from({ length: count }).map((_, i) => {
        const isHub = i < HUB_LABELS.length;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          kx: 0,
          ky: 0,
          r: isHub ? 3 : 1.4 + Math.random() * 1.3,
          label: isHub ? HUB_LABELS[i] : undefined,
        };
      });
    }

    function resize() {
      width = container!.clientWidth;
      height = container!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      if (!prefersReduced) {
        const maxKick = 3.5;
        for (const n of nodes) {
          // impulso do clique decai rápido (efeito "susto")
          n.kx *= 0.93;
          n.ky *= 0.93;
          const kickSpeed = Math.hypot(n.kx, n.ky);
          if (kickSpeed > maxKick) {
            n.kx = (n.kx / kickSpeed) * maxKick;
            n.ky = (n.ky / kickSpeed) * maxKick;
          }

          n.x += n.vx + n.kx;
          n.y += n.vy + n.ky;

          if (n.x < 0 || n.x > width) {
            n.vx *= -1;
            n.kx *= -1;
          }
          if (n.y < 0 || n.y > height) {
            n.vy *= -1;
            n.ky *= -1;
          }
          n.x = Math.max(0, Math.min(width, n.x));
          n.y = Math.max(0, Math.min(height, n.y));
        }
      }

      // conexões
      const maxDist = Math.min(190, width / 4);
      const connected = new Array(nodes.length).fill(false);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            connected[i] = true;
            connected[j] = true;
            const opacity = (1 - dist / maxDist) * 0.45;
            ctx!.strokeStyle = `rgba(110, 193, 255, ${opacity})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // resgate: nenhum ponto fica solto — quem não conectou dentro do
      // alcance normal se liga ao vizinho mais próximo, com uma linha mais tênue.
      for (let i = 0; i < nodes.length; i++) {
        if (connected[i]) continue;
        const a = nodes[i];
        let closest = -1;
        let closestDist = Infinity;
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < closestDist) {
            closestDist = dist;
            closest = j;
          }
        }
        if (closest !== -1) {
          const b = nodes[closest];
          ctx!.strokeStyle = "rgba(110, 193, 255, 0.22)";
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.stroke();
        }
      }

      // pulsos de clique
      const now = performance.now();
      pulses = pulses.filter((p) => now - p.born < 900);
      for (const p of pulses) {
        const t = (now - p.born) / 900;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 6 + t * 90, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(232, 163, 61, ${1 - t})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
      }

      // nós
      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.shadowColor = n.label ? "#6EC1FF" : "rgba(110,193,255,0.6)";
        ctx!.shadowBlur = n.label ? 10 : 4;
        ctx!.fillStyle = "#FFFFFF";
        ctx!.fill();
        ctx!.shadowBlur = 0;

        if (n.label) {
          ctx!.font = "11px var(--font-mono), monospace";
          ctx!.fillStyle = "rgba(228, 231, 236, 0.55)";
          ctx!.fillText(n.label, n.x + 8, n.y - 8);
        }
      }

      raf = requestAnimationFrame(draw);
    }

    function handleClick(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      pulses.push({ x, y, born: performance.now() });

      // repulsão: o clique é o epicentro — qualquer ponto próximo
      // ganha um impulso para se afastar dele, não precisa acertar um nó.
      const radius = Math.max(width, height) * 0.75;
      for (const n of nodes) {
        const d = Math.hypot(n.x - x, n.y - y) || 0.01;
        if (d < radius) {
          const force = (1 - d / radius) * 4.2;
          n.kx += ((n.x - x) / d) * force;
          n.ky += ((n.y - y) / d) * force;
        }
      }
    }

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("click", handleClick);
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("click", handleClick);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-pointer"
        aria-hidden="true"
      />
    </div>
  );
}
