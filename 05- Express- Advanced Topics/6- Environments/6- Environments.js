const express = require("express");
const app = express();
const morgan = require("morgan");

// Sample data for demonstration
const courses = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "TypeScript" },
  { id: 3, name: "MySQL" },
];

// ========================================
// ENVIRONMENT DETECTION
// ========================================

// Express convenience method for checking NODE_ENV
// ┌─────────────────────────────────────────────────┐
// │ app.get('env') does the following:              │
// │                                                 │
// │ 1. Checks process.env.NODE_ENV                  │
// │ 2. If undefined, defaults to 'development'      │
// │ 3. Returns the environment string               │
// │                                                 │
// │ Common values: 'development', 'production'      │
// └─────────────────────────────────────────────────┘
console.log(`Current environment: ${app.get("env")}`);

// ========================================
// CONDITIONAL MIDDLEWARE
// ========================================

// Enable detailed logging only during development
// ┌─────────────────────────────────────────────────┐
// │ Why conditionally load middleware?              │
// │                                                 │
// │ DEVELOPMENT:                                    │
// │ • Detailed request logs help with debugging    │
// │ • Performance impact is acceptable             │
// │                                                 │
// │ PRODUCTION:                                     │
// │ • Reduced logging for better performance       │
// │ • Less verbose output in production logs       │
// │ • Smaller bundle size (middleware not loaded)  │
// └─────────────────────────────────────────────────┘
if (app.get("env") === "development") {
  app.use(morgan("tiny")); // Log: GET /api/courses 200 - 15ms
  console.log("🔍 Morgan logging enabled for development");
}

// ========================================
// API ROUTES
// ========================================

// Get all courses endpoint
app.get("/api/courses", (req, res) => {
  console.log("📚 Courses endpoint accessed");
  res.send(courses);
});

// ========================================
// ENVIRONMENT VARIABLE CONFIGURATION
// ========================================

// How to set environment variables:
// ┌─────────────────────────────────────────────────┐
// │ TERMINAL COMMANDS (per session):               │
// │                                                 │
// │ macOS/Linux:                                    │
// │   export NODE_ENV=production                    │
// │   export PORT=8000                              │
// │                                                 │
// │ BETTER APPROACH - Use .env file:               │
// │   NODE_ENV=production                           │
// │   PORT=8000                                     │
// │                                                 │
// │ Then in your app: require('dotenv').config()   │
// └─────────────────────────────────────────────────┘

// Dynamic port configuration
// Uses PORT from environment variables, fallback to 3000
const port = process.env.PORT || 3000;

// ========================================
// SERVER STARTUP
// ========================================

app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
  console.log(`🌍 Environment: ${app.get("env")}`);

  // Environment-specific startup messages
  if (app.get("env") === "development") {
    console.log("🛠️  Development mode: Full logging enabled");
    console.log("💡 To switch to production: export NODE_ENV=production");
  } else {
    console.log("🏭 Production mode: Optimized for performance");
  }
});
