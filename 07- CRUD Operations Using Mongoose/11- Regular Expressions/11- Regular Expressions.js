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

async function getUser() {
  // 1. Author starts with "R"
  // const courses = await Course.find({ author: /^R/ });

  // 2. Author ends with "r" (case-insensitive)
  // const courses = await Course.find({ author: /r$/i });

  // 3. Author contains "Reacher" (case-insensitive)
  const courses = await Course.find({ author: /Reacher/i });

  console.log(courses);
}

getUser();
