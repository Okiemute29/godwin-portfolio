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

This is a single-page portfolio website for Robert Godwin (Frontend Developer), built with React 18 + TypeScript + Vite.

**Stack**: React Router v6, TanStack React Query v5, React Hook Form + Zod, Tailwind CSS, shadcn/ui (Radix UI primitives), Sonner toasts, Lucide icons.

**Routing**: Hash-based client-side navigation (`#home`, `#about`, `#projects`, etc.). Two routes — `/` (Index) and `*` (NotFound).

**Component layout**:
- `src/components/ui/` — shadcn/ui primitives (do not modify directly; regenerate via shadcn CLI if needed)
- `src/components/portfolio/` — page sections: `Navbar`, `Hero`, `About`, `Projects`, `Experience`, `Skills`, `Contact`, `Footer`
- `src/pages/Index.tsx` — assembles all portfolio sections in order
- `src/App.tsx` — root with `QueryClientProvider`, `TooltipProvider`, `Toaster`, and router

**Design system**: All CSS custom properties (HSL colors, gradients, shadows, fonts, transitions) are defined in `src/index.css`. Tailwind config (`tailwind.config.ts`) extends the theme with custom fonts (Inter, Space Grotesk) and animations. Use `cn()` from `src/lib/utils.ts` for conditional classnames.

**Path alias**: `@` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.json`).

**Testing**: Vitest with jsdom environment. Setup file at `src/test/setup.ts`. Tests live in `src/test/`.

**Lovable integration**: `vite.config.ts` includes a component tagger plugin — leave it in place.
