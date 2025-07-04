// ===========================================================
//            A. Simple Use Case - HTTP Server & Connection Event
// ===========================================================
// In Node.js, the HTTP server is like a phone operator who handles incoming calls (connections).
// We hire the operator, give them instructions, and then provide a phone line to start working.

// Hire the phone operator (create the server).
const http = require("http");
const simpleServer = http.createServer();

// Give the operator instructions: "When someone calls (connects), say 'New Connection...'".
simpleServer.on("connection", (socket) => {
  console.log("New Connection...");
});

// Provide the operator with a phone line (port 3000) and tell them to start taking calls.
simpleServer.listen(3000);
console.log("Simple Server: Listening on port 3000...");

// Note: This server only logs connections, like an operator who answers but doesn’t talk much.

// ===========================================================
//            B. Real World Case - HTTP Server with Request Handling
// ===========================================================
// Here, the operator not only answers calls but also responds based on what the caller asks for.
// We hire the operator and give them detailed instructions right away.

// Hire the operator and provide instructions for handling calls (requests).
const realServer = http.createServer((req, res) => {
  // If the caller asks for the homepage ("/"), say "Hello World".
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  // If the caller asks for "/api/courses", send a list of courses as a JSON string.
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

// Provide the operator with a phone line (port 3000) and start taking calls.
realServer.listen(3000);
console.log("Real World Server: Listening on port 3000...");

// Add an extra instruction: "Log 'New Connection...' for every call (connection)".
realServer.on("connection", (socket) => {
  console.log("New Connection...");
});
