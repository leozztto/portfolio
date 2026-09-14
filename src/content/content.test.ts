import { describe, expect, it } from "vitest";
import { siteConfig } from "@/config/site";
import { contactLinks } from "@/content/contact";
import { nav } from "@/content/navigation";
import { projects } from "@/content/projects";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

describe("siteConfig", () => {
  it("tem e-mail e URL válidos", () => {
    expect(siteConfig.email).toMatch(EMAIL_RE);
    expect(() => new URL(siteConfig.url)).not.toThrow();
  });

  it("tem links sociais absolutos", () => {
    expect(() => new URL(siteConfig.social.linkedin.href)).not.toThrow();
    expect(() => new URL(siteConfig.social.github.href)).not.toThrow();
  });
});

describe("navigation", () => {
  it("cada item tem método HTTP e rota", () => {
    for (const item of nav) {
      expect(item.method).toMatch(/^[A-Z]+$/);
      expect(item.route.startsWith("/")).toBe(true);
      expect(item.href.length).toBeGreaterThan(0);
    }
  });

  it("não tem rotas duplicadas", () => {
    const routes = nav.map((item) => item.route);
    expect(new Set(routes).size).toBe(routes.length);
  });
});

describe("projects", () => {
  it("cada projeto tem os campos obrigatórios preenchidos", () => {
    for (const project of projects) {
      expect(project.name.length).toBeGreaterThan(0);
      expect(project.stack.length).toBeGreaterThan(0);
      expect(() => new URL(project.href)).not.toThrow();
    }
  });

  it("não tem nomes de projeto duplicados", () => {
    const names = projects.map((project) => project.name);
    expect(new Set(names).size).toBe(names.length);
  });
});

describe("contactLinks", () => {
  it("inclui um link primário e o e-mail do siteConfig", () => {
    expect(contactLinks.some((link) => link.primary)).toBe(true);
    expect(contactLinks.some((link) => link.href === `mailto:${siteConfig.email}`)).toBe(true);
  });
});
