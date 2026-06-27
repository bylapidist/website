# Agent Instructions

This repository is a Next.js website. To keep quality high and pull requests green, always run the following checks before committing.

## Code Quality

- `pnpm run lint` – run ESLint and Stylelint.
- `pnpm run typecheck` – verify TypeScript types.
- `pnpm run format` – ensure Prettier formatting. Use `pnpm run format:write` to auto‑fix.

## Testing

- Install Playwright browsers first: `pnpm run test:install-browsers`.
- Run the test suite: `pnpm test`.

## Other

- `pnpm run fix` runs lint fixes and formats code.
- For full QA: `pnpm run preqa` then `pnpm run qa` to build and run Lighthouse CI.

All commits must leave the working tree clean and pass the commands above.
