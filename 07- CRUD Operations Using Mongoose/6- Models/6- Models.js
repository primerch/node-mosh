const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongodb")
  .then(() => console.log("Success"))
  .catch((e) => console.log("Fail", e));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now() },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

const course = new Course({
  name: "Node.js",
  author: "Reacher",
  tags: ["node", "backend"],
  date: Date.now(),
  isPublished: true,
});
