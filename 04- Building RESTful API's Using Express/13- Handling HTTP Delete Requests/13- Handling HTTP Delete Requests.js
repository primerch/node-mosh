const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/api/courses", (req, res) => res.send(courses));
app.delete("/api/courses/:id", (req, res) => {
  // 1. Look up the course
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  // Return 404 if course not found (shorthand for setting status, sending response, and returning)
  if (!course) return res.status(404).send("Course not found");

  // 2. Delete and return the same course
  return res.send(courses.splice(courses.indexOf(course), 1)[0]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
