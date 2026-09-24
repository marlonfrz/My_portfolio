# Product Lab Portfolio

Animated personal portfolio and product showcase for presenting professional work, technical decisions, and interactive demo applications.

## Product structure

- The home page introduces the profile and provides a quick overview of featured projects.
- A persistent section navigator keeps the visitor oriented while scrolling.
- Each project has an internal case-study page with its context, architecture, and implementation details.
- Each interactive demo lives on its own subdomain and uses local, reproducible data without production services.

## Planned routes

```text
/
/projects
/projects/ticketing
/projects/crm

ticketing.<domain>
crm.<domain>
```

## Initial technology direction

- Next.js and TypeScript
- Motion for scroll and layout animations
- CSS Modules backed by centralized design tokens
- Static Spanish and English routes with first-visit language detection
- Static-first rendering
- AWS S3, CloudFront, ACM, and Route 53
- GitHub Actions for continuous deployment

The implementation roadmap and acceptance criteria are documented in [docs/PROJECT_PLAN.md](docs/PROJECT_PLAN.md).

The approved professional positioning and writing guardrails are documented in [docs/PROFILE_GUIDELINES.md](docs/PROFILE_GUIDELINES.md).

## Status

The first application foundation is implemented on `develop`:

- Responsive animated home page
- Sticky desktop navigation and mobile section menu
- Spanish and English content
- Project catalogue and static case-study routes
- Ticketing and CRM content models
- Static export ready for S3 and CloudFront
- Continuous integration on `develop`, `main`, and pull requests

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run type-check
npm test
npm run build
```

## Docker

Build and run the production-like static site with Nginx:

```bash
docker compose up --build -d
```

Open `http://localhost:3000`. The root route selects Spanish or English from the saved preference and browser language.

Inspect or stop the service:

```bash
docker compose ps
docker compose logs -f portfolio
docker compose down
```
