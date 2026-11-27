# Pastel Rain

A personal portfolio site built with [TanStack Start](https://tanstack.com/start), React 19, and Tailwind CSS v4. Deployed to Cloudflare Workers.

## Development

```bash
pnpm install
pnpm dev
```

The dev server runs on port `3000`.

## Build & Deploy

```bash
pnpm build
pnpm deploy
```

`pnpm deploy` runs `pnpm build` followed by `wrangler deploy`. Make sure you are authenticated with `wrangler login` first.

## Lint & Format

Powered by [Oxc](https://oxc.rs/) — `oxlint` for linting, `oxfmt` for formatting.

```bash
pnpm lint       # oxlint
pnpm format     # oxfmt (writes)
pnpm check      # oxfmt --check
```

- `.oxlintrc.json` — oxlint config (browser/node env, correctness/suspicious/perf categories; `style` is off because oxfmt owns formatting).
- `.oxfmtrc.jsonc` — oxfmt config (semi/singleQuote/trailing-comma, `sortImports`, `sortTailwindcss` with `cn`, ignore patterns).

## Project Structure

- `src/routes/` — File-based routes (`__root.tsx`, `index.tsx`, `$.tsx`).
- `src/components/` — UI components (`Title`, `WhoAmI`, `Projects`, `NowPlayingSpotify`, `Footer`, `RainBackground`).
- `src/integrations/performai/` — Server functions and types for fetching Maimai and Chunithm profiles and ratings with ISG caching and maintenance detection.
- `src/integrations/spotify/` — Server function for fetching the currently playing Spotify track.
- `src/integrations/tanstack-query/` — TanStack Query provider and devtools.
- `src/hooks/useParallax.ts` — Mouse-driven parallax hook for the title.
- `vite.config.ts` — Vite + Cloudflare + Tailwind + TanStack Start.
- `wrangler.jsonc` — Cloudflare Workers configuration.

## Tech Stack

- React 19
- TanStack Start / TanStack Router
- TanStack Query
- Tailwind CSS v4
- Motion
- Vite 8
- Cloudflare Workers
- Oxlint (lint)
- Oxfmt (format)
