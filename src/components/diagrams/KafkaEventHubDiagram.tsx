"use client";

import { useEffect, useState } from "react";

const producer = { x: 20, y: 168, w: 140, h: 60 };
const broker = { x: 250, y: 130, w: 190, h: 140 };
const consumers = [
  { y: 40, title: "billing-service", sub: "billing.*", dot: "#3ECF8E" },
  { y: 168, title: "notification-service", sub: "notify.*", dot: "#6EC1FF" },
  { y: 296, title: "analytics-worker", sub: "analytics.*", dot: "#E8A33D" },
];
const consumerX = 540;
const consumerW = 170;
const consumerH = 60;

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
    broker.y + broker.h / 2
  );

  return (
    <div className="flex justify-center overflow-x-auto py-2">
      <svg viewBox="0 0 760 360" className="h-auto w-full min-w-[640px] max-w-[740px]">
        {/* produtor -> broker */}
        <path d={producerToBroker} fill="none" stroke="#A78BFA" strokeWidth="1.6" strokeOpacity="0.6" />
        <circle r="4" fill="#A78BFA">
          {animate && <animateMotion dur="1.8s" repeatCount="indefinite" path={producerToBroker} />}
        </circle>

        {/* broker <-> consumidores, bidirecional */}
        {consumers.map((c, i) => {
          const out = curve(broker.x + broker.w, broker.y + broker.h / 2, consumerX, c.y + consumerH / 2);
          const back = curve(consumerX, c.y + consumerH / 2 + 8, broker.x + broker.w, broker.y + broker.h / 2 + 8);
          return (
            <g key={c.title}>
              <path d={out} fill="none" stroke={c.dot} strokeWidth="1.3" strokeOpacity="0.5" />
              <path d={back} fill="none" stroke={c.dot} strokeWidth="1" strokeOpacity="0.28" strokeDasharray="3 3" />
              <circle r="3.5" fill={c.dot}>
                {animate && (
                  <animateMotion dur={`${1.6 + i * 0.3}s`} begin={`${i * 0.2}s`} repeatCount="indefinite" path={out} />
                )}
              </circle>
              <circle r="2.5" fill={c.dot} opacity="0.7">
                {animate && (
                  <animateMotion dur={`${2.2 + i * 0.3}s`} begin={`${i * 0.35}s`} repeatCount="indefinite" path={back} />
                )}
              </circle>
            </g>
          );
        })}

        {/* Event Producer */}
        <rect x={producer.x} y={producer.y} width={producer.w} height={producer.h} rx="9" fill="#171C27" stroke="#232935" />
        <circle cx={producer.x + 14} cy={producer.y + 17} r="3" fill="#3ECF8E" />
        <text x={producer.x + 23} y={producer.y + 21} fontFamily="monospace" fontSize="11" fill="#E4E7EC" fontWeight="600">
          payment-api
        </text>
        <text x={producer.x + 14} y={producer.y + 42} fontFamily="monospace" fontSize="9" fill="#7C8494">
          Order / Payment
        </text>

        {/* Kafka Broker */}
        <rect x={broker.x} y={broker.y} width={broker.w} height={broker.h} rx="10" fill="#12161F" stroke="#A78BFA" strokeWidth="1.4" />
        <text x={broker.x + broker.w / 2} y={broker.y + 26} textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#E4E7EC" fontWeight="600">
          Kafka Broker
        </text>
        <text x={broker.x + broker.w / 2} y={broker.y + 42} textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#A78BFA">
          topic.financial.events
        </text>
        <text x={broker.x + broker.w / 2} y={broker.y + 62} textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#7C8494">
          entrega paralela · mesma msg
        </text>
        <line x1={broker.x + 16} y1={broker.y + 76} x2={broker.x + broker.w - 16} y2={broker.y + 76} stroke="#232935" />
        <text x={broker.x + broker.w / 2} y={broker.y + 96} textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill="#7C8494">
          consumidores também
        </text>
        <text x={broker.x + broker.w / 2} y={broker.y + 110} textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill="#7C8494">
          publicam de volta
        </text>
        <text x={broker.x + broker.w / 2} y={broker.y + 124} textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill="#7C8494">
          (pub/sub bidirecional)
        </text>

        {/* Consumers */}
        {consumers.map((c) => (
          <g key={c.title}>
            <rect x={consumerX} y={c.y} width={consumerW} height={consumerH} rx="9" fill="#171C27" stroke="#232935" />
            <circle cx={consumerX + 14} cy={c.y + 17} r="3" fill={c.dot} />
            <text x={consumerX + 23} y={c.y + 21} fontFamily="monospace" fontSize="10.5" fill="#E4E7EC" fontWeight="600">
              {c.title}
            </text>
            <text x={consumerX + 14} y={c.y + 42} fontFamily="monospace" fontSize="9" fill="#7C8494">
              escuta · processa · {c.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
