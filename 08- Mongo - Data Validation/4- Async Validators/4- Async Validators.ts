import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("✅"))
  .catch((e) => console.log("🔴"));

const courseSchema = new mongoose.Schema({
  tags: {
    type: [String],
    validate: {
      validator: (value) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(value && value.length !== 0);
          }, 4000);
        }),
      message: "Should be at least one tag",
    },
  },
  date: { type: Date, default: Date.now },
  name: String,
  author: String,
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
  },
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const newCourse = new Course();
  try {
    const result = await newCourse.save();
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
}

createCourse().catch((e) => console.log(e));
