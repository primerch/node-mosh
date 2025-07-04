// ========================================
// THIRD-PARTY MIDDLEWARE EXAMPLES
// ========================================

const express = require("express");
const app = express();

// Sample data for demonstration
const courses = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "TypeScript" },
  { id: 3, name: "MySQL" },
];

// ========================================
// SECURITY MIDDLEWARE
// ========================================

// 1. Helmet - Security Headers Protection
// ┌─────────────────────────────────────────────────┐
// │ Automatically sets security HTTP headers:       │
// │ • X-Content-Type-Options: nosniff              │
// │ • X-Frame-Options: DENY                        │
// │ • X-XSS-Protection: 1; mode=block              │
// │ • Strict-Transport-Security (HTTPS)            │
// │ • Content-Security-Policy                      │
// └─────────────────────────────────────────────────┘
const helmet = require("helmet");
app.use(helmet()); // Protects against common web vulnerabilities

// ========================================
// LOGGING MIDDLEWARE
// ========================================

// 2. Morgan - HTTP Request Logger
// ┌─────────────────────────────────────────────────┐
// │ Logs every HTTP request with details:          │
// │                                                 │
// │ Format: "tiny"                                  │
// │ Output: GET /api/courses 200 - 15ms           │
// │         POST /api/courses 201 - 23ms          │
// │                                                 │
// │ Other formats: 'combined', 'common', 'dev'     │
// └─────────────────────────────────────────────────┘
const morgan = require("morgan");
app.use(morgan("tiny")); // Logs: METHOD URL STATUS - RESPONSE_TIME

// ========================================
// API ROUTES
// ========================================

// GET all courses
app.get("/api/courses", (req, res) => res.send(courses));

// ========================================
// SERVER STARTUP
// ========================================

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`📊 Logging enabled with Morgan`);
  console.log(`🔒 Security headers enabled with Helmet`);
});
