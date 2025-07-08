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
  // Query operators:
  // $eq  - Equal to a value
  // $ne  - Not equal to a value
  // $gt  - Greater than a value
  // $gte - Greater than or equal to a value
  // $lt  - Less than a value
  // $lte - Less than or equal to a value
  // $in  - In an array of values
  // $nin - Not in an array of values

  // Example queries:
  // Find courses with price equal to 47
  // const courses = await Course.find({ price: 47 });

  // Find courses with price greater than 47
  // const courses = await Course.find({ price: { $gt: 47 } });

  // Find courses with price between 10 and 20 (inclusive)
  // const courses = await Course.find({ price: { $gte: 10, $lte: 20 } });

  // Find courses with price equal to 10, 20, or 47
  // const courses = await Course.find({ price: { $in: [10, 20, 47] } });

  console.log(courses);
}

getCourses();
