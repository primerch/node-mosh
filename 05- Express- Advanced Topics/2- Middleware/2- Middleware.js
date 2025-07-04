// 1. dotenv configuration:
//
// - Loads environment variables from a `.env` file into the Node.js application environment.
// - Use `npm install dotenv` to add it to your project dependencies.
// - Ensure the `.env` file is placed within the root project folder.
require("dotenv").config();

// 2. Middleware functions in Express:
//
// Middleware functions are functions that have access to the request object (`req`),
// the response object (`res`), and optionally, the next middleware function (`next`).
// When a client sends a request (the initial request), Express creates unique `req` and
// `res` objects for that specific request and passes them to the first middleware function
// in the chain (middleware invocation).
//
// Middleware functions can perform these tasks:
//   - Execute code (e.g., logging requests).
//   - Modify or add properties to the request (`req`) or response (`res`) objects, which
//     are then shared with subsequent middleware.
//   - End the request-response cycle by sending a response (`res.send()`, `res.json()`, etc.).
//   - Pass control to the next middleware in the stack by invoking `next()`. If a middleware
//     doesn’t finish by sending a response, calling `next()` signals Express to pass the same
//     exact `req` and `res` objects to the next middleware function.
//
// Middleware functions typically form a chain where the same `req` and `res` objects are
// passed sequentially:
// middleware1(req, res, next) -> middleware2(req, res, next) ->
// middleware3(req, res, next) -> route handler(req, res)

const express = require("express");
const app = express();

// 3. Built-in Middleware `express.json()`:
//
// - Parses incoming HTTP requests containing JSON-formatted payloads.
// - Converts JSON payloads into JavaScript objects automatically.
// - Attaches resulting JavaScript objects to the `req.body` property for use in subsequent
//   middleware or route handlers.
// - Operates on the `req` object created for the specific request during middleware invocation,
//   then automatically invokes `next()` internally to pass the same `req` and `res` objects
//   to the next middleware in the chain.
// - Does not terminate the request-response cycle (never directly returns a response itself);
//   it relies on subsequent middleware or handlers to complete the response.
//
// Using `app.use()` registers middleware globally, so it will handle every incoming request
// by parsing its body as JSON.
app.use(express.json());

// 4. Route handlers as middleware:
//
// - Route handlers in Express (like `app.get()`, `app.post()` etc.) are special middleware
//   functions that receive the same `req` and `res` objects passed through the middleware chain.
// - Typically terminate the request-response cycle by returning a response directly to the
//   client (e.g., `res.send()`), using the `res` object that may have been modified by prior
//   middleware.
// - Unlike typical middleware, these handlers usually don’t call `next()`, as they explicitly
//   end the cycle rather than passing control onward.

app.get("/", (req, res) => {
  res.send("Hello World");
});

// 5. Server Port Configuration:
//
// - Sets port configuration explicitly defined in `.env`, or defaults gracefully to port `3000`.
// - Note: Consider renaming `route` to `port` for clarity, as this variable represents the
//   server’s listening port, not a route path.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
