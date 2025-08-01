const debug = require("debug")("app:debug");
const mongoose = require("mongoose");
const { z } = require("zod");
const express = require("express");
const router = express.Router();

const genreZodSchema = z.object({ name: z.string().min(5).max(50) });

const genreMongooseSchema = new mongoose.Schema({
  name: { type: String, minLength: 5, maxLength: 50, required: true },
});

const Genre = mongoose.model("Genre", genreMongooseSchema);

// GET
router.get("/", async (req, res) => {
  const result = await Genre.find().sort("name");
  res.send(result);
});

// GET BY ID
router.get("/:id", async (req, res) => {
  const genre = await Genre.findById(req.params.id);

  if (!genre)
    return res.status(404).send("Cannot find the genre you are looking for");
  res.send(genre);
});

// POST
router.post("/", async (req, res) => {
  try {
    const validatedData = genreZodSchema.parse(req.body);

    let newMongoGenre = new Genre({ name: validatedData.name });
    newMongoGenre = await newMongoGenre.save();

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
  try {
    const validatedData = genreZodSchema.parse(req.body);

    const updatedGenre = await Genre.findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: validatedData.name,
      },
      { new: true },
    );
    if (!updatedGenre) return res.status(404).send("Cannot find the genre");
    res.status(200).send(updatedGenre);
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
  const deletedGenre = await Genre.findByIdAndDelete(req.params.id);
  if (!deletedGenre)
    return res
      .status(404)
      .send("Cannot find the genre you are trying to delete");

  res.status(200).send(deletedGenre);
});

module.exports.genreRouter = router;
