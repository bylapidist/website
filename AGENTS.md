# Agent Instructions

This repository is a Next.js website. To keep quality high and pull requests green, always run the following checks before committing.

## Code Quality

- `npm run lint` – run ESLint and Stylelint.
- `npm run typecheck` – verify TypeScript types.
- `npm run format` – ensure Prettier formatting. Use `npm run format:write` to auto‑fix.

## Testing

- Install Playwright browsers first: `npm run test:install-browsers`.
- Run the test suite: `npm test`.

## Other

- `npm run fix` runs lint fixes and formats code.
- For full QA: `npm run preqa` then `npm run qa` to build and run Lighthouse CI.

All commits must leave the working tree clean and pass the commands above.
