# CLAUDE.md

## Project overview

Portfolio website for Brett Dorrans (Lapidist), a Lead Frontend Engineer & Design Systems Specialist, live at [lapidist.net](https://lapidist.net). Built with Next.js 16 (App Router, static export), React 19, TypeScript (strict), and pnpm 11.

The site is fully static — no API routes, no SSR. Every page is pre-rendered at build time.

## Package manager

This project uses **pnpm 11.9.0**. Never use `npm` or `yarn`.

- Local binaries: `pnpm exec <bin>` (e.g. `pnpm exec prettier`)
- One-off tools: `pnpm dlx <package>` (replaces `npx`)
- Install deps: `pnpm install`
- Add a dep: `pnpm add <package>` / `pnpm add -D <package>`

## Commands

### Development
```sh
pnpm run dev              # Turbopack dev server + design token watcher (run together)
pnpm run storybook        # Storybook on port 6006
```

### Building
```sh
pnpm run build            # Full build: tokens → CV PDF → next build
pnpm run build:tokens     # Regenerate styles/tokens.css from tokens/*.json
pnpm run build:cv         # Generate brett-dorrans-cv.pdf into public/
pnpm run build-storybook  # Static Storybook output
pnpm run start            # Serve the built `out/` directory locally
```

### Code quality
```sh
pnpm run lint             # ESLint + Stylelint
pnpm run typecheck        # tsc --noEmit
pnpm run format           # Prettier check
pnpm run format:write     # Prettier auto-fix
pnpm run fix              # All fixes at once: lint --fix + stylelint --fix + format:write
```

### Testing
```sh
pnpm run test:install-browsers   # One-time: install Playwright browsers
pnpm run test                    # Unit tests + E2E tests
pnpm run test:unit               # Vitest (jsdom)
pnpm run test:e2e                # Playwright smoke tests
pnpm run test:storybook          # Build Storybook + run accessibility tests
```

### QA / Lighthouse
```sh
pnpm run preqa   # Build the app (prerequisite)
pnpm run qa      # Serve + run Lighthouse CI
```

## Architecture

### Directory layout

```
app/              Next.js App Router
  (site)/         Route group for all public pages
  layout.tsx      Root layout — fonts, metadata, dark-mode inline script
  opengraph-image.tsx / twitter-image.tsx  Dynamic OG/card images
  sitemap.ts / robots.ts                   Auto-generated at build time
components/       One folder per component (see conventions below)
hooks/            Custom React hooks; barrel-exported from hooks/index.ts
lib/              Core logic — articles.tsx uses React cache() for deduplication
utils/            Pure helpers: date, metadata builders, site links, JSON-LD
types/            Shared TS types; Size/Variant enums in types/props.ts
styles/           Global SCSS + auto-generated tokens.css
tokens/           Design token source JSON files
content/articles/ MDX blog posts organised by year
scripts/          Build-time Node scripts
smoke-tests/      Playwright E2E specs
.storybook/       Storybook config
.eslint/          Custom local ESLint rules
.github/workflows/ CI/CD pipelines
```

### Component conventions

Each component lives in its own folder:

```
components/Button/
  Button.tsx
  Button.module.scss
  Button.stories.tsx
  Button.test.tsx
```

- All components are barrel-exported from `components/index.ts`.
- Use the `PolymorphicProps<As, Props>` type from `types/props.ts` for components that render as different HTML elements.
- Layout and data-fetching files import `"server-only"` at the top to prevent accidental client-side use.

### Article system

- Content: `content/articles/[year]/[slug].mdx`
- Fetching: `lib/articles.tsx` — uses React `cache()` so `getArticle` / `getAllArticles` deduplicate within a render pass.
- Frontmatter fields:
  - **Required:** `title`, `description`, `summary`, `tags`, `date`
  - **Optional:** `author`, `audio`
- MDX pipeline: gray-matter → remark (gfm, reading-time) → rehype-prism-plus → next-mdx-remote
- Headings in MDX are wrapped by the `Heading` component, which generates stable anchor IDs via `github-slugger`.

## Design tokens & styling

### Tokens

Source files in `tokens/`:
- `base.json` — primitive values (colours, spacing, type scale)
- `light.json` — light-theme semantic overrides
- `dark.json` — dark-theme semantic overrides

Style Dictionary compiles these into `styles/tokens.css` as CSS custom properties. **Never edit `styles/tokens.css` by hand.** Regenerate it with `pnpm run build:tokens`. In dev, `pnpm run dev` runs the watcher automatically.

### CSS conventions

- **Component styles:** CSS Modules (`.module.scss`). Class names must be **camelCase**.
- **Global styles:** SCSS files in `styles/`. Selectors must be **kebab-case**.
- **Theming:** CSS custom properties set on `:root` (light) and via `@media (prefers-color-scheme: dark)`. Manual overrides via `.light` / `.dark` on `<html>`.
- Stylelint enforces both naming conventions; it will error if they are violated.

## TypeScript conventions

- Strict mode is enabled across the board.
- Path alias: `@/` resolves to the repo root.
- Always use the `Size` and `Variant` enums from `types/props.ts` — never raw string literals. A custom ESLint rule (`no-ad-hoc-props` in `.eslint/custom-rules/`) enforces this and will error on violations.
- `unsafe-*` ESLint rules are relaxed only in test files.

## Testing

### Unit tests (Vitest)
- Files: `**/*.test.ts(x)` — note `.test`, not `.spec`.
- Environment: jsdom with Testing Library globals.
- Setup: `setup-tests.ts` imports `@testing-library/jest-dom/vitest` matchers.

### E2E tests (Playwright)
- Files: `smoke-tests/**/*.spec.ts`.
- Two projects run every spec: `light` and `dark` colour schemes.
- **First-time setup:** `pnpm run test:install-browsers` (downloads browser binaries).
- In non-CI mode Playwright reuses an already-running server; in CI it builds and starts the app fresh.
- Axe accessibility scans run as part of the home page spec.

### Storybook a11y
- `pnpm run test:storybook` builds Storybook, serves it, then runs `test-storybook`.
- Storybook aliases `server-only` to a browser-safe stub (`.storybook/server-only.ts`) so server-only imports don't break.

## Dark mode

- `app/layout.tsx` contains an inline `<script>` that reads `localStorage` and `prefers-color-scheme` to set `.light` or `.dark` on `<html>` before first paint. **Do not remove or move this script** — it prevents flash of unstyled content (FOUC).
- All theme values flow through CSS custom properties; no runtime JS switching is needed beyond the class toggle.

## CI/CD

| Trigger | Workflow | Steps |
|---------|----------|-------|
| Pull request | `test.yml` | Lint → typecheck → unit + E2E tests → Lighthouse CI → Storybook a11y |
| Push to `master` | `release.yml` | Lint → build Storybook → build app → semantic-release → deploy to GitHub Pages |

- **Conventional Commits are required.** `semantic-release` on master reads commit messages to determine the version bump and generate the changelog.
- CI runs inside the `mcr.microsoft.com/playwright` Docker image (browsers pre-installed). `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` is set to skip redundant downloads.
- Secrets: `GH_TOKEN` (GitHub Pages deploy + release), `NPM_TOKEN` (semantic-release publish).

## Gotchas

- **`styles/tokens.css` is generated** — never edit it directly. Changes belong in `tokens/*.json`.
- **CV PDF** is generated at build time by `@lapidist/cv-generator` CLI and moved into `public/`. It is not committed.
- **`postbuild` hook** runs `scripts/fix-css-script-tags.ts` automatically after `next build` to patch incorrect `<script>` tags pointing at CSS files in the static output.
- **`@swc/helpers` override** is pinned to `0.5.21` in `pnpm-workspace.yaml` to resolve a transitive version conflict.
- **Native build scripts** (`esbuild`, `@swc/core`, `@parcel/watcher`, `sharp`, `unrs-resolver`) are pre-approved in `pnpm-workspace.yaml` under `allowBuilds`. Do not remove them or pnpm will refuse to build.
