"use client";

import { useEffect, useState } from "react";

type Node = { x: number; y: number; w: number; h: number; title: string; sub: string; dot: string; highlight?: boolean };

const nodes: Record<string, Node> = {
  clients: { x: 20, y: 195, w: 120, h: 54, title: "Clients", sub: "Web / App", dot: "#3ECF8E" },
  auth: { x: 490, y: 25, w: 140, h: 50, title: "auth-api", sub: "JWT · OAuth2", dot: "#7C8494" },
  gateway: { x: 250, y: 195, w: 140, h: 56, title: "api-gateway", sub: "Routing · Rate limit", dot: "#6EC1FF", highlight: true },
  clientes: { x: 490, y: 100, w: 150, h: 52, title: "clientes-service", sub: "Customers", dot: "#6EC1FF" },
  produtos: { x: 490, y: 170, w: 150, h: 52, title: "produtos-service", sub: "Products", dot: "#6EC1FF" },
  vendas: { x: 490, y: 240, w: 150, h: 52, title: "vendas-service", sub: "Sales", dot: "#6EC1FF" },
  notificacao: { x: 490, y: 310, w: 150, h: 52, title: "notificacao-service", sub: "Notifications", dot: "#6EC1FF" },
  redis: { x: 700, y: 130, w: 130, h: 54, title: "Redis Cache", sub: "compartilhado", dot: "#E8A33D" },
  kafka: { x: 700, y: 235, w: 130, h: 54, title: "Kafka Broker", sub: "publica evento", dot: "#A78BFA" },
};

function edge(a: Node, b: Node) {
  const x1 = a.x + a.w;
  const y1 = a.y + a.h / 2;
  const x2 = b.x;
  const y2 = b.y + b.h / 2;
  const mx = (x1 + x2) / 2;
  return { d: `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`, color: undefined as string | undefined };
}

const connections: { from: keyof typeof nodes; to: keyof typeof nodes; color: string }[] = [
  { from: "clients", to: "gateway", color: "#6EC1FF" },
  { from: "gateway", to: "auth", color: "#7C8494" },
  { from: "gateway", to: "clientes", color: "#6EC1FF" },
  { from: "gateway", to: "produtos", color: "#6EC1FF" },
  { from: "gateway", to: "vendas", color: "#6EC1FF" },
  { from: "gateway", to: "notificacao", color: "#6EC1FF" },
  { from: "clientes", to: "redis", color: "#E8A33D" },
  { from: "produtos", to: "redis", color: "#E8A33D" },
  { from: "vendas", to: "kafka", color: "#A78BFA" },
];

function Box({ n }: { n: Node }) {
  return (
    <g>
      {n.highlight && (
        <rect
          x={n.x - 3}
          y={n.y - 3}
          width={n.w + 6}
          height={n.h + 6}
          rx={11}
          fill="none"
          stroke="#6EC1FF"
          strokeOpacity="0.25"
          strokeWidth="4"
        />
      )}
      <rect
        x={n.x}
        y={n.y}
        width={n.w}
        height={n.h}
        rx={9}
        fill={n.highlight ? "#12161F" : "#171C27"}
        stroke={n.highlight ? "#6EC1FF" : "#232935"}
        strokeWidth={n.highlight ? 1.6 : 1}
      />
      <circle cx={n.x + 14} cy={n.y + 17} r="3" fill={n.dot} />
      <text x={n.x + 23} y={n.y + 21} fontFamily="monospace" fontSize="11" fill="#E4E7EC" fontWeight="600">
        {n.title}
      </text>
      <text x={n.x + 14} y={n.y + n.h - 11} fontFamily="monospace" fontSize="9" fill="#7C8494">
        {n.sub}
      </text>
    </g>
  );
}

export function DistributedSystemDiagram() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div className="flex justify-center overflow-x-auto py-2">
      <svg viewBox="0 0 860 390" className="h-auto w-full min-w-[680px] max-w-[820px]">
        {connections.map((c, i) => {
          const { d } = edge(nodes[c.from], nodes[c.to]);
          return (
            <path key={i} d={d} fill="none" stroke={c.color} strokeWidth="1.4" strokeOpacity="0.55" />
          );
        })}

        {connections.map((c, i) => {
          const { d } = edge(nodes[c.from], nodes[c.to]);
          return (
            <circle key={`dot-${i}`} r="3.5" fill={c.color}>
              {animate && (
                <animateMotion
                  dur={`${2.2 + (i % 3) * 0.4}s`}
                  begin={`${i * 0.25}s`}
                  repeatCount="indefinite"
                  path={d}
                />
              )}
            </circle>
          );
        })}

        {Object.values(nodes).map((n) => (
          <Box key={n.title} n={n} />
        ))}
      </svg>
    </div>
  );
}
