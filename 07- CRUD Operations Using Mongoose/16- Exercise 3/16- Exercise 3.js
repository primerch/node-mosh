// Get all the published courses that are $15 or more
// or have the word 'by' in their title
// sort by price by descending order
// select name, author, price only

import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log(":😄"))
  .catch((e) => console.log(e, "🙅‍♀️"));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now() },
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  return await Course.find({ isPublished: true })
    .or([{ price: { $gte: 15 } }, { name: /by/i }])
    .sort({ price: -1 })
    .select("name author price");
}

async function run() {
  const result = await getCourses();
  console.log(result);
}

run();
