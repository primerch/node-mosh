const express = require("express");
const app = express();

// Handle requests to the root route
app.get("/", (req, res) => {
  res.send("Hello World!"); // send() = write() + end()
});

// Handle requests to "/api/courses"
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
