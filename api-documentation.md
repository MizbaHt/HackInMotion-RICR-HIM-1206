# CivicFix API Documentation

## Overview

This document describes the REST API for the CivicFix platform.

**Base URL**: `/api` (or `http://localhost:3000/api` in development)

The backend is built with Express 5 and utilizes Zod for request/response validation. The frontend interacts with this API via generated React Query hooks based on an OpenAPI specification.

---

## Authentication

Currently, the API does not enforce authentication on existing endpoints. Future endpoints will require a Bearer token in the `Authorization` header.

```http
Authorization: Bearer <token>
```

---

## Endpoints

### Health Check

Check the operational status of the API server.

**GET** `/healthz`

**Response (200 OK)**

```json
{
  "status": "ok",
  "timestamp": "2026-08-14T01:00:00Z"
}
```

---

## Future Endpoints (Planned)

The following endpoints are planned for future implementation based on the frontend data model:

### Issues

- **GET** `/issues` - Retrieve a list of reported issues.
- **GET** `/issues/:id` - Retrieve a specific issue by ID.
- **POST** `/issues` - Report a new issue.
- **PUT** `/issues/:id/status` - (Admin) Update the status of an issue.

### Interactions

- **POST** `/issues/:id/support` - Add user support/vote to an issue.
- **DELETE** `/issues/:id/support` - Remove user support/vote from an issue.
