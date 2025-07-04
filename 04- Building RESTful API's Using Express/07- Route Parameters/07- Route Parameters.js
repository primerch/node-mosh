const express = require("express");
const app = express();

// ROUTE PARAMETERS
// ===============
// Route parameters are named URL segments used to capture values at specific positions in the URL.
//
// Example: http://localhost:3000/users/john/profile
// Output: {"a":"users","b":"john","c":"profile"}
app.get("/:a/:b/:c", (req, res) => {
  res.send(req.params);
});

// QUERY PARAMETERS
// ===============
// Query parameters are key-value pairs specified after the '?' in the URL.
// They're optional and can be accessed via req.query object.
//
// Example: http://localhost:3000/courses?sort=name&order=asc
// Output: {"sort":"name","order":"asc"}
app.get("/courses", (req, res) => {
  res.send(req.query);
});

// Root route
// Example: http://localhost:3000/
// Output: "Welcome to the Express server"
app.get("/", (req, res) => {
  res.send("Welcome to the Express server");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
