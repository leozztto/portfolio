import { Nav } from "@/components/layout/Nav";
import { nav } from "@/content/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg shadow-lg shadow-black/30">
      <Nav items={nav} />
    </header>
  );
}
