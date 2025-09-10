// 1. Using References (Normalization) -> CONSISTENCY
// let author = {
//   name: 'reacher',
// };
// let course = {
//   author: 'id',
// };
//
// =========================
// 📦 Setup
// =========================
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ Connection failed', err));

// =========================
// 🧑 Author Schema
// =========================
const Author = mongoose.model(
  'Author',
  new mongoose.Schema({
    name: String,
    bio: String,
    website: String,
  })
);

// =========================
// 📚 Course Schema (Reference)
// =========================
const Course = mongoose.model(
  'Course',
  new mongoose.Schema({
    name: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }, // 🔗 Reference
  })
);

// =========================
// ✍️ Create Docs
// =========================
async function createAuthor(name, bio, website) {
  console.log(await new Author({ name, bio, website }).save());
}

async function createCourse(name, authorId) {
  console.log(await new Course({ name, author: authorId }).save());
}

// =========================
// 🔍 Query Docs
// =========================
async function listCourses() {
  console.log(await Course.find().select('name author'));
}

// =========================
// 🚀 Usage
// =========================
createAuthor('Mosh', 'My bio', 'My Website');
createCourse('Node Course', '68c0ed2b2b0a0e5d45d904b6');
// listCourses();
