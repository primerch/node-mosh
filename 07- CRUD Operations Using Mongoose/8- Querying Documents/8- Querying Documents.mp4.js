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

async function getCourses() {
  // const courses = await Course.find();
  const courses = await Course.find()
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  // const courses = await Course.find({ author: "Reacher", isPublished: true });

  console.log(courses);
}

getCourses();
