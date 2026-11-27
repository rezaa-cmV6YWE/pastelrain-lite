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
pnpm lint          # oxlint
pnpm format        # oxfmt (writes)
pnpm format:check  # oxfmt --check
```

- `.oxlintrc.json` — oxlint config (correctness errors, suspicious warnings, React/import/jsx-a11y plugins).
- `.oxfmtrc.json` — oxfmt config (no semicolons, single quotes, `sortImports`, `sortTailwindcss` with `cn`, ignore patterns).
- `.zed/settings.json` — Zed formats on save with oxfmt plus `source.fixAll.oxc` (Prettier disabled). Requires the [Oxc extension](https://github.com/oxc-project/oxc-zed).

## Commits & Releases

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/), checked by commitlint in a husky `commit-msg` hook. CI (`.github/workflows/ci.yml`) typechecks, lints, checks formatting and commit messages; pushes to `main` are released with semantic-release.

## Project Structure

- `src/routes/` — File-based routes (`__root.tsx`, `index.tsx`, `$.tsx`).
- `src/components/` — UI components (`title`, `who-am-i`, `projects`, `now-playing-spotify`, `footer`, `rain-background`); kebab-case file names, named exports.
- `src/integrations/performai/` — Server functions and types for fetching Maimai and Chunithm profiles and ratings with ISG caching and maintenance detection.
- `src/integrations/spotify/` — Server function for fetching the currently playing Spotify track.
- `src/integrations/tanstack-query/` — TanStack Query provider and devtools.
- `src/hooks/use-parallax.ts` — Mouse-driven parallax hook for the title.
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
