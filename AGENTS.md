# Repository Guidelines

## Project Structure & Module Organization

This is a Nuxt 4 and Vue 3 website. Route views live in `pages/`; dynamic routes use names such as `pages/streams/[yt_id].vue`. Reusable UI belongs in `components/`, with feature groups such as `components/events/`. Put shared browser logic in `composables/`, helpers in `utils/`, and integrations in `plugins/`.

Server endpoints, middleware, models, and server-only helpers live under `server/`. TypeScript declarations are in `Types/`. Store bundled styles and imported assets in `assets/`; files requiring stable public URLs belong in `public/`. Article and event metadata is maintained in root JSON files.

## Build, Test, and Development Commands

Use Node `24.15.0` (see `.nvmrc`) and Yarn 1.

- `yarn install` installs dependencies and prepares Nuxt.
- `yarn dev` starts the local development server with hot reload.
- `yarn build` produces the production application in `.output/`.
- `yarn preview` serves the production build locally.
- `yarn startprod` runs the built Nitro server.
- `yarn eslint .` checks Vue, TypeScript, and JavaScript.
- `yarn prettier --check .` verifies formatting; use `yarn prettier --write <path>` for targeted fixes.

## Coding Style & Naming Conventions

Prettier is authoritative: two-space indentation, no semicolons, single quotes, 100-character lines, and no trailing commas. Prefer TypeScript for new code. Name components in PascalCase (`ArticleCard.vue`), composables with a `use` prefix (`usePageSeo.ts`), and API handlers by route or HTTP suffix (`contact.post.ts`).

## Testing Guidelines

No automated test framework or coverage threshold is configured. Before submitting, run `yarn eslint .` and `yarn build`, then exercise affected routes with `yarn dev`. Verify responsive layout, navigation, forms, loading/error states, and modified endpoints. If adding tests, colocate `*.spec.ts` files with the feature and add a script to `package.json`.

## Commit & Pull Request Guidelines

Recent commits use short summaries such as `New Event` and `Event correction`. Use an imperative subject for one logical change; do not mix content updates with unrelated refactors. Pull requests should explain the result, list verification, link issues, and include before/after screenshots for visual changes. Call out configuration, data, API, or migration impacts.

## Security & Configuration

Never commit `.env` files or `gmail.private.key.json`; both are ignored. Keep credentials server-side and access deploy-specific values through Nuxt runtime configuration. Treat public keys and files under `public/` as intentionally downloadable.
