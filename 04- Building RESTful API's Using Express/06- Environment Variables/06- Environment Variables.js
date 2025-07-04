// Import and initialize Express
const express = require("express");
const app = express();

// Load environment variables from .env file (requires: npm install dotenv)
require("dotenv").config();

// Define application routes
app.get("/", (req, res) => res.send("Hello World"));
app.get("/api/courses", (req, res) => res.send([1, 2, 3]));

// Set the port from environment variable or default to 3000
const port = process.env.PORT || 3000;

// Start the server and log the port
app.listen(port, () => console.log(`Listening on port ${port}`));
