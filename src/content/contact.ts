import { siteConfig } from "@/config/site";
import type { ContactLink } from "@/types/content";

export const contactLinks: ContactLink[] = [
  {
    label: "↗ ver currículo (PDF)",
    href: siteConfig.resume,
    external: true,
    primary: true,
  },
  { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    label: siteConfig.social.linkedin.label,
    href: siteConfig.social.linkedin.href,
    external: true,
  },
  {
    label: siteConfig.social.github.label,
    href: siteConfig.social.github.href,
    external: true,
  },
];
