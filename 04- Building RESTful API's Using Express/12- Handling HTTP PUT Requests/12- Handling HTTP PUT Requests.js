const express = require("express");
const { z } = require("zod/v4");
const app = express();
app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/api/courses", (req, res) => res.send(courses));

const schema = z.object({
  name: z.string().min(2),
});

app.put("/api/courses/:id", (req, res) => {
  try {
    // 1. Check if course exists in the database
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }

    // 2. Update the course name with validated data
    const validatedData = schema.parse(req.body);
    course.name = validatedData.name;

    // 3. Return the updated course to the client
    res.send(course);
  } catch (err) {
    if (err instanceof z.ZodError) {
      res.status(400).send(err.errors[0].message); // a. Return 400 Bad Request for validation errors
    } else {
      res.status(500).send("Internal Server Error"); // b. Return 500 for unexpected errors
    }
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
