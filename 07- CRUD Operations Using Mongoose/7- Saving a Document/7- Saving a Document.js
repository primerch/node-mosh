import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/mongodb")
  .then(() => console.log("Success Connected"))
  .catch((e) => console.log("Fail to Connect", e));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  Date: { type: Date, default: Date.now() },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);
const course = new Course({
  name: "Node.js",
  author: "Reacher",
  tags: ["Node", "Backend"],
  isPublished: true,
});

const c = await course.save();
console.log(c);
