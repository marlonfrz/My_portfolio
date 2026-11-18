# Marlon Farizo Portfolio

Static portfolio built with Next.js and TypeScript. It presents professional
experience and case studies for Ticketing Platform and CRM Platform, each with
a video walkthrough using sample data. The site is available in Spanish and
English.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. The root page selects a language from the saved
preference or the browser settings.

Quality checks:

```bash
npm run lint
npm run type-check
npm test
npm run build
```

`npm run build` exports the static site to `out/`.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the
portfolio when `main` receives a push. In the repository settings, select
**Pages → Build and deployment → Source → GitHub Actions**. The default site
address is `https://marlonfrz.github.io/My_portfolio/`; a custom domain is
optional.

The workflow sets `NEXT_PUBLIC_BASE_PATH=/My_portfolio` for routes and video
assets. Local development uses `/`. If a custom domain is configured later,
remove that variable from the workflow and rebuild after updating the domain
in the GitHub Pages settings.

## Docker

```bash
docker compose up --build -d
```

The container serves the exported site at `http://localhost:3000`.
