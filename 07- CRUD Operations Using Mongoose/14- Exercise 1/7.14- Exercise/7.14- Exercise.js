// Exercise:
// 1. Get all published backend courses,
// 2. Sort them by their name,
// 3. Pick only their name and author,
// 4. and display them

import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("🆗"))
  .catch((e) => console.log("☠️", e));

const courseSchema = new mongoose.Schema({
  tags: [String],
  data: { type: Date, default: Date.now() },
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourse() {
  return await Course.find({ tags: "backend", isPublished: true })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
}

async function run() {
  const result = await getCourse();
  console.log(result);
}

run();
