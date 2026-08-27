export default function MicroservicesDiagram() {
  return (
    <svg
      viewBox="0 0 760 340"
      className="h-auto w-full"
      role="img"
      aria-label="Diagrama de arquitetura de microsserviços e sistemas distribuídos"
    >
      <defs>
        <marker id="arrow-ms" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#6EC1FF" />
        </marker>
      </defs>

      {/* Client */}
      <rect x="320" y="10" width="120" height="44" rx="8" fill="#171C27" stroke="#232935" />
      <text x="380" y="37" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#E4E7EC" fontWeight="bold">
        Client
      </text>

      <line x1="380" y1="54" x2="380" y2="82" stroke="#6EC1FF" strokeWidth="1.5" markerEnd="url(#arrow-ms)" />

      {/* API Gateway */}
      <rect x="290" y="86" width="180" height="46" rx="8" fill="#12161F" stroke="#E8A33D" />
      <text x="380" y="114" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#E8A33D" fontWeight="bold">
        API Gateway
      </text>

      {/* K8s cluster boundary */}
      <rect x="60" y="160" width="640" height="160" rx="10" fill="none" stroke="#232935" strokeDasharray="5 4" />
      <text x="80" y="178" fontFamily="monospace" fontSize="9" fill="#7C8494">
        Kubernetes Cluster
      </text>

      {/* Arrows from gateway to services */}
      <line x1="330" y1="132" x2="150" y2="200" stroke="#6EC1FF" strokeWidth="1.5" markerEnd="url(#arrow-ms)" />
      <line x1="360" y1="132" x2="290" y2="200" stroke="#6EC1FF" strokeWidth="1.5" markerEnd="url(#arrow-ms)" />
      <line x1="400" y1="132" x2="450" y2="200" stroke="#6EC1FF" strokeWidth="1.5" markerEnd="url(#arrow-ms)" />
      <line x1="430" y1="132" x2="610" y2="200" stroke="#6EC1FF" strokeWidth="1.5" markerEnd="url(#arrow-ms)" />

      {/* Services */}
      {[
        { x: 90, label: "Auth Service" },
        { x: 230, label: "Orders Service" },
        { x: 390, label: "Payments Service" },
        { x: 550, label: "Inventory Service" },
      ].map((svc) => (
        <g key={svc.label}>
          <rect x={svc.x} y="200" width="120" height="48" rx="8" fill="#171C27" stroke="#232935" />
          <text
            x={svc.x + 60}
            y="228"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="10"
            fill="#E4E7EC"
            fontWeight="bold"
          >
            {svc.label}
          </text>
          <line x1={svc.x + 60} y1="248" x2={svc.x + 60} y2="268" stroke="#232935" />
          <ellipse cx={svc.x + 60} cy="274" rx="16" ry="6" fill="#12161F" stroke="#3ECF8E" />
        </g>
      ))}

      <text x="380" y="335" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#7C8494">
        cada serviço com seu próprio banco · deploy independente · escalonamento horizontal
      </text>
    </svg>
  );
}
