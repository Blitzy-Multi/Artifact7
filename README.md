# Artifact7

## Endpoints

| Method | Path            | Response       |
|--------|-----------------|----------------|
| GET    | `/`             | `Hello world`  |
| GET    | `/good-evening` | `Good evening` |

## Running

```bash
npm install
npm start
```

`npm start` runs `node index.js`. The server listens on `http://localhost:3000` by default (override with the `PORT` environment variable).

## Requirements

Node.js >= 18 (the floor required by Express 5); uses Express ^5.2.1.
