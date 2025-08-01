require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const { genreRouter } = require("./genres");
const app = express();

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("✅"))
  .catch((e) => console.log("🔴", e));

app.use(express.json());
app.use("/api/genres", genreRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
