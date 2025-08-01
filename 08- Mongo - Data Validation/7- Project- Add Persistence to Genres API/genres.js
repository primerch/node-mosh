const debug = require("debug")("app:debug");
const { z } = require("zod");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const zodSchema = z.object({ name: z.string().min(3) });

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("✅"))
  .catch((e) => console.log("🔴", e));

const mongooseSchema = new mongoose.Schema({
  name: { type: String, minLength: 3, required: true },
});

const Genre = mongoose.model("Genre", mongooseSchema);

const genres = [
  // { id: 1, name: "Action" },
  // { id: 2, name: "Horror" },
  // { id: 3, name: "Romance" },
];

// GET
router.get("/", async (req, res) => {
  const result = await Genre.find();
  res.send(result);
});

// POST
router.post("/", async (req, res) => {
  try {
    const validatedData = zodSchema.parse(req.body);

    const newMongoGenre = new Genre({ name: validatedData.name });
    await newMongoGenre.save();

    res.status(200).send(newMongoGenre);
  } catch (e) {
    if (e instanceof z.ZodError) {
      const errorMessages = e.issues.map((issue) => issue.message);
      res.status(400).send("ZOD🔴\n" + errorMessages.join(", "));
    } else if (e.name === "ValidationError") {
      return res.status(400).send("MONGOOSE🔴\n" + e.message);
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

// PUT
router.put("/:id", async (req, res) => {
  // const genre = genres.find((genre) => genre.id === parseInt(req.params.id));
  const genre = await Genre.findById(req.params.id);

  if (!genre) {
    return res.status(404).send("Cannot find the genre you are looking for");
  }

  try {
    const validatedData = zodSchema.parse(req.body);
    const result = await Genre.findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: validatedData.name,
      },
      { new: true },
    );
    res.status(200).send(result);
  } catch (e) {
    if (e instanceof z.ZodError) {
      const errorMessages = e.issues.map((issue) => issue.message);
      res.status(400).send("ZOD🔴\n" + errorMessages.join(", "));
    } else if (e.name === "ValidationError") {
      return res.status(400).send("MONGOOSE🔴\n" + e.message);
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  // const genre = genres.find((genre) => genre.id === parseInt(req.params.id));
  const genre = await Genre.findById(req.params.id);
  if (!genre)
    return res
      .status(404)
      .send("ZOD🔴\nCannot find the genre you are looking for");

  const result = await Genre.findByIdAndDelete(req.params.id);
  res.status(200).send(result);
});

module.exports.router = router;
