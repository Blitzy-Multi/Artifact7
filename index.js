/**
 * index.js — Express application entry point.
 *
 * Minimal Node.js + Express HTTP server exposing two plain-text endpoints:
 *   - GET /              -> "Hello world"  (baseline endpoint, preserved)
 *   - GET /good-evening  -> "Good evening" (newly added endpoint)
 *
 * A single Express application instance serves as the unified HTTP layer for
 * both routes. Unmatched paths fall through to Express's built-in default
 * "404 Not Found" handler — no custom error middleware is required for this
 * minimal scope.
 *
 * Module system: CommonJS (require). The project intentionally does not set
 * "type": "module" in package.json.
 */

'use strict';

// Import the Express web framework (declared as a dependency in package.json
// and installed under node_modules/ via `npm install`).
const express = require('express');

// Construct the Express application instance that backs the HTTP server.
const app = express();

// Listening port. Defaults to 3000 and can be overridden via the PORT
// environment variable without any code change (twelve-factor friendly).
const PORT = process.env.PORT || 3000;

// Baseline endpoint: respond to GET / with the exact string "Hello world".
app.get('/', (req, res) => res.send('Hello world'));

// New endpoint: respond to GET /good-evening with the exact string "Good evening".
app.get('/good-evening', (req, res) => res.send('Good evening'));

// Start the server. This is the last call to execute; all routes above are
// registered before the server begins accepting connections.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
