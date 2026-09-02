# Portfólio — Engenheiro de Software (Back-End)

Template em Next.js 14 (App Router) + Tailwind CSS, pronto para deploy na Vercel.

**Conceito:** o site inteiro é desenhado como documentação de API — a navegação e as seções usam rótulos de rota (`GET /sobre`, `GET /projetos`...), o hero é um terminal que consome um endpoint real (`/api/status`), os projetos são mostrados como request/response, e a experiência profissional aparece como changelog versionado. É uma forma de já demonstrar raciocínio de back-end na própria estrutura do portfólio.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Estrutura

```
src/
  app/            # rotas (layout, page, api/status, robots, sitemap, not-found, error)
  config/site.ts  # nome, cargo, e-mail, URL, redes, currículo — fonte única de verdade
  types/          # interfaces do conteúdo
  content/        # dados tipados, um arquivo por área
  lib/theme.ts    # tokens de cor (paleta do Tailwind + tons dos diagramas)
  components/
    layout/       # SiteHeader, Nav, SiteFooter
    ui/           # Reveal, MethodTag, SectionHeader
    diagrams/     # radar de skills, arquitetura, rede neural
    sections/     # um componente por seção da página
```

`src/app/page.tsx` só compõe as seções — o conteúdo vive em `src/content/` e `src/config/site.ts`.

## Personalizar

- `src/config/site.ts` — nome, cargo, e-mail, URL de produção, LinkedIn/GitHub, caminho do currículo. Usado em metadata, footer, contato, `/api/status`, sitemap e robots.
- `src/content/*.ts` — todo o texto: `stack`, `projects`, `changelog`, `about`, `working-style`, `domains`, `skills`, `navigation`, `contact`, `status`.
- `src/app/layout.tsx` — `title` e `description` (metadata para SEO/compartilhamento).

## Cores e tipografia

- **Cores:** `src/lib/theme.ts` (`palette`) — consumida pelo `tailwind.config.ts` e pelos diagramas SVG. Para trocar a cor de destaque, edite `palette.accent`.
- **Fontes:** carregadas via `next/font` em `src/app/layout.tsx` — Space Grotesk (títulos), Inter (corpo), JetBrains Mono (código/labels), expostas como `--font-display` / `--font-body` / `--font-mono` e mapeadas em `tailwind.config.ts`.

## Deploy na Vercel

1. Crie um repositório no GitHub e suba este projeto:
   ```bash
   git init
   git add .
   git commit -m "portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
   git push -u origin main
   ```
2. Acesse [vercel.com](https://vercel.com), faça login com GitHub.
3. Clique em **Add New Project**, selecione o repositório.
4. A Vercel detecta Next.js automaticamente — clique em **Deploy**.
5. Pronto: seu site fica em `seu-projeto.vercel.app`. Pushes futuros na branch `main` fazem redeploy automático.

## Domínio próprio (opcional)

Em **Project Settings → Domains** na Vercel, adicione seu domínio e siga as instruções de DNS exibidas lá.
