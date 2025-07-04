const express = require("express");
const app = express();

// ===== WHAT IS CONFIGURATION? =====
// Configuration = settings that control how your app behaves
// Examples: database URLs, API keys, port numbers, feature flags
// Different environments (development, production) need different settings

// ===== STEP 1: Load the Config Package =====
const config = require("config");

// The config package automatically looks for JSON files in a /config folder:
// - default.json (base settings for all environments)
// - development.json (settings specific to development)
// - production.json (settings specific to production)
// - custom-environment-variables.json (maps environment variables to config paths)

// Get a value from config files
console.log(`Application Name: ${config.get("name")}`);

// ===== STEP 2: How Environment Selection Works =====
// The NODE_ENV environment variable tells config which environment-specific file to load
//
// To switch environments in terminal:
// export NODE_ENV=development  (loads default.json THEN development.json)
// export NODE_ENV=production   (loads default.json THEN production.json)
//
// IMPORTANT: If NODE_ENV is not set, config defaults to using 'development'
// The environment-specific file VALUES OVERRIDE the default.json values

// ===== STEP 3: Security Best Practice - Never Store Secrets in JSON Files! =====
// ❌ BAD: Putting passwords directly in development.json or production.json
// ✅ GOOD: Store secrets as environment variables, then map them to config
//
// You need BOTH steps to use environment variables with config:
//
// STEP A: Set environment variable in terminal
// export APP_MAIL_PASSWORD=your_secret_password
//
// STEP B: Create mapping in custom-environment-variables.json
// This file tells config: "when someone calls config.get('mail.password'),
// check the APP_MAIL_PASSWORD environment variable first"
//
// Without the mapping file, config won't know to check environment variables!

// ===== HOW CONFIG.GET() PRIORITY WORKS =====
// When you call config.get('mail.password'), config checks in this order:
//
// 1. Environment Variable (HIGHEST priority)
//    - Only if mapped in custom-environment-variables.json
//    - Checks if the mapped environment variable (like APP_MAIL_PASSWORD) is set
// 2. Environment-specific file (MEDIUM priority)
//    - Checks development.json or production.json (based on NODE_ENV)
// 3. Default file (LOWEST priority)
//    - Checks default.json as final fallback
//
// First match wins! Later sources are ignored if earlier ones have the value

console.log(`Mail host: ${config.get("mail.host")}`);
console.log(`Mail password: ${config.get("mail.password")}`);

// ===== PORT CONFIGURATION =====
// This example shows direct environment variable access (not through config)
// process.env.PORT directly reads the PORT environment variable
// This bypasses the config package entirely
//
// Alternative: You could map PORT in custom-environment-variables.json
// and use config.get('server.port') instead
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}`));

// ===== CORRECTED SUMMARY FOR BEGINNERS =====
// 1. Create /config folder with JSON files for different environments
// 2. custom-environment-variables.json is REQUIRED to use environment variables
//    - It maps environment variable names to config paths
//    - Without this file, config ignores environment variables
// 3. Set NODE_ENV to switch between development/production environment files
// 4. Never put passwords/secrets directly in JSON files - use environment variables
// 5. Environment variables (when mapped) always override JSON file values
// 6. Files load in order: default.json → {environment}.json → environment variables
