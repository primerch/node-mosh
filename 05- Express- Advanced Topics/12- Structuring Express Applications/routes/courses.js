const express = require("express");
const { z, ZodError } = require("zod/v4");
const router = express.Router();
const debug = require("debug");

const courses = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
];

// GET http://localhost:3000/api/courses
router.get("/", (req, res) => res.status(200).send(courses));

// GET http://localhost:3000/api/course/3
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) return res.status(400).send("Cannot find the course ID");
  res.status(200).send(course);
});

//POST http://localhost:3000/api/courses
router.post("/", (req, res) => {
  const body = req.body;
  const schema = z.object({ name: z.string().min(3) });
  try {
    const validatedData = schema.parse(body);
    const newCourse = { id: courses.length + 1, name: validatedData.name };
    courses.push(newCourse);
    res.status(200).send(courses);
  } catch (e) {
    if (e instanceof ZodError) {
      return res.status(400).send(e.issues[0].message);
    } else {
      return res.status(500).send(e);
    }
  }
});

// PUT http://localhost:3000/api/courses/3
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const course = courses.find((c) => c.id === id);
  if (!course) return res.status(400).send("Cannot find the course ID");

  const schema = z.object({ name: z.string().min(3) });
  try {
    const validatedData = schema.parse(req.body);
    course.name = validatedData.name;

    res.status(200).send(course);
  } catch (e) {
    if (e instanceof z.ZodError) {
      return res.status(400).send(e.issues[0].message);
    } else {
      return res.status(500).send("Internal Server Error");
    }
  }
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const course = courses.find((c) => c.id === id);
  if (!course)
    return res
      .status(400)
      .send("Cannot find the course your are trying to delete");

  return res.status(200).send(courses.splice(courses.indexOf(course), 1)[0]);
});

module.exports = router;
