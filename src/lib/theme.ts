/**
 * Tokens de cor do projeto — fonte única de verdade.
 *
 * `palette` é consumida pelo `tailwind.config.ts` (gera as classes `bg-*`,
 * `text-*`, `border-*` etc.) e também pelos componentes SVG em
 * `src/components/diagrams/`, que precisam dos valores literais.
 *
 * `diagram` reúne os tons usados só nos diagramas e que não entram na
 * paleta do Tailwind (azul/roxo de destaque, gradiente do radar).
 *
 * Notas:
 * - O `#6EC1FF` dentro do data-URI SVG de `.bg-grid` (globals.css) não pode
 *   referenciar `var()`/JS e fica hardcoded lá — corresponde a `diagram.blue`.
 * - As tintas `rgba(...)` do canvas em `NeuralNetwork.tsx` também espelham
 *   estes valores (azul = `diagram.blue`, laranja = `palette.accent`,
 *   claro = `palette.text`), mas ficam literais lá para não arriscar a
 *   aparência da animação.
 */

export const palette = {
  bg: "#0B0E14",
  surface: "#12161F",
  surfaceAlt: "#171C27",
  border: "#232935",
  text: "#E4E7EC",
  muted: "#7C8494",
  accent: "#E8A33D",
  success: "#3ECF8E",
  error: "#E8615A",
} as const;

export const diagram = {
  blue: "#6EC1FF",
  purple: "#A78BFA",
  radarGradientFrom: "#3B82F6",
  radarGradientTo: "#1E3A5F",
} as const;
