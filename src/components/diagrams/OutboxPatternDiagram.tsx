"use client";

import { useEffect, useState } from "react";
import { palette, diagram } from "@/lib/theme";

/**
 * Transactional Outbox: o caso de uso grava a mudança de domínio e o evento
 * (status PENDING) na MESMA transação; um relay agendado lê os pendentes,
 * publica no broker e marca como PUBLISHED. Se o broker cair, nada se perde —
 * o relay reenvia. Falhas repetidas vão para a DLT.
 */

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
}

export function OutboxPatternDiagram() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const serviceToDb = curve(250, 140, 306, 150);
  const dbToRelay = "M 430 246 L 430 322";
  const relayToDb = "M 452 322 L 452 246";
  const relayToBroker = curve(596, 397, 724, 397);
  const brokerToConsumers = curve(924, 397, 980, 384);
  const relayToDlt = "M 390 472 L 390 486";

  return (
    <div className="flex justify-center overflow-x-auto py-2">
      <svg
        viewBox="0 0 1120 560"
        className="h-auto w-full max-w-[1040px] md:min-w-[760px]"
        role="img"
        aria-labelledby="outbox-pattern-diagram-title"
      >
        <title id="outbox-pattern-diagram-title">
          Diagrama do padrão Transactional Outbox: o order-service grava, na mesma transação, o
          pedido na tabela orders e o evento na tabela outbox com status PENDING. Um OutboxRelay
          agendado consulta os eventos PENDING, publica no Kafka Broker e marca como PUBLISHED; o
          broker entrega aos consumidores. Falhas repetidas são enviadas para a DLT.
        </title>

        {/* caixa da transação atômica */}
        <rect
          x={16}
          y={30}
          width={600}
          height={228}
          rx={16}
          fill="none"
          stroke={palette.success}
          strokeWidth={1.4}
          strokeOpacity="0.5"
          strokeDasharray="6 5"
        />
        <text x={32} y={22} fontFamily="monospace" fontSize="13" fill={palette.success}>
          1 transação atômica
        </text>

        {/* arestas */}
        <path
          d={serviceToDb}
          fill="none"
          stroke={palette.success}
          strokeWidth="2"
          strokeOpacity="0.55"
        />
        <path
          d={dbToRelay}
          fill="none"
          stroke={palette.accent}
          strokeWidth="2"
          strokeOpacity="0.55"
        />
        <path
          d={relayToDb}
          fill="none"
          stroke={palette.accent}
          strokeWidth="1.3"
          strokeOpacity="0.3"
          strokeDasharray="4 4"
        />
        <path
          d={relayToBroker}
          fill="none"
          stroke={diagram.purple}
          strokeWidth="2"
          strokeOpacity="0.55"
        />
        <path
          d={brokerToConsumers}
          fill="none"
          stroke={diagram.purple}
          strokeWidth="2"
          strokeOpacity="0.45"
        />
        <path
          d={relayToDlt}
          fill="none"
          stroke={palette.error}
          strokeWidth="1.4"
          strokeOpacity="0.4"
          strokeDasharray="4 4"
        />

        {/* dots animados */}
        {animate && (
          <>
            <circle r="5" fill={palette.success}>
              <animateMotion dur="1.9s" repeatCount="indefinite" path={serviceToDb} />
            </circle>
            <circle r="4.5" fill={palette.accent}>
              <animateMotion dur="2s" begin="0.4s" repeatCount="indefinite" path={dbToRelay} />
            </circle>
            <circle r="5" fill={diagram.purple}>
              <animateMotion
                dur="1.8s"
                begin="0.9s"
                repeatCount="indefinite"
                path={relayToBroker}
              />
            </circle>
            <circle r="4.2" fill={diagram.purple} opacity="0.8">
              <animateMotion
                dur="1.6s"
                begin="1.3s"
                repeatCount="indefinite"
                path={brokerToConsumers}
              />
            </circle>
          </>
        )}

        {/* rótulos das arestas */}
        <text x={470} y={286} fontFamily="monospace" fontSize="10.5" fill={palette.muted}>
          poll PENDING
        </text>
        <text
          x={660}
          y={388}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="11.5"
          fill={palette.muted}
        >
          publica
        </text>
        <text x={570} y={514} fontFamily="monospace" fontSize="11" fill={palette.muted}>
          falha → retry → DLT
        </text>

        {/* order-service */}
        <rect
          x={40}
          y={78}
          width={210}
          height={124}
          rx={14}
          fill={palette.surface}
          stroke={palette.border}
          strokeWidth={1.5}
        />
        <circle cx={60} cy={104} r="4.5" fill={palette.success} />
        <text
          x={74}
          y={110}
          fontFamily="monospace"
          fontSize="15.5"
          fill={palette.text}
          fontWeight="600"
        >
          order-service
        </text>
        <text x={58} y={146} fontFamily="monospace" fontSize="12" fill={palette.muted}>
          CreateOrderUseCase
        </text>
        <text x={58} y={170} fontFamily="monospace" fontSize="12" fill={palette.accent}>
          @Transactional
        </text>

        {/* Postgres */}
        <rect
          x={306}
          y={54}
          width={290}
          height={192}
          rx={14}
          fill={palette.surfaceAlt}
          stroke={palette.border}
          strokeWidth={1.5}
        />
        <circle cx={326} cy={82} r="4.5" fill={diagram.blue} />
        <text
          x={340}
          y={88}
          fontFamily="monospace"
          fontSize="15"
          fill={palette.text}
          fontWeight="600"
        >
          Postgres
        </text>
        <line x1={322} y1={104} x2={580} y2={104} stroke={palette.border} />
        <rect
          x={324}
          y={118}
          width={248}
          height={42}
          rx={8}
          fill={palette.surface}
          stroke={palette.border}
        />
        <text x={340} y={144} fontFamily="monospace" fontSize="13" fill={palette.text}>
          orders
        </text>
        <rect
          x={324}
          y={172}
          width={248}
          height={56}
          rx={8}
          fill={palette.surface}
          stroke={palette.accent}
          strokeOpacity="0.5"
        />
        <text x={340} y={196} fontFamily="monospace" fontSize="13" fill={palette.text}>
          outbox_event
        </text>
        <text x={340} y={216} fontFamily="monospace" fontSize="11" fill={palette.accent}>
          status = PENDING
        </text>

        {/* OutboxRelay */}
        <rect
          x={306}
          y={322}
          width={290}
          height={150}
          rx={14}
          fill={palette.surface}
          stroke={palette.border}
          strokeWidth={1.5}
        />
        <circle cx={326} cy={350} r="4.5" fill={palette.accent} />
        <text
          x={340}
          y={356}
          fontFamily="monospace"
          fontSize="15.5"
          fill={palette.text}
          fontWeight="600"
        >
          OutboxRelay
        </text>
        <text x={326} y={390} fontFamily="monospace" fontSize="11.5" fill={palette.muted}>
          @Scheduled(fixedDelay)
        </text>
        <text x={326} y={414} fontFamily="monospace" fontSize="11.5" fill={palette.muted}>
          findTop100(PENDING)
        </text>
        <text x={326} y={438} fontFamily="monospace" fontSize="11.5" fill={palette.muted}>
          publish → PUBLISHED
        </text>

        {/* Kafka Broker */}
        <rect
          x={724}
          y={322}
          width={200}
          height={150}
          rx={16}
          fill={palette.surface}
          stroke={diagram.purple}
          strokeWidth={1.8}
        />
        <text
          x={824}
          y={362}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="16"
          fill={palette.text}
          fontWeight="600"
        >
          Kafka Broker
        </text>
        <text
          x={824}
          y={392}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="12.5"
          fill={diagram.purple}
        >
          order.created
        </text>
        <text
          x={824}
          y={420}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="11"
          fill={palette.muted}
        >
          at-least-once
        </text>

        {/* consumidores */}
        <rect
          x={980}
          y={344}
          width={120}
          height={104}
          rx={12}
          fill={palette.surfaceAlt}
          stroke={palette.border}
          strokeWidth={1.4}
        />
        <circle cx={1000} cy={370} r="4" fill={diagram.blue} />
        <text
          x={1012}
          y={375}
          fontFamily="monospace"
          fontSize="12.5"
          fill={palette.text}
          fontWeight="600"
        >
          consumers
        </text>
        <text x={998} y={408} fontFamily="monospace" fontSize="10.5" fill={palette.muted}>
          Inbox
        </text>
        <text x={998} y={424} fontFamily="monospace" fontSize="10.5" fill={palette.muted}>
          idempotente
        </text>

        {/* DLT */}
        <rect
          x={306}
          y={486}
          width={250}
          height={44}
          rx={10}
          fill={palette.surfaceAlt}
          stroke={palette.error}
          strokeOpacity="0.5"
          strokeWidth={1.4}
        />
        <text x={322} y={513} fontFamily="monospace" fontSize="12.5" fill={palette.text}>
          order.created.dlt
        </text>

        <text
          x={560}
          y={548}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="13"
          fill={palette.muted}
        >
          o evento é gravado junto com o dado — se o broker cair, o relay reenvia
        </text>
      </svg>
    </div>
  );
}
