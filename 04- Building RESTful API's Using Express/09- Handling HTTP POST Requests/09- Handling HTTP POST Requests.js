const express = require("express");
const app = express();

// Enable JSON parsing middleware for request bodies
app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

// POST http://localhost:3000/api/courses
// Content-Type: application/json
//
// {
//   "name":"reactjs"
// }
app.get("/api/courses", (req, res) => res.send(courses));
app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening: ${port}`));
