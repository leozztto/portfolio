import { palette, diagram } from "@/lib/theme";

type Skill = { label: string[]; value: number };

const MAX = 5;
const CX = 240;
const CY = 240;
const MAX_R = 145;

function point(radius: number, index: number, total: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  return [CX + radius * Math.cos(angle), CY + radius * Math.sin(angle)];
}

// Evita corte de texto: ancora à esquerda/direita conforme o lado do
// hexágono em vez de sempre centralizar o rótulo no ponto.
function anchorFor(x: number) {
  if (x > CX + 8) return "start";
  if (x < CX - 8) return "end";
  return "middle";
}

export function SkillRadar({ skills }: { skills: Skill[] }) {
  const total = skills.length;
  const rings = [0.25, 0.5, 0.75, 1];

  const dataPoints = skills
    .map((s, i) => point((s.value / MAX) * MAX_R, i, total).join(","))
    .join(" ");

  return (
    <svg viewBox="0 0 480 480" className="h-auto w-full">
      <defs>
        <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={diagram.radarGradientFrom} stopOpacity="0.35" />
          <stop offset="100%" stopColor={diagram.radarGradientTo} stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* anéis de grade */}
      {rings.map((r) => (
        <polygon
          key={r}
          points={skills.map((_, i) => point(r * MAX_R, i, total).join(",")).join(" ")}
          fill="none"
          stroke={palette.border}
          strokeWidth="1"
        />
      ))}

      {/* eixos */}
      {skills.map((_, i) => {
        const [x, y] = point(MAX_R, i, total);
        return (
          <line key={i} x1={CX} y1={CY} x2={x} y2={y} stroke={palette.border} strokeWidth="1" />
        );
      })}

      {/* polígono de dados */}
      <polygon points={dataPoints} fill="url(#radarFill)" stroke={diagram.blue} strokeWidth="2" />
      {skills.map((s, i) => {
        const [x, y] = point((s.value / MAX) * MAX_R, i, total);
        return <circle key={i} cx={x} cy={y} r="3.5" fill={diagram.blue} />;
      })}

      {/* rótulos — suportam 1 ou 2 linhas, sem cortar */}
      {skills.map((s, i) => {
        const [x, y] = point(MAX_R + 22, i, total);
        const anchor = anchorFor(x);
        const startDy = s.label.length === 2 ? -6 : 4;
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor={anchor}
            fontFamily="monospace"
            fontSize="12"
            fill={palette.text}
            fontWeight="400"
          >
            {s.label.map((line, li) => (
              <tspan key={li} x={x} dy={li === 0 ? startDy : 14}>
                {line}
              </tspan>
            ))}
          </text>
        );
      })}
    </svg>
  );
}
