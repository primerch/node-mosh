import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("✅"))
  .catch((e) => console.log(e, "⛔"));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  return await Course.find();
}

async function updateCourse(id) {
  const course = await Course.findById(id);

  course.isPublished = true;
  course.author = "Reacher";

  return await course.save();
}

async function run() {
  const result = await updateCourse("5a68fdf95db93f6477053ddd");
  console.log(result);
}

run();
