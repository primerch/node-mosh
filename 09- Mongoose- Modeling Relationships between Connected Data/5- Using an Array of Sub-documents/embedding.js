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
// 📚 Course Schema with Authors Array
// ==========================
const Course = mongoose.model(
  'Course',
  new mongoose.Schema({
    name: String,
    authors: [authorSchema], // 📌 Embedding multiple authors as array
  })
);

// ==========================
// ✍️ Create Course with Authors
// ==========================
async function createCourse(name, authors) {
  const course = new Course({ name, authors });
  console.log(await course.save());
}

// ==========================
// ➕ Add Author to Course
// ==========================
async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author); // 👥 Push new subdocument into array
  await course.save();
}

// ==========================
// ➖ Remove Author from Course
// ==========================
async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId); // 🎯 Find subdocument by _id
  author.deleteOne(); // ❌ Remove subdocument from array
  await course.save();
}

// ==========================
// 🚀 Usage
// ==========================
// createCourse('Node Course', [
//   new Author({ name: 'Mosh' }),
//   new Author({ name: 'John' }),
// ]);
// addAuthor('68c10a000c45e0dbb0debf7d', new Author({ name: 'Amy' }));
// removeAuthor('68c10a000c45e0dbb0debf7d', '68c10c33a9e9e89c1123be7b');
