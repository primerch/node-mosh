// =========================
// 📦 Setup
// =========================
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ Could not connect...', err));

// =========================
// 🧑 Author Model
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
// 📚 Course Model
// =========================
const Course = mongoose.model(
  'Course',
  new mongoose.Schema({
    name: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
    },
  })
);

// =========================
// ✍️ Create Functions
// =========================
async function createAuthor(name, bio, website) {
  console.log(await new Author({ name, bio, website }).save());
}

async function createCourse(name, author) {
  console.log(await new Course({ name, author }).save());
}

// =========================
// 🔍 List Courses
// =========================
async function listCourses() {
  console.log(await Course.find().select('name'));
}

// Usage
createAuthor('Mosh', 'My bio', 'My Website');
createCourse('Node Course', '68c0ed2b2b0a0e5d45d904b6');
// listCourses();
