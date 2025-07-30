const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("✅"))
  .catch((e) => console.log("🔴"));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  author: String,
  tags: {
    type: [String],
    validate: {
      validator: function (v) {
        // Custom validator: ensures tags array exists and has at least one element
        // 'v' represents the value being validated (the tags array)
        // Returns true if valid, false if invalid
        return v && v.length > 0; // v is truthy (not null, not undefined) AND has length > 0
      },
      message: "A course should have at least one tag", // Error message shown when validation fails
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const newCourse = new Course({
    name: "OK",
    date: Date.now(),
    category: "------",
    tags: null, // This will trigger the custom validation error
    author: "Reacher",
    isPublished: true,
    price: 999,
  });

  try {
    const result = await newCourse.save();
    console.log(result);
  } catch (e) {
    console.log(e.message); // Will display: "A course should have at least one tag"
  }
}

createCourse().catch((e) => console.log(e.message));
