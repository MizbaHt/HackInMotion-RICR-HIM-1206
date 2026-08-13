# Contributing to CivicFix

We welcome contributions to the CivicFix platform! 

## Branching Strategy

- `main` - Primary branch, always production-ready.
- `feature/*` - For new features.
- `fix/*` - For bug fixes.
- `docs/*` - For documentation updates.

## Workflow

1. Create a branch from `main`.
2. Make your changes in the appropriate workspace package (`frontend`, `backend`, or `shared`).
3. Ensure `pnpm run typecheck` passes without errors.
4. If modifying the API, update `shared/api-spec/openapi.yaml` and run `pnpm run generate`.
5. Submit a Pull Request.

## Code Style

- The project uses Prettier for code formatting.
- Ensure you run `pnpm run format` (if available) before committing.
- Adhere to the established React and Express patterns within the codebase.
