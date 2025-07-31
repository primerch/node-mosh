const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("✅"))
  .catch((e) => console.log("🔴"));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 15,
    // match: /pattern/
  },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "network"],
  },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    min: 10,
    max: 200,
    required: function () {
      return this.isPublished;
    },
  },
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const newCourse = new Course({
    name: "OK",
    date: Date.now(),
    category: "------",
    tags: ["JavaScript", "Frontend"],
    author: "Reacher",
    isPublished: true,
    // price: 999,
  });
  try {
    const result = await newCourse.save();
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
}

createCourse().catch((e) => console.log(e.message));
