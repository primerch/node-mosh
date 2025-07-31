const { z } = require("zod");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const zodSchema = z.object({ name: z.string().min(3) });

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("✅"))
  .catch((e) => console.log("🔴"));

const mongooseSchema = new mongoose.Schema({
  id: Number,
  name: { type: String, min: 3 },
});

const Genre = mongoose.model("Genre", mongooseSchema);

const genres = [
  // { id: 1, name: "Action" },
  // { id: 2, name: "Horror" },
  // { id: 3, name: "Romance" },
];

// GET
router.get("/", (req, res) => {
  res.send(genres);
});

// POST
router.post("/", async (req, res) => {
  try {
    const validatedData = zodSchema.parse(req.body);

    const newGenre = { id: genres.length + 1, name: validatedData.name };

    const newMongoGenre = new Genre(newGenre);
    await newMongoGenre.save();

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
    const validatedData = zodSchema.parse(req.body);
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
