export function EventArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 760 320"
      className="h-auto w-full"
      role="img"
      aria-label="Diagrama de arquitetura orientada a eventos"
    >
      <defs>
        <marker id="arrow-evt" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#6EC1FF" />
        </marker>
      </defs>

      {/* Producer */}
      <rect x="20" y="130" width="140" height="60" rx="8" fill="#171C27" stroke="#232935" />
      <text x="90" y="155" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#E4E7EC" fontWeight="bold">
        Order Service
      </text>
      <text x="90" y="172" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#7C8494">
        producer
      </text>

      {/* Arrow to topic */}
      <line x1="160" y1="160" x2="255" y2="160" stroke="#6EC1FF" strokeWidth="1.5" markerEnd="url(#arrow-evt)" />
      <text x="207" y="150" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#7C8494">
        publish
      </text>

      {/* Kafka Topic */}
      <rect x="260" y="110" width="150" height="100" rx="8" fill="#12161F" stroke="#E8A33D" strokeDasharray="4 3" />
      <text x="335" y="150" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#E8A33D" fontWeight="bold">
        order.created
      </text>
      <text x="335" y="168" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#7C8494">
        Kafka Topic
      </text>
      <text x="335" y="184" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#7C8494">
        partitions · 3
      </text>

      {/* Arrows to consumers */}
      <line x1="410" y1="130" x2="500" y2="70" stroke="#6EC1FF" strokeWidth="1.5" markerEnd="url(#arrow-evt)" />
      <line x1="410" y1="160" x2="500" y2="160" stroke="#6EC1FF" strokeWidth="1.5" markerEnd="url(#arrow-evt)" />
      <line x1="410" y1="190" x2="500" y2="250" stroke="#6EC1FF" strokeWidth="1.5" markerEnd="url(#arrow-evt)" />

      {/* Consumer: Payment */}
      <rect x="505" y="40" width="150" height="60" rx="8" fill="#171C27" stroke="#232935" />
      <text x="580" y="65" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#E4E7EC" fontWeight="bold">
        Payment Service
      </text>
      <text x="580" y="82" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#7C8494">
        consumer
      </text>

      {/* Consumer: Notification */}
      <rect x="505" y="130" width="150" height="60" rx="8" fill="#171C27" stroke="#232935" />
      <text x="580" y="155" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#E4E7EC" fontWeight="bold">
        Notification Service
      </text>
      <text x="580" y="172" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#7C8494">
        consumer
      </text>

      {/* Consumer: Ledger */}
      <rect x="505" y="220" width="150" height="60" rx="8" fill="#171C27" stroke="#232935" />
      <text x="580" y="245" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#E4E7EC" fontWeight="bold">
        Ledger Service
      </text>
      <text x="580" y="262" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#7C8494">
        consumer
      </text>

      {/* DB icons under each consumer */}
      {[70, 160, 250].map((y, i) => (
        <g key={i}>
          <line x1="580" y1={y + 30} x2="580" y2={y + 50} stroke="#232935" />
          <ellipse cx="580" cy={y + 56} rx="18" ry="7" fill="#12161F" stroke="#3ECF8E" />
        </g>
      ))}
    </svg>
  );
}
