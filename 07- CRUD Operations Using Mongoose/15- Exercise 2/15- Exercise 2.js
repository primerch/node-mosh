// Get all published fronted and backend courses
// Sort them by their price in a descending order
// Pick only their name and author
// And display them
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("✅"))
  .catch((e) => console.log(e, "❎"));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now() },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  return await Course.find({
    isPublished: true,
    tags: { $in: ["frontend", "backend"] },
  })
    .sort({ price: -1 })
    .select("name  author  price");
}

async function run() {
  const result = await getCourses();
  console.log(result);
}

run();
