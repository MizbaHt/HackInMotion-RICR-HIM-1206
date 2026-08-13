# CivicFix

CivicFix is a civic issue reporting and tracking platform designed for Bengaluru, India. It provides a transparent way for citizens to report infrastructure issues and for city administrators to track, analyze, and resolve them efficiently.

## Project Structure

This repository uses a pnpm monorepo structure to share code (types, schemas, API clients) between the frontend and backend.

```
Replit-Design-Project-1/
├── frontend/                  # React SPA (Vite + Tailwind 4 + shadcn)
├── backend/                   # Express 5 API Server
├── shared/                    # Shared workspace packages
│   ├── api-client-react/      # Generated React Query hooks
│   ├── api-spec/              # OpenAPI specification
│   ├── api-zod/               # Generated Zod validators
│   └── db/                    # Drizzle ORM and Postgres connection
├── tools/                     # Development tooling
│   ├── mockup-sandbox/        # UI component design sandbox
│   └── scripts/               # Helper scripts
├── docs/                      # Documentation (API, Setup, etc.)
└── assets/                    # Project assets and diagrams
```

## Quick Start

See [docs/setup-guide.md](docs/setup-guide.md) for detailed instructions.

1. `pnpm install`
2. `cp .env.example .env`
3. `pnpm run dev`

## Documentation

- [API Documentation](docs/api-documentation.md)
- [Setup Guide](docs/setup-guide.md)
- [Contributing Guidelines](docs/contributing.md)

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS 4, shadcn/ui, Wouter
- **Backend:** Node.js, Express 5, Pino
- **Database:** PostgreSQL, Drizzle ORM
- **API/Types:** OpenAPI, Orval, Zod, React Query
- **Tooling:** pnpm workspaces, esbuild
