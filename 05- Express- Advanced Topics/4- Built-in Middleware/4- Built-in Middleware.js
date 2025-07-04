// ========================================
// EXPRESS MIDDLEWARE PATTERNS OVERVIEW
// ========================================

// PATTERN 1: Direct Middleware Function
// ┌─────────────────────────────────────┐
// │ function auth(req, res, next) {...} │
// │ app.use(auth); ← Pass directly      │
// └─────────────────────────────────────┘

// PATTERN 2: Factory Function (Returns Middleware)
// ┌─────────────────────────────────────────────────────┐
// │ function jsonParser(options = {}) {                 │
// │   return function(req, res, next) { // ← ACTUAL MW  │
// │     // Parse JSON logic here                        │
// │   };                                                │
// │ }                                                   │
// │ app.use(jsonParser()); ← Call factory to get MW    │
// └─────────────────────────────────────────────────────┘

// Factory Function Example Implementation:
function json(options = {}) {
  // This is the FACTORY function - it creates middleware

  // RETURN the actual middleware function
  return function (req, res, next) {
    // This returned function is the ACTUAL middleware
    if (req.headers["content-type"] === "application/json") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        try {
          req.body = JSON.parse(body);
          next(); // Continue to next middleware
        } catch (err) {
          next(err); // Pass error to error handler
        }
      });
    } else {
      next(); // Skip JSON parsing, continue
    }
  };
}

// ========================================
// BUILT-IN MIDDLEWARE EXAMPLES
// ========================================

// #1: express.json() - Parse JSON Request Bodies
// ┌─────────────────────────────────────┐
// │ Content-Type: application/json      │
// │ { "name": "Node.js" }               │
// │           ↓                         │
// │ req.body = { name: "Node.js" }      │
// └─────────────────────────────────────┘

// const express = require("express");
// const app = express();
//
// app.use(express.json()); // Factory function - returns middleware
//
// const courses = [
//   { id: 1, name: "JavaScript" },
//   { id: 2, name: "TypeScript" },
//   { id: 3, name: "MySQL" },
// ];
//
// app.get("/api/courses", (req, res) => res.send(courses));
// app.post("/api/courses", (req, res) => {
//   const newCourse = { id: courses.length + 1, name: req.body.name };
//
//   courses.push(newCourse);
//
//   res.send(newCourse);
// });
//
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on ${port}`));

// #2: express.urlencoded() - Parse URL-Encoded Form Data
// ┌─────────────────────────────────────────────────┐
// │ Content-Type: application/x-www-form-urlencoded │
// │ name=Node.js&duration=40+hours                  │
// │                    ↓                            │
// │ req.body = { name: "Node.js", duration: "40 hours" } │
// └─────────────────────────────────────────────────┘
// Note: Less common in modern APIs, mainly used for HTML forms

// const express = require("express");
// const app = express();
//
// app.use(express.urlencoded({ extended: true })); // extended: true = rich objects/arrays
//
// const courses = [
//   { id: 1, name: "JavaScript" },
//   { id: 2, name: "TypeScript" },
//   { id: 3, name: "MySQL" },
// ];
//
// app.get("/api/courses", (req, res) => res.send(courses));
// app.post("/api/courses", (req, res) => {
//   const newCourse = { id: courses.length + 1, name: req.body.name };
//
//   courses.push(newCourse);
//
//   res.send(newCourse);
// });
//
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on ${port}`));

// #3: express.static() - Serve Static Files
// ┌─────────────────────────────────────────────────┐
// │ GET /readme.txt                                 │
// │       ↓                                         │
// │ Serves: ./public/readme.txt                     │
// │                                                 │
// │ GET /images/logo.png                            │
// │       ↓                                         │
// │ Serves: ./public/images/logo.png                │
// └─────────────────────────────────────────────────┘

const express = require("express");
const app = express();

// Serve all files from 'public' directory
// URL path maps directly to file structure
app.use(express.static("public"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
