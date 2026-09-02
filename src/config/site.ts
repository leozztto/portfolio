/**
 * Configuração central do site — fonte única de verdade para dados de
 * identidade repetidos em vários pontos (metadata, footer, seção de contato,
 * rota `/api/status`, sitemap/robots). Alterar aqui propaga para todo o site.
 */
export const siteConfig = {
  name: "Leandro Menegazzo Franceschetto",
  role: "Senior Software Engineer — Back-End",
  location: "Pato Branco, Paraná, Brasil",
  email: "leozztto@gmail.com",
  url: "https://leandromf.dev",
  social: {
    linkedin: {
      label: "linkedin.com/in/leandro-mf",
      href: "https://www.linkedin.com/in/leandro-mf",
    },
    github: {
      label: "github.com/leozztto",
      href: "https://github.com/leozztto",
    },
  },
  /** PDF servido de `public/`. */
  resume: "/curriculo-leandro-franceschetto.pdf",
} as const;

export type SiteConfig = typeof siteConfig;
