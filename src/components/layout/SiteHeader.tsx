"use client";

import { useEffect, useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { nav } from "@/content/navigation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-bg shadow-lg shadow-black/30"
          : "border-transparent bg-transparent shadow-none"
      }`}
    >
      <Nav items={nav} />
    </header>
  );
}
