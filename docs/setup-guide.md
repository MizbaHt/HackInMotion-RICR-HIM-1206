# Setup Guide

## Prerequisites

- Node.js (v24 or later recommended)
- pnpm (v9 or later)
- PostgreSQL (v15 or later)

## Local Development Setup

1. **Install Dependencies**
   From the root directory, run:
   ```bash
   pnpm install
   ```

2. **Environment Variables**
   Copy the example environment file and configure it:
   ```bash
   cp .env.example .env
   ```
   Ensure `DATABASE_URL` is set to a valid PostgreSQL connection string.

3. **Database Migrations**
   *(Note: Schema definitions are currently pending in `shared/db`)*
   ```bash
   pnpm -w run db:push
   ```

4. **Start the Development Servers**
   To start both the frontend and backend in development mode:
   ```bash
   pnpm run dev
   ```
   - Frontend will run on `http://localhost:5173`
   - Backend will run on `http://localhost:3000`

## Generating API Client

If you update the OpenAPI specification in `shared/api-spec/openapi.yaml`, regenerate the Zod schemas and React Query hooks:

```bash
pnpm -w run generate
```

## Running the Mockup Sandbox

To work on UI components in isolation:

```bash
pnpm --filter @workspace/mockup-sandbox run dev
```
