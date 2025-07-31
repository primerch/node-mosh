const { z } = require("zod");
const express = require("express");
const router = express.Router();

const schema = z.object({ name: z.string().min(3) });

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Romance" },
];

// GET
router.get("/", (req, res) => {
  res.send(genres);
});

// POST
router.post("/", (req, res) => {
  try {
    const validatedData = schema.parse(req.body);
    const newGenre = { id: genres.length + 1, name: validatedData.name };
    genres.push(newGenre);
    res.send(newGenre);
  } catch (e) {
    if (e instanceof z.ZodError) {
      const errorMessages = e.issues.map((issue) => issue.message);
      res.status(400).send(errorMessages.join(", "));
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

// PUT
router.put("/:id", (req, res) => {
  const genre = genres.find((genre) => genre.id === parseInt(req.params.id));
  if (!genre) {
    return res.status(404).send("Cannot find the genre you are looking for");
  }

  try {
    const validatedData = schema.parse(req.body);
    genre.name = validatedData.name;
    res.status(200).send(genre);
  } catch (e) {
    if (e instanceof z.ZodError) {
      const errorMessages = e.issues.map((issue) => issue.message);
      res.status(400).send(errorMessages.join(", "));
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

// DELETE
router.delete("/:id", (req, res) => {
  const genre = genres.find((genre) => genre.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("Cannot find the genre you are looking for");

  res.status(200).send(genres.splice(genres.indexOf(genre), 1)[0]);
});

module.exports.router = router;
