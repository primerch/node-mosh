const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("✅"))
  .catch((e) => console.log(e, "🔴"));

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tags: { type: [String] },
  date: { type: Date, default: Date.now },
  author: String,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const newCourse = new Course({
    // name: "Angular Course",
    author: "REACHER",
    tags: ["angular", "frontend"],
    isPublished: true,
    price: 15,
  });

  try {
    const result = await newCourse.save();
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
}

createCourse();
