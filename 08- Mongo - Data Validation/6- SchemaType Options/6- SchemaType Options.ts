import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("✅"))
  .catch((e) => console.log("🔴"));

const courseSchema = new mongoose.Schema({
  name: { type: String, lowercase: true, uppercase: true, trim: true },
  price: {
    type: Number,
    set: (v) => Math.round(v),
    get: (v) => Math.round(v),
  },
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const newCourse = new Course({
    name: "reacher",
    price: 15.8,
  });

  const result = await newCourse.save();
  console.log(result);
  console.log(result.price);
}

createCourse().catch((e) => console.log(e));
