"use client";

import { useEffect, useState } from "react";
import { palette, diagram } from "@/lib/theme";

const producer = { x: 8, y: 122, w: 218, h: 94 };
const broker = { x: 286, y: 60, w: 296, h: 218 };
const consumers = [
  { y: 8, title: "billing-service", sub: "billing.*", dot: palette.success },
  { y: 122, title: "notification-service", sub: "notify.*", dot: diagram.blue },
  {
    y: 236,
    title: "analytics-worker",
    sub: "analytics.*",
    dot: palette.accent,
  },
];
const consumerX = 642;
const consumerW = 265;
const consumerH = 94;

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
}

export function KafkaEventHubDiagram() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const producerToBroker = curve(
    producer.x + producer.w,
    producer.y + producer.h / 2,
    broker.x,
    broker.y + broker.h / 2,
  );

  return (
    <div className="flex justify-center overflow-x-auto py-2">
      <svg
        viewBox="0 -60 930 457"
        className="h-auto w-full min-w-[760px] max-w-[1040px]"
        role="img"
        aria-labelledby="kafka-event-hub-diagram-title"
      >
        <title id="kafka-event-hub-diagram-title">
          Diagrama de arquitetura orientada a eventos: payment-api publica eventos de order/payment
          no Kafka Broker (topic.financial.events), consumidos em paralelo por billing-service,
          notification-service e analytics-worker.
        </title>
        {/* produtor -> broker */}
        <path
          d={producerToBroker}
          fill="none"
          stroke={diagram.purple}
          strokeWidth="1.8"
          strokeOpacity="0.6"
        />
        <circle r="5" fill={diagram.purple}>
          {animate && <animateMotion dur="1.8s" repeatCount="indefinite" path={producerToBroker} />}
        </circle>

        {/* broker <-> consumidores, bidirecional */}
        {consumers.map((c, i) => {
          const out = curve(
            broker.x + broker.w,
            broker.y + broker.h / 2,
            consumerX,
            c.y + consumerH / 2,
          );
          const back = curve(
            consumerX,
            c.y + consumerH / 2 + 13,
            broker.x + broker.w,
            broker.y + broker.h / 2 + 13,
          );
          return (
            <g key={c.title}>
              <path d={out} fill="none" stroke={c.dot} strokeWidth="1.6" strokeOpacity="0.5" />
              <path
                d={back}
                fill="none"
                stroke={c.dot}
                strokeWidth="1.2"
                strokeOpacity="0.28"
                strokeDasharray="4 4"
              />
              <circle r="4.5" fill={c.dot}>
                {animate && (
                  <animateMotion
                    dur={`${1.6 + i * 0.3}s`}
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                    path={out}
                  />
                )}
              </circle>
              <circle r="3.2" fill={c.dot} opacity="0.7">
                {animate && (
                  <animateMotion
                    dur={`${2.2 + i * 0.3}s`}
                    begin={`${i * 0.35}s`}
                    repeatCount="indefinite"
                    path={back}
                  />
                )}
              </circle>
            </g>
          );
        })}

        {/* Event Producer */}
        <rect
          x={producer.x}
          y={producer.y}
          width={producer.w}
          height={producer.h}
          rx="14"
          fill={palette.surfaceAlt}
          stroke={palette.border}
        />
        <circle cx={producer.x + 21} cy={producer.y + 26} r="4.7" fill={palette.success} />
        <text
          x={producer.x + 35}
          y={producer.y + 32}
          fontFamily="monospace"
          fontSize="17"
          fill={palette.text}
          fontWeight="600"
        >
          payment-api
        </text>
        <text
          x={producer.x + 21}
          y={producer.y + 65}
          fontFamily="monospace"
          fontSize="13.5"
          fill={palette.muted}
        >
          Order / Payment
        </text>

        {/* Kafka Broker */}
        <rect
          x={broker.x}
          y={broker.y}
          width={broker.w}
          height={broker.h}
          rx="16"
          fill={palette.surface}
          stroke={diagram.purple}
          strokeWidth="1.8"
        />
        <text
          x={broker.x + broker.w / 2}
          y={broker.y + 40}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="18"
          fill={palette.text}
          fontWeight="600"
        >
          Kafka Broker
        </text>
        <text
          x={broker.x + broker.w / 2}
          y={broker.y + 65}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="13.5"
          fill={diagram.purple}
        >
          topic.financial.events
        </text>
        <text
          x={broker.x + broker.w / 2}
          y={broker.y + 96}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="12"
          fill={palette.muted}
        >
          entrega paralela · mesma msg
        </text>
        <line
          x1={broker.x + 24}
          y1={broker.y + 118}
          x2={broker.x + broker.w - 24}
          y2={broker.y + 118}
          stroke={palette.border}
        />
        <text
          x={broker.x + broker.w / 2}
          y={broker.y + 150}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="13"
          fill={palette.muted}
        >
          consumidores também
        </text>
        <text
          x={broker.x + broker.w / 2}
          y={broker.y + 172}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="13"
          fill={palette.muted}
        >
          publicam de volta
        </text>
        <text
          x={broker.x + broker.w / 2}
          y={broker.y + 194}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="13"
          fill={palette.muted}
        >
          (pub/sub bidirecional)
        </text>

        {/* Consumers */}
        {consumers.map((c) => (
          <g key={c.title}>
            <rect
              x={consumerX}
              y={c.y}
              width={consumerW}
              height={consumerH}
              rx="14"
              fill={palette.surfaceAlt}
              stroke={palette.border}
            />
            <circle cx={consumerX + 21} cy={c.y + 26} r="4.7" fill={c.dot} />
            <text
              x={consumerX + 35}
              y={c.y + 32}
              fontFamily="monospace"
              fontSize="16"
              fill={palette.text}
              fontWeight="600"
            >
              {c.title}
            </text>
            <text
              x={consumerX + 21}
              y={c.y + 65}
              fontFamily="monospace"
              fontSize="13.5"
              fill={palette.muted}
            >
              escuta · processa · {c.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
