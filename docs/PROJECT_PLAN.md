# Project plan

## 1. Product vision

Build a fast, animated portfolio that presents the developer, their experience, and their products without overwhelming the visitor. The home page should work as a concise index; visitors who want more context can open a case study, while visitors who want to evaluate a product can launch its isolated demo.

### Primary goals

- Communicate the profile and value proposition within the first viewport.
- Make all featured projects discoverable at a glance.
- Demonstrate real product and engineering work through case studies and safe demos.
- Keep navigation clear during the complete scroll journey.
- Preserve strong performance as the project catalogue grows.
- Host the public experience on AWS with predictable, low operating costs.

### Non-goals

- Embedding complete applications inside the portfolio with iframes.
- Autoplaying heavy videos on the home page.
- Keeping production backends, databases, payment providers, or email services active for public demos.
- Adding animation that does not clarify hierarchy, navigation, or interaction.

## 2. Information architecture

### Home page sections

1. Introduction
2. About
3. Projects
   - Ticketing Platform
   - CRM Platform
4. Experience and data
5. Contact

### Navigation model

Desktop uses a compact sticky sidebar with scrollspy behavior. The active section is highlighted, project subsections appear while the projects area is active, and selecting an item performs an accessible smooth scroll.

Mobile uses a compact current-section control that opens a navigation drawer. Native scrolling remains available and content is never hidden behind the navigation.

URLs use stable anchors such as `/#projects` and `/#experience`. Case studies use dedicated routes such as `/projects/ticketing`.

### Project discovery

The home page contains a limited selection of featured project cards. Each card contains:

- Name and short value proposition
- Product category and status
- Primary technology tags
- Optional lightweight visual
- `View project` link to the internal case study
- `Open demo` link to the demo subdomain

The complete catalogue lives at `/projects`. Filters are introduced only when the number of projects makes them useful.

## 3. Visual and interaction direction

The visual concept is a restrained digital product lab: editorial typography, warm dark surfaces, off-white content, electric blue and coral accents, subtle grids, and product-interface details.

### Animation principles

- Use scroll-triggered animation for entrances and hierarchy.
- Use scroll-linked animation only for meaningful progress or spatial transitions.
- Prefer transforms and opacity over layout-changing properties.
- Avoid global scroll hijacking.
- Respect `prefers-reduced-motion` throughout the experience.
- Do not require animation to understand or operate the site.

### Performance constraints

- No autoplay video on the home page.
- Project visuals are optimized and lazy-loaded.
- Below-the-fold interactive code is loaded on demand.
- Fonts are self-hosted and subset where licensing permits.
- The initial page should target a Lighthouse performance score of at least 90 on mobile under production conditions.
- Core Web Vitals must be measured after deployment, not inferred only from local development.

## 4. Technical architecture

### Portfolio application

- Next.js with TypeScript
- Static-first pages and metadata
- Motion for component, layout, and scroll animation
- Content stored as validated project data rather than duplicated JSX
- Reusable primitives for sections, project cards, navigation, and case studies
- Automated accessibility, type, lint, and build checks

Proposed source boundaries:

```text
src/
  app/
  components/
    layout/
    navigation/
    projects/
    motion/
  content/
    projects/
  lib/
  styles/
```

### Demo applications

Each product keeps its existing UI but gains an explicit demo runtime mode. Application services depend on a replaceable data provider:

```text
UI -> application services -> production API provider
                           -> local demo provider
```

The local demo provider supplies deterministic seed data and may persist visitor changes in IndexedDB or local storage. A visible reset action restores the original state. Network calls to production services, payment providers, email providers, and private APIs are disabled in demo builds.

Every demo includes:

- A clear demo-mode banner
- Seeded scenarios that reveal the important workflows
- Safe role switching when multiple roles are part of the product
- Reset-to-default functionality
- A persistent link back to the relevant portfolio case study
- No real personal, customer, credential, or payment data

### AWS delivery

The target static architecture is:

```text
Route 53 -> CloudFront + ACM -> private S3 origin
```

Separate CloudFront distributions or independently deployable origins are used for the portfolio and each demo. DNS maps the root domain and demo subdomains to their distributions. GitHub Actions builds and deploys each application independently, followed by a scoped CloudFront invalidation when necessary.

Cost controls include AWS Budgets notifications, conservative cache policies, log retention limits, no permanently running compute for demos, and infrastructure defined as code.

## 5. Delivery roadmap

### Phase 0 — Foundation

- Agree on domain, public name, primary language, and contact channels.
- Inventory the Ticketing and CRM repositories and their deployable frontends.
- Confirm content ownership and remove sensitive material from planned examples.
- Initialize repository standards, branch protection, and continuous integration.

Exit criteria: product scope, project inventory, naming, and repository workflow are documented.

### Phase 1 — Design system and shell

- Create color, typography, spacing, and motion tokens.
- Implement the responsive page shell.
- Implement the sticky desktop navigation and mobile drawer.
- Add scrollspy, keyboard navigation, focus states, and reduced-motion behavior.
- Build shared section and button primitives.

Exit criteria: the complete empty-page structure works on mobile and desktop and passes initial accessibility checks.

### Phase 2 — Home experience

- Implement the hero and profile narrative.
- Add the featured-project grid.
- Add experience/data and contact sections.
- Add restrained scroll and transition animations.
- Establish metadata, social sharing image, favicon, sitemap, and robots policy.

Exit criteria: a visitor can understand the profile, scan projects, and reach contact or project destinations without encountering placeholder navigation.

### Phase 3 — Case studies and catalogue

- Define the typed project-content model.
- Build `/projects` and individual project routes.
- Write the Ticketing and CRM case studies.
- Add architecture diagrams and optimized visuals only where they add information.
- Add related-project navigation.

Exit criteria: both flagship projects have complete, accessible case studies and all project links are stable.

### Phase 4 — Ticketing demo

- Audit external dependencies and network boundaries.
- Introduce the demo data provider and deterministic seed data.
- Implement representative visitor and administrative workflows.
- Disable real payments, messages, emails, uploads, and production writes.
- Add demo banner, role switching, reset behavior, and portfolio return link.

Exit criteria: the demo can be explored repeatedly without a backend, external side effects, secrets, or unrecoverable states.

### Phase 5 — CRM demo

- Repeat the dependency and security audit for CRM.
- Create coherent accounts, contacts, opportunities, activity, and reporting data.
- Implement representative pipelines and role-specific views.
- Add the shared demo controls and product-specific reset behavior.

Exit criteria: the CRM tells a coherent product story with no production dependencies or sensitive data.

### Phase 6 — AWS and delivery automation

- Provision S3 origins, CloudFront, ACM certificates, and Route 53 records.
- Add least-privilege GitHub Actions deployment roles.
- Configure separate deployments for the portfolio and demos.
- Configure budgets, alerts, caching, security headers, and log retention.
- Document rollback and recovery procedures.

Exit criteria: every site is available over HTTPS at its intended domain, deploys reproducibly, and has cost alerts and a tested rollback path.

### Phase 7 — Quality and launch

- Test supported browsers and responsive breakpoints.
- Run accessibility, performance, SEO, and broken-link checks.
- Validate analytics and consent requirements if analytics are enabled.
- Perform a public-demo security review.
- Conduct a content review and production smoke test.

Exit criteria: all launch checks pass and known limitations are documented.

## 6. Quality gates

Every pull request should pass:

- Formatting and linting
- Type checking
- Unit tests for navigation and content behavior
- Production build
- Automated accessibility checks for critical routes
- Secret scanning and dependency review in CI

Before a public release, verify:

- Keyboard-only navigation
- Reduced-motion mode
- Mobile navigation and scrollspy behavior
- Empty, loading, error, and reset states in demos
- No production endpoints or secrets in generated assets
- Correct canonical URLs and social metadata
- CloudFront cache behavior and error-page routing

## 7. Initial backlog

### Now

- Create the Next.js application and baseline quality tooling.
- Decide the public domain and displayed professional name.
- Produce low-fidelity wireframes for desktop and mobile.
- Inventory the Ticketing and CRM technical boundaries.

### Next

- Implement the design tokens and application shell.
- Build the responsive section navigation.
- Define the project-content schema and add the first two projects.
- Implement the static home page before adding complex motion.

### Later

- Convert Ticketing and CRM to isolated demo builds.
- Add AWS infrastructure as code and deployment workflows.
- Add more projects through the content model.
- Introduce analytics only after defining a minimal, privacy-conscious measurement plan.

## 8. Open decisions

- Public domain and subdomain names
- Spanish-only or bilingual content
- Professional name and primary positioning statement
- Whether source repositories are public, private, or selectively linked
- Existing frameworks and deployment constraints in Ticketing and CRM
- Analytics provider, or whether launch should initially avoid analytics

