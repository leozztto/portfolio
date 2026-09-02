import { siteConfig } from "@/config/site";
import type { ContactLink } from "@/types/content";

export const contactLinks: ContactLink[] = [
  {
    // TODO: troque pelo link real do seu currículo (Google Drive,
    // GitHub, ou onde preferir hospedar) — abre em nova aba, sem
    // manter o arquivo dentro do repositório do site.
    label: "↗ ver currículo (PDF)",
    href: siteConfig.resume,
    external: true,
    primary: true,
  },
  { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: siteConfig.social.linkedin.label, href: siteConfig.social.linkedin.href },
  { label: siteConfig.social.github.label, href: siteConfig.social.github.href },
];
