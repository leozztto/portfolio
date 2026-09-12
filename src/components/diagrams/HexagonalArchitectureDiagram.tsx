"use client";

import { useEffect, useState } from "react";
import { palette, diagram } from "@/lib/theme";

/**
 * Visão "zoom-in" de um único serviço: núcleo de domínio isolado por uma
 * camada de aplicação (ports), com adapters de entrada (driving) à esquerda
 * e de saída (driven) à direita. Todas as setas apontam para dentro — o
 * domínio não conhece HTTP, banco nem broker.
 */

const CX = 560;
const CY = 285;

// hexágono flat-top: distância do centro até o vértice = r
function hexPoints(r: number) {
  const dy = r * 0.866;
  return [
    [CX - r, CY],
    [CX - r / 2, CY - dy],
    [CX + r / 2, CY - dy],
    [CX + r, CY],
    [CX + r / 2, CY + dy],
    [CX - r / 2, CY + dy],
  ]
    .map((p) => p.join(","))
    .join(" ");
}

type Adapter = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub: string;
  dot: string;
  port: [number, number];
};

const ADAPTER_W = 244;
const ADAPTER_H = 96;

const inbound: Adapter[] = [
  {
    x: 40,
    y: 150,
    w: ADAPTER_W,
    h: ADAPTER_H,
    title: "REST Controller",
    sub: "HTTP · DTO",
    dot: diagram.blue,
    port: [428, 210],
  },
  {
    x: 40,
    y: 320,
    w: ADAPTER_W,
    h: ADAPTER_H,
    title: "Kafka Consumer",
    sub: "eventos de entrada",
    dot: diagram.blue,
    port: [428, 360],
  },
];

const outbound: Adapter[] = [
  {
    x: 836,
    y: 118,
    w: ADAPTER_W,
    h: ADAPTER_H,
    title: "JPA Repository",
    sub: "Postgres",
    dot: palette.accent,
    port: [692, 205],
  },
  {
    x: 836,
    y: 236,
    w: ADAPTER_W,
    h: ADAPTER_H,
    title: "Kafka Producer",
    sub: "Outbox → broker",
    dot: palette.accent,
    port: [740, 285],
  },
  {
    x: 836,
    y: 354,
    w: ADAPTER_W,
    h: ADAPTER_H,
    title: "Redis Cache",
    sub: "cache-aside",
    dot: palette.accent,
    port: [692, 365],
  },
];

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
}

function Box({ a }: { a: Adapter }) {
  return (
    <g>
      <rect
        x={a.x}
        y={a.y}
        width={a.w}
        height={a.h}
        rx={14}
        fill={palette.surfaceAlt}
        stroke={palette.border}
        strokeWidth={1.5}
      />
      <circle cx={a.x + 20} cy={a.y + 26} r="4.5" fill={a.dot} />
      <text
        x={a.x + 34}
        y={a.y + 32}
        fontFamily="monospace"
        fontSize="16.5"
        fill={palette.text}
        fontWeight="600"
      >
        {a.title}
      </text>
      <text
        x={a.x + 20}
        y={a.y + a.h - 18}
        fontFamily="monospace"
        fontSize="13"
        fill={palette.muted}
      >
        {a.sub}
      </text>
    </g>
  );
}

export function HexagonalArchitectureDiagram() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div className="flex justify-center overflow-x-auto py-2">
      <svg
        viewBox="0 0 1120 560"
        className="h-auto w-full max-w-[1040px] md:min-w-[760px]"
        role="img"
        aria-labelledby="hexagonal-architecture-diagram-title"
      >
        <title id="hexagonal-architecture-diagram-title">
          Diagrama de arquitetura hexagonal (ports and adapters) de um serviço: adapters de entrada
          (REST Controller, Kafka Consumer) chamam a camada de aplicação, que envolve o núcleo de
          domínio; o domínio usa ports implementadas por adapters de saída (JPA Repository, Kafka
          Producer, Redis Cache). Todas as dependências apontam para dentro.
        </title>

        {/* rótulos das colunas */}
        <text
          x={162}
          y={70}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="12.5"
          fill={diagram.blue}
        >
          DRIVING · INBOUND
        </text>
        <text
          x={958}
          y={70}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="12.5"
          fill={palette.accent}
        >
          DRIVEN · OUTBOUND
        </text>

        {/* conexões adapter -> port */}
        {[...inbound, ...outbound].map((a, i) => {
          const inboundSide = a.port[0] < CX;
          const ax = inboundSide ? a.x + a.w : a.x;
          const ay = a.y + a.h / 2;
          // sentido do traço: entrada = adapter → port; saída = port → adapter
          const d = inboundSide
            ? curve(ax, ay, a.port[0], a.port[1])
            : curve(a.port[0], a.port[1], ax, ay);
          return (
            <g key={`edge-${i}`}>
              <path d={d} fill="none" stroke={a.dot} strokeWidth="2" strokeOpacity="0.5" />
              <circle cx={a.port[0]} cy={a.port[1]} r="5" fill={a.dot} />
              <circle r="4.5" fill={a.dot}>
                {animate && (
                  <animateMotion
                    dur={`${2 + (i % 3) * 0.4}s`}
                    begin={`${i * 0.3}s`}
                    repeatCount="indefinite"
                    path={d}
                  />
                )}
              </circle>
            </g>
          );
        })}

        {/* hexágono externo: aplicação */}
        <polygon
          points={hexPoints(182)}
          fill={palette.surface}
          stroke={palette.border}
          strokeWidth={1.6}
        />
        {/* hexágono interno: domínio */}
        <polygon
          points={hexPoints(104)}
          fill={palette.surfaceAlt}
          stroke={diagram.blue}
          strokeWidth={1.8}
          strokeOpacity="0.6"
        />

        <text
          x={CX}
          y={CY - 130}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="14"
          fill={palette.muted}
        >
          Aplicação · casos de uso
        </text>
        <text
          x={CX}
          y={CY - 110}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="12.5"
          fill={palette.muted}
        >
          ports (interfaces)
        </text>

        <text
          x={CX}
          y={CY - 4}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="18"
          fill={palette.text}
          fontWeight="600"
        >
          Domínio
        </text>
        <text
          x={CX}
          y={CY + 22}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="12.5"
          fill={palette.muted}
        >
          entidades · regras
        </text>

        {inbound.map((a) => (
          <Box key={a.title} a={a} />
        ))}
        {outbound.map((a) => (
          <Box key={a.title} a={a} />
        ))}

        <text
          x={CX}
          y={532}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="13"
          fill={palette.muted}
        >
          as dependências apontam para dentro — o domínio não importa framework
        </text>
      </svg>
    </div>
  );
}
