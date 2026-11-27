<!-- intent-skills:start -->

## Skill Loading

Before editing files for a substantial task:

- Run `pnpm dlx @tanstack/intent@latest list` from the workspace root to see available local skills.
- If a listed skill matches the task, run `pnpm dlx @tanstack/intent@latest load <package>#<skill>` before changing files.
- Use the loaded `SKILL.md` guidance while making the change.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.

<!-- intent-skills:end -->

# Project Context

## Scaffolding

Generated with:

```bash
npx @tanstack/cli@latest create my-tanstack-app \
  --agent \
  --package-manager pnpm \
  --tailwind \
  --deployment cloudflare \
  --toolchain eslint \
  --add-ons tanstack-query
```

> Note: `--tailwind` is deprecated in current TanStack CLI; Tailwind is enabled by default for TanStack Start scaffolds.
>
> The project directory was later renamed from `my-tanstack-app` to `pastelrain` and the `package.json`, `.cta.json`, and `wrangler.jsonc` names were updated to match.
>
> The toolchain was later migrated from ESLint + Prettier to [Oxc](https://oxc.rs/) (`oxlint` + `oxfmt`); `eslint.config.js`, `prettier.config.js`, and `.prettierignore` were removed, and the `@tanstack/eslint-config`, `eslint`, `prettier`, `@ianvs/prettier-plugin-sort-imports`, `prettier-plugin-tailwindcss` devDeps were dropped (oxfmt covers class sorting and import ordering natively).
>
> Tooling, config files, and file naming were later aligned with the sibling project `../pastelrain`; keep the two consistent when changing either.

## TanStack Intent

Follow-up commands run from the project root:

```bash
npx @tanstack/intent@latest install
npx @tanstack/intent@latest list
```

Skill loading during development:

```bash
pnpm dlx @tanstack/intent@latest list
pnpm dlx @tanstack/intent@latest load <package>#<skill>
```

Key installed skill sources:

- `@tanstack/react-start#react-start`
- `@tanstack/router-core#router-core`
- `@tanstack/start-client-core#start-core`
- `@tanstack/start-client-core#start-core/deployment`
- `@tanstack/start-client-core#start-core/server-functions`

## Stack & Integrations

| Layer              | Choice                                                      |
| ------------------ | ----------------------------------------------------------- |
| Framework          | React 19 + TanStack Start                                   |
| Router             | TanStack Router (file-based)                                |
| Data fetching      | TanStack Query + `@tanstack/react-router-ssr-query`         |
| Styling            | Tailwind CSS v4 (`@tailwindcss/vite`)                       |
| Linting            | Oxlint (`oxlint`)                                           |
| Formatting         | Oxfmt (`oxfmt`) — built-in `sortImports`, `sortTailwindcss` |
| Build tool         | Vite 8                                                      |
| Deployment/Hosting | Cloudflare Workers via `@cloudflare/vite-plugin` + Wrangler |

Partner integrations represented:

- **Cloudflare**: `@cloudflare/vite-plugin` in `vite.config.ts`, `wrangler.jsonc`, `pnpm deploy` script, Workers-compatible entry (`@tanstack/react-start/server-entry`).
- **TanStack Query**: provider/context in `src/integrations/tanstack-query/`, SSR integration in `src/router.tsx`, used by `src/components/now-playing-spotify.tsx` and the `performai` hooks.
- **Oxc**: `.oxlintrc.json` (plugins eslint/typescript/unicorn/oxc/react/import/jsx-a11y; `correctness` error, `suspicious` warn; `react/react-in-jsx-scope` off); `.oxfmtrc.json` (no semicolons, single quotes, `sortImports`, `sortTailwindcss` with `cn` and `src/styles.css` as the stylesheet); `pnpm lint`, `pnpm format`, `pnpm format:check` scripts. Both ignore `src/routeTree.gen.ts` and `worker-configuration.d.ts`.

## Tooling & Conventions

- **Package manager:** pnpm only. `packageManager` pins `pnpm@12.23.0` exactly (Workers Builds runs it through Corepack, which rejects ranges); `engines.node` and `.node-version` pin Node 26.13.1, keep them in step. `pnpm-workspace.yaml` sets `allowBuilds` and lets the TanStack packages link their skills into `.agents/skills` and `.claude/skills` (`intent.skills` in `package.json`).
- **Pinned versions:** the TanStack runtime and devtools packages are pinned exactly (no `^`); upgrade them together to the latest stable release.
- **Commits:** Conventional Commits, enforced by commitlint (`commitlint.config.js`) through the husky `commit-msg` hook (`pnpm install` runs `prepare: husky`).
- **CI/Release:** `.github/workflows/ci.yml` runs `tsc --noEmit`, `oxlint`, `format:check` and commitlint on pushes to `main`/`dev` and on PRs; pushes to `main` then run semantic-release (`release.config.js`), which needs a `RELEASE_TOKEN` repository secret (an admin PAT).
- **File names:** kebab-case for every source file (`now-playing-spotify.tsx`, `use-parallax.ts`); components and hooks use named exports (`export function NowPlayingSpotify`), no default exports.
- **Imports:** use the `#/*` → `./src/*` alias (works in TypeScript and at runtime through `package.json` `imports`); `@/*` is TypeScript-only and kept for compatibility.
- **Checks before finishing a change:** `pnpm exec tsc --noEmit && pnpm exec oxlint && pnpm format:check && pnpm build`.

## Project Structure

```text
pastelrain-lite/
├── .github/workflows/ci.yml  # Typecheck, lint, format, commitlint, release
├── .husky/commit-msg         # commitlint hook
├── src/
│   ├── components/           # chunithm-profile, footer, maimai-profile, now-playing-spotify,
│   │                         # projects, rain-background, rain-drop, title, who-am-i
│   ├── hooks/use-parallax.ts # Mouse-driven parallax
│   ├── integrations/
│   │   ├── performai/        # maimai/CHUNITHM server functions, schemas, hooks
│   │   ├── spotify/          # Now-playing server function
│   │   └── tanstack-query/   # QueryClient context, devtools
│   ├── routes/               # __root.tsx, index.tsx, $.tsx
│   ├── router.tsx            # Router factory + QueryClient context
│   ├── styles.css            # Tailwind import + design tokens
│   └── routeTree.gen.ts      # Generated route tree
├── vite.config.ts            # Vite + Cloudflare + Tailwind + Start plugins
├── wrangler.jsonc            # Cloudflare Workers config
├── .oxlintrc.json            # Oxlint config
├── .oxfmtrc.json             # Oxfmt config
├── commitlint.config.js      # Conventional Commits rules
├── release.config.js         # semantic-release config
├── tsr.config.json           # TanStack Router generator config
└── package.json              # pnpm scripts & deps
```

## Environment Variables

No environment variables are required by default.

For Cloudflare Workers:

- **Public (non-secret) vars**: add them to `wrangler.jsonc` under `vars`.
- **Secrets**: use `wrangler secret put <NAME>` for each production secret.
- **Local env overrides**: create a `.dev.vars` file for local development with Wrangler.

See the Cloudflare docs for binding configuration (KV, D1, R2, Durable Objects) in `wrangler.jsonc`.

## Deployment Notes

1. Authenticate Wrangler: `wrangler login`
2. Build: `pnpm build`
3. Deploy: `pnpm deploy` (runs `pnpm run build && wrangler deploy`)

`wrangler.jsonc`:

- `compatibility_date`: `2025-09-02`
- `compatibility_flags`: `["nodejs_compat"]`
- `main`: `@tanstack/react-start/server-entry`

## Key Architectural Decisions

- File-based routing with auto-generated `routeTree.gen.ts`.
- `QueryClient` is created per request via `getContext()` and injected into router context for SSR/data reuse.
- `setupRouterSsrQueryIntegration` wires TanStack Query hydration for server/client handoff.
- Devtools are stripped from production builds by `@tanstack/devtools-vite`.
- Cloudflare Vite plugin uses `viteEnvironment: { name: 'ssr' }` so the SSR environment runs on the Workers runtime during dev.

## Known Gotchas

- `--tailwind` CLI flag is deprecated and ignored; Tailwind v4 is already enabled.
- The scaffold does not generate a `.env.example`; there are no default env vars, but Cloudflare secrets/vars must be configured before deploying anything that uses them.
- Wrangler must be authenticated before `pnpm deploy` will succeed.
- Local dev runs `vite dev --port 3000` with the Cloudflare plugin active.

## Next Steps

- Customize `src/routes/index.tsx` and the components under `src/components/`.
- Add routes under `src/routes/` (route tree regenerates automatically or via `pnpm generate-routes`).
- Add Cloudflare bindings in `wrangler.jsonc` when needed.
- For TanStack Query patterns, load the relevant Intent skill before making substantial changes.
