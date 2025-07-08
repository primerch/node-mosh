import mongoose from "mongoose";

// Connect to local MongoDB instance
mongoose
  .connect("mongodb://localhost/mongodb")
  .then(() => console.log("Successful Connected..."))
  .catch((e) => console.log("Fail to Connect...", e));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now() },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  // Find courses where author is "Reacher" AND isPublished is true
  const courses = await Course.find().and([
    { author: "Reacher" },
    { isPublished: true },
  ]);

  console.log(courses);
}

getCourses();
