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

// 1. Update with updateOne
async function updateCourseWithUpdateOne(id) {
  const result = await Course.updateOne(
    { _id: id },
    {
      $set: {
        author: "Reacher",
        isPublished: false,
      },
    },
  );
  return result;
}

// 2. Update with findByIdAndUpdate
async function updateCourseWithFindByIdAndUpdate(id) {
  const course = await Course.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        author: "Reacher",
        isPublished: false,
      },
    },
    { new: true },
  );
  return course;
}

async function run() {
  const id = "5a68fde3f09ad7646ddec17e";

  const updateOneResult = await updateCourseWithUpdateOne(id);
  console.log("updateOne result:", updateOneResult);

  const findByIdAndUpdateResult = await updateCourseWithFindByIdAndUpdate(id);
  console.log("findByIdAndUpdate result:", findByIdAndUpdateResult);

  mongoose.disconnect();
}

run();
