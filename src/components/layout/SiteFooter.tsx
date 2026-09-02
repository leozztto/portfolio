import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span>{siteConfig.role}</span>
      </div>
    </footer>
  );
}
