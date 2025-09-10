// ==========================
// 📦 Setup MongoDB
// ==========================
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ Could not connect to MongoDB...', err));

// ==========================
// 🧑 Author Schema (Embedded)
// ==========================
const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model('Author', authorSchema);

// ==========================
// 📚 Course Schema with Embedded Author
// ==========================
const Course = mongoose.model(
  'Course',
  new mongoose.Schema({
    name: String,
    author: {
      type: authorSchema, // 📌 Embedding Author schema
      required: true, // 🔒 Validation for embedded doc
    },
  })
);

// ==========================
// ✍️ Create a Course with Embedded Author
// ==========================
async function createCourseWithAuthor(name, author) {
  const course = new Course({ name, author });
  console.log(await course.save());
}

// ==========================
// 🔍 List All Courses
// ==========================
async function getAllCourses() {
  console.log(await Course.find());
}

// ==========================
// ✏️ Update Embedded Author (query then modify)
// ==========================
async function updateEmbeddedAuthorByQuery(courseId) {
  const course = await Course.findById(courseId);
  course.author.name = 'ruizhi'; // 👥 Update embedded subdocument
  await course.save();
}

// ==========================
// ✏️ Update Embedded Author Directly
// ==========================
async function updateEmbeddedAuthorDirectly(courseId) {
  await Course.updateOne(
    { _id: courseId },
    { $set: { 'author.name': 'John Smith' } } // 👥 Direct update of embedded doc
  );
}

// ==========================
// 🗑️ Remove Embedded Author
// ==========================
async function removeEmbeddedAuthor(courseId) {
  await Course.updateOne(
    { _id: courseId },
    { $unset: { author: '' } } // ❌ Remove embedded subdocument
  );
}

// Usage examples (uncomment to run)
// createCourseWithAuthor('Node Course', new Author({ name: 'Mosh' }));
// getAllCourses();
// updateEmbeddedAuthorByQuery('68c0fdeef5da857a680c2730');
// updateEmbeddedAuthorDirectly('68c0fdeef5da857a680c2730');
// removeEmbeddedAuthor('68c0fdeef5da857a680c2730');
