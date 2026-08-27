# Portfólio — Engenheiro de Software (Back-End)

Template em Next.js 14 (App Router) + Tailwind CSS, pronto para deploy na Vercel.

**Conceito:** o site inteiro é desenhado como documentação de API — a navegação e as seções usam rótulos de rota (`GET /sobre`, `GET /projetos`...), o hero é um terminal que consome um endpoint real (`/api/status`), os projetos são mostrados como request/response, e a experiência profissional aparece como changelog versionado. É uma forma de já demonstrar raciocínio de back-end na própria estrutura do portfólio.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Personalizar

Os pontos que você precisa editar estão marcados com `Seu Nome` / `seuemail@dominio.com` / placeholders:

- `app/api/status/route.ts` — seus dados reais (nome, cargo, stack, contato). Isso alimenta o terminal do hero.
- `app/page.tsx` — arrays no topo do arquivo:
  - `stack` — suas tecnologias, agrupadas
  - `projects` — seus projetos reais (nome, descrição, request/response de exemplo, link do repo)
  - `changelog` — sua experiência profissional
  - seção `#sobre` — seu resumo profissional
  - seção `#contato` — seus links (email, GitHub, LinkedIn)
- `app/layout.tsx` — `title` e `description` (metadata para SEO/compartilhamento)

## Cores e tipografia

Definidas em `tailwind.config.ts` (cores) e `app/layout.tsx` (fontes: Space Grotesk para títulos, Inter para corpo, JetBrains Mono para código/labels). Para trocar a cor de destaque, edite `accent` em `tailwind.config.ts`.

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
