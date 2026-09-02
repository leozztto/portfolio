"use client";

import { useEffect, useState } from "react";
import { palette, diagram } from "@/lib/theme";

type Node = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub: string;
  dot: string;
  highlight?: boolean;
};

const nodes: Record<string, Node> = {
  clients: {
    x: 8,
    y: 273,
    w: 187,
    h: 85,
    title: "Clients",
    sub: "Web / App",
    dot: palette.success,
  },
  auth: {
    x: 600,
    y: 8,
    w: 218,
    h: 78,
    title: "auth-api",
    sub: "JWT · OAuth2",
    dot: palette.muted,
  },
  gateway: {
    x: 300,
    y: 271,
    w: 218,
    h: 88,
    title: "api-gateway",
    sub: "Routing · Rate limit",
    dot: diagram.blue,
    highlight: true,
  },
  clientes: {
    x: 600,
    y: 110,
    w: 234,
    h: 80,
    title: "clientes-service",
    sub: "Customers",
    dot: diagram.blue,
  },
  produtos: {
    x: 600,
    y: 220,
    w: 234,
    h: 80,
    title: "produtos-service",
    sub: "Products",
    dot: diagram.blue,
  },
  vendas: {
    x: 600,
    y: 330,
    w: 234,
    h: 80,
    title: "vendas-service",
    sub: "Sales",
    dot: diagram.blue,
  },
  notificacao: {
    x: 600,
    y: 440,
    w: 234,
    h: 80,
    title: "notificacao-service",
    sub: "Notifications",
    dot: diagram.blue,
  },
  redis: {
    x: 900,
    y: 150,
    w: 203,
    h: 85,
    title: "Redis Cache",
    sub: "compartilhado",
    dot: palette.accent,
  },
  kafka: {
    x: 900,
    y: 350,
    w: 203,
    h: 85,
    title: "Kafka Broker",
    sub: "publica evento",
    dot: diagram.purple,
  },
};

function edge(a: Node, b: Node) {
  const x1 = a.x + a.w;
  const y1 = a.y + a.h / 2;
  const x2 = b.x;
  const y2 = b.y + b.h / 2;
  const mx = (x1 + x2) / 2;
  return {
    d: `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`,
    color: undefined as string | undefined,
  };
}

const connections: {
  from: keyof typeof nodes;
  to: keyof typeof nodes;
  color: string;
}[] = [
  { from: "clients", to: "gateway", color: diagram.blue },
  { from: "gateway", to: "auth", color: palette.muted },
  { from: "gateway", to: "clientes", color: diagram.blue },
  { from: "gateway", to: "produtos", color: diagram.blue },
  { from: "gateway", to: "vendas", color: diagram.blue },
  { from: "gateway", to: "notificacao", color: diagram.blue },
  { from: "clientes", to: "redis", color: palette.accent },
  { from: "produtos", to: "redis", color: palette.accent },
  { from: "vendas", to: "kafka", color: diagram.purple },
];

function Box({ n }: { n: Node }) {
  return (
    <g>
      {n.highlight && (
        <rect
          x={n.x - 5}
          y={n.y - 5}
          width={n.w + 10}
          height={n.h + 10}
          rx={16}
          fill="none"
          stroke={diagram.blue}
          strokeOpacity="0.25"
          strokeWidth="6"
        />
      )}
      <rect
        x={n.x}
        y={n.y}
        width={n.w}
        height={n.h}
        rx={14}
        fill={n.highlight ? palette.surface : palette.surfaceAlt}
        stroke={n.highlight ? diagram.blue : palette.border}
        strokeWidth={n.highlight ? 2.4 : 1.5}
      />
      <circle cx={n.x + 20} cy={n.y + 25} r="4.5" fill={n.dot} />
      <text
        x={n.x + 34}
        y={n.y + 31}
        fontFamily="monospace"
        fontSize="16.5"
        fill={palette.text}
        fontWeight="600"
      >
        {n.title}
      </text>
      <text
        x={n.x + 20}
        y={n.y + n.h - 16}
        fontFamily="monospace"
        fontSize="13"
        fill={palette.muted}
      >
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
      <svg viewBox="0 0 1120 550" className="h-auto w-full min-w-[760px] max-w-[1040px]">
        {connections.map((c, i) => {
          const { d } = edge(nodes[c.from], nodes[c.to]);
          return (
            <path key={i} d={d} fill="none" stroke={c.color} strokeWidth="2" strokeOpacity="0.55" />
          );
        })}

        {connections.map((c, i) => {
          const { d } = edge(nodes[c.from], nodes[c.to]);
          return (
            <circle key={`dot-${i}`} r="5" fill={c.color}>
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
