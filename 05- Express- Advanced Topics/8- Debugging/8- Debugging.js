const express = require("express");
const app = express();

// ===== WHAT IS THE DEBUG PACKAGE? =====
// The debug package helps you see what's happening inside your app
// It's like adding temporary console.log() messages that you can turn on/off
// Perfect for finding bugs or understanding how your code works

const debug = require("debug");

// ===== STEP 1: CREATE DEBUG "CATEGORIES" (NAMESPACES) =====
// Think of namespaces like different TV channels for your debug messages
// Each channel shows messages about a specific part of your app

const startupDebugger = debug("app:startup"); // Channel for app startup messages
const dbDebugger = debug("app:db"); // Channel for database messages

// When you call debug("app:startup"), you get back a function
// This function can print debug messages, but ONLY when that channel is "turned on"

const morgan = require("morgan");

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  // This debug message will only show if we "turn on" the app:startup channel
  startupDebugger("Morgan enabled...");
}

// ===== USING YOUR DEBUG CHANNELS =====
// This message goes to the "app:db" channel
// It will only show if we turn on database debugging
dbDebugger("Connected to database...");

// ===== HOW TO SEE DEBUG MESSAGES (TURN ON CHANNELS) =====
// By default, NO debug messages show (all channels are off)
// You control which messages appear using the DEBUG environment variable

// METHOD 1: Turn on ONE channel at a time
// In terminal: export DEBUG=app:startup
// Result: Only shows "Morgan enabled..." message

// METHOD 2: Turn on MULTIPLE channels
// In terminal: export DEBUG=app:startup,app:db
// Result: Shows both "Morgan enabled..." AND "Connected to database..." messages

// METHOD 3: Turn on ALL channels that start with "app:"
// In terminal: export DEBUG=app:*
// Result: Shows ALL your app debug messages (startup, db, etc.)

// METHOD 4: Turn off ALL debug messages (for production)
// In terminal: export DEBUG=
// Result: No debug messages show (better performance)

// ===== QUICK WAY: SET DEBUG WHEN RUNNING YOUR APP =====
// Instead of using export command first, you can do it all in one line:
//
// Show only database messages:
// DEBUG=app:db nodemon index.js
//
// Show only startup messages:
// DEBUG=app:startup nodemon index.js
//
// Show all app messages:
// DEBUG=app:* nodemon index.js
//
// Show no messages (normal running):
// nodemon index.js

// ===== WHY USE DEBUG INSTEAD OF console.log()? =====
// ❌ console.log() always shows (even in production) - messy and slow
// ✅ debug() only shows when you want to see it - clean and fast
// ✅ You can organize messages by category (startup, database, etc.)
// ✅ Easy to turn off for production (no performance impact)

// ===== ENVIRONMENT VARIABLES EXPLAINED =====
// Environment variables are settings that exist outside your code
// They let you configure your app without changing the code itself
// Perfect for different environments (development, production, testing)

// WAYS TO SET ENVIRONMENT VARIABLES:
// 1. Terminal (temporary - only for current session):
//    export DEBUG=app:*
//    export NODE_ENV=development
//    node index.js

// 2. .env file (recommended for development):
//    Create .env file in project root:
//    DEBUG=app:*
//    NODE_ENV=development
//    PORT=3000
//
//    Then install: npm install dotenv
//    Add to top of this file: require('dotenv').config();

// 3. One-line execution (quick testing):
//    DEBUG=app:* NODE_ENV=development node index.js

// 4. Package.json scripts (team-friendly):
//    "scripts": {
//      "dev": "DEBUG=app:* NODE_ENV=development node index.js",
//      "start": "node index.js"
//    }
//    Then run: npm run dev

// ===== NAMESPACES VS SESSIONS =====
// NAMESPACE = Logical grouping/categorization of debug messages
// - Like TV channels - you choose which categories to watch
// - Helps organize debug output by feature (startup, database, auth, etc.)
// - Static labeling system that never changes
// - Example: debug("app:auth") creates "app:auth" namespace
//
// SESSION = Temporary user context/state (completely different concept)
// - Remembers user information between HTTP requests
// - Dynamic data that changes per user
// - Example: req.session.userId = 123 (stores user ID)
//
// Think: Namespace = TV channel categories, Session = your viewing history

// ===== DEBUG PACKAGE VS IDE BREAKPOINTS =====
// Both are valuable tools used in different situations:

// IDE BREAKPOINTS (WebStorm) - Best for:
// ✅ Deep investigation of specific bugs
// ✅ Stepping through code line by line
// ✅ Examining variable values at exact moments
// ✅ Understanding complex logic flow
// ❌ Can't use in production (would freeze server)
// ❌ Impractical for continuously running servers
// ❌ Individual developer tool (not shared)

// DEBUG PACKAGE - Best for:
// ✅ Server applications that run continuously
// ✅ Production monitoring and logging
// ✅ Team collaboration (debug messages in code)
// ✅ Selective logging (turn categories on/off)
// ✅ Performance monitoring without stopping execution
// ❌ Less detailed than stepping through with breakpoints

// REAL-WORLD USAGE:
// Professional developers use BOTH tools:
// - Breakpoints for deep bug investigation
// - Debug package for ongoing monitoring and production insights
// - Combined approach: debug messages + breakpoints when needed

// WHEN TO USE WHAT:
// Learning new code? → Use breakpoints to step through
// Complex algorithm bug? → Use breakpoints to examine variables
// Server monitoring? → Use debug package (can't stop server)
// Production issues? → Use debug package (can turn on remotely)
// Team debugging? → Use debug package (shared in codebase)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));

// ===== COMPLETE BEGINNER SUMMARY =====
// 1. ENVIRONMENT VARIABLES = Settings outside your code
//    - Set via terminal, .env file, or package.json scripts
//    - Different settings for dev/production environments
//
// 2. DEBUG NAMESPACES = Categories for debug messages
//    - Like TV channels - choose which ones to watch
//    - Organize by feature: app:startup, app:db, app:auth
//
// 3. DEBUG vs BREAKPOINTS = Different tools for different jobs
//    - Debug package: Always-on monitoring, production-safe
//    - IDE breakpoints: Deep investigation, development-only
//
// 4. PROFESSIONAL WORKFLOW:
//    - Development: DEBUG=app:* (see everything)
//    - Production: DEBUG= (see nothing) or DEBUG=app:error (only errors)
//    - Complex bugs: Use both debug messages AND breakpoints
//
// Think of debug like a security camera system - always recording,
// you choose which cameras (namespaces) to watch!
