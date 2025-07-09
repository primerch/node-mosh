import mongoose from "mongoose";

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("✅"))
  .catch((e) => console.log(e, "❎"));

// Schema and model
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

// Delete functions
async function deleteOneCourseById(id) {
  return await Course.deleteOne({ _id: id });
}

async function deleteManyCourses() {
  return await Course.deleteMany({ isPublished: 1 });
}

async function deleteAndReturnCourse(id) {
  return await Course.findByIdAndDelete({ _id: id });
}

// Main execution
async function run() {
  const id = "5a68fdc3615eda645bc6bdec";

  // const result = await deleteOneCourseById(id);
  // console.log(result);

  const r = await deleteManyCourses();
  console.log(r);

  // const course = await deleteAndReturnCourse(id);
  // console.log(course);
}

run()
  .then(() => {
    console.log("RUN FINISH");
  })
  .catch((e) => console.log(e, "ERROR OCCURS"));
