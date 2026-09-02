import type { Config } from "tailwindcss";
// Caminho relativo: o alias "@/" do tsconfig não é resolvido na config do Tailwind.
import { palette } from "./src/lib/theme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: palette.bg,
        surface: palette.surface,
        "surface-alt": palette.surfaceAlt,
        border: palette.border,
        text: palette.text,
        muted: palette.muted,
        accent: palette.accent,
        success: palette.success,
        error: palette.error,
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
