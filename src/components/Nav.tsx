"use client";

import { useEffect, useRef, useState } from "react";

type NavItem = { method: string; route: string; href: string };

export default function Nav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.href ?? "");
  const [open, setOpen] = useState(false);
  const tickingRef = useRef(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // scroll-spy: define qual seção está ativa conforme a posição da página
  useEffect(() => {
    const sections = items
      .map((i) => document.querySelector(i.href))
      .filter(Boolean) as HTMLElement[];

    const OFFSET = 140;

    function updateActive() {
      const scrollPos = window.scrollY + OFFSET;
      let current: HTMLElement | undefined;
      for (const s of sections) {
        if (s.offsetTop <= scrollPos) current = s;
      }
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (nearBottom) current = sections[sections.length - 1];

      if (current) setActive(`#${current.id}`);
      tickingRef.current = false;
    }

    function onScroll() {
      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(updateActive);
      }
    }

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, [items]);

  // fecha o menu ao clicar fora dele (útil em telas de toque)
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeItem = items.find((i) => i.href === active) ?? items[0];

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
      {/* marca — clicável, volta ao topo da página */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex items-center gap-3"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface-alt font-mono text-xs font-bold text-white">
          LMF
        </span>
        <span className="leading-tight">
          <span className="block max-w-[150px] truncate font-display text-sm font-bold text-text sm:max-w-none">
            Leandro Menegazzo Franceschetto
          </span>
          <span className="block font-mono text-[10px] text-muted">
            Software Engineering
          </span>
        </span>
      </a>

      {/* menu único, à direita: mostra a seção ativa e expande a lista completa */}
      <div
        ref={menuRef}
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex items-center gap-2 rounded-full border border-border bg-surface-alt px-3.5 py-1.5 font-mono text-xs text-text transition hover:border-accent/40"
        >
          <span className={activeItem.method === "GET" ? "font-bold text-success" : "font-bold text-accent"}>
            {activeItem.method}
          </span>
          <span>{activeItem.route}</span>
          <span className={`text-muted transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>
            ⌄
          </span>
        </button>

        {/* wrapper com padding (não margin) para não deixar um "buraco"
            morto entre o botão e a lista — hover continua detectável */}
        <div
          className={`absolute right-0 top-full z-50 w-60 pt-2 transition-all duration-150 ${
            open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
          }`}
        >
          <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-xl shadow-black/40">
            {items.map((item) => {
              const isActive = item.href === active;
              return (
                <a
                  key={item.route}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2.5 font-mono text-xs transition ${
                    isActive ? "bg-accent/10 text-text" : "text-muted hover:bg-surface-alt hover:text-text"
                  }`}
                >
                  <span className={item.method === "GET" ? "font-bold text-success" : "font-bold text-accent"}>
                    {item.method}
                  </span>
                  <span>{item.route}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
