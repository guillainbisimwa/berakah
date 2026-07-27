# Berakah

Frontend for Berakah (Vite + React).

The API lives in a separate project: `berakah-api` (NestJS).

## Run locally

**Prerequisites:** Node.js

1. Install dependencies:

```bash
npm install
```

2. Optional: set `GEMINI_API_KEY` in `.env.local` if you use Gemini features.

3. Start the frontend:

```bash
npm run dev
```

App: http://127.0.0.1:3000/

## Backend

Run the API from the standalone repo (`Desktop/Backend/berakah-api`):

```bash
cd ~/Desktop/Backend/berakah-api
npm install
docker compose up -d
npm run start:dev
```

API base: http://localhost:3001/api/v1
