# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server on port 8080
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint
npm run preview      # Preview production build
npm run test         # Run tests once (Vitest)
npm run test:watch   # Run tests in watch mode
```

## Architecture

This is an editorial, case-study-driven portfolio website for Robert Godwin (Frontend Developer), built with React 18 + TypeScript + Vite.

**Stack**: React Router v6, TanStack React Query v5, React Hook Form + Zod, Tailwind CSS, shadcn/ui (Radix UI primitives), Sonner toasts, Lucide icons.

**Routing**: `/` (Index, single-page story with in-page anchors `#home #about #work #experience #contact`) and `/work/:slug` (case study pages, one per flagship project — see `src/data/projects.ts` for slugs) via `src/pages/work/CaseStudy.tsx`. `*` falls back to `NotFound`. `ScrollToTop` resets scroll position on route change; `Index` handles `location.hash` on mount/hash-change to scroll to the right section (supports links like `/#work` from case study pages).

**Data layer** (source of truth for all content — edit here, not in components):
- `src/data/projects.ts` — flagship case studies (Grant Portal, MyGiving, Billing Suite, ZITU), secondary projects (PayBond, Martial Arts In The Park), and additional client work list. Screenshots without a real asset yet render as a labelled placeholder via `ScreenshotFrame` — add `src` to the image entry once a real screenshot exists.
- `src/data/content.ts` — capability groups, process steps, experience/education timeline, journey copy.

**Component layout**:
- `src/components/ui/` — shadcn/ui primitives (do not modify directly; regenerate via shadcn CLI if needed)
- `src/components/portfolio/` — `Navbar`, `Hero`, `About`, `SelectedWork` (wraps `ProjectFeature` × 4 + `SecondaryWork`), `Capabilities`, `Process`, `Journey`, `AdditionalWork`, `ContactCTA`, `Footer`, `ProjectCaseStudyLayout`, plus `Reveal` (scroll-reveal wrapper), `ScreenshotFrame` (real image or placeholder), `ScrollToTop`
- `src/pages/Index.tsx` — assembles all homepage sections in story order
- `src/pages/work/CaseStudy.tsx` — looks up a flagship project by slug and renders `ProjectCaseStudyLayout`
- `src/App.tsx` — root with `QueryClientProvider`, `TooltipProvider`, `Toaster`, and router

**Design system**: Warm near-black foundation, warm off-white type, one restrained bronze/gold accent (no blue-cyan gradients, no glow, minimal glassmorphism). All CSS custom properties (HSL colors, shadows, transitions) are defined in `src/index.css`, along with the `.reveal`/`.reveal-scale` scroll-animation utilities (paired with `useReveal`/`Reveal`) and `.num-marker` for the serif numbering. Tailwind config (`tailwind.config.ts`) extends the theme with `Fraunces` (display/serif headlines) + `Inter` (body) and the `display-sm/md/lg/xl` fluid type scale. Use `cn()` from `src/lib/utils.ts` for conditional classnames.

**Path alias**: `@` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.json`).

**Testing**: Vitest with jsdom environment. Setup file at `src/test/setup.ts`. Tests live in `src/test/`.

**Lovable integration**: `vite.config.ts` includes a component tagger plugin — leave it in place.
