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
- Static-first rendering
- AWS S3, CloudFront, ACM, and Route 53
- GitHub Actions for continuous deployment

The implementation roadmap and acceptance criteria are documented in [docs/PROJECT_PLAN.md](docs/PROJECT_PLAN.md).

## Status

The project is currently in the product definition and technical planning phase.

