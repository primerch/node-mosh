// ==========================
// 📦 Setup
// ==========================
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Connection failed', err));

// ==========================
// 🧑 Author Schema
// ==========================
const Author = mongoose.model('Author', new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
}));

// ==========================
// 📚 Course Schema (Reference)
// ==========================
const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }, // 🔗 Reference
}));

// ==========================
// ✍️ Create Docs
// ==========================
async function createAuthor(name, bio, website) {
  console.log(await new Author({ name, bio, website }).save());
}

async function createCourse(name, authorId) {
  console.log(await new Course({ name, author: authorId }).save());
}

// ==========================
// 🔍 Query Docs (Population)
// ==========================
async function listCourses() {
  console.log(
    await Course.find().populate('author').select('name author')
  ); // 👥 Full author document populated

  console.log(
    await Course.find().populate('author', 'name').select('name author')
  ); // 🎯 Only "name" field from author

  console.log(
    await Course.find().populate('author', 'name -_id').select('name author')
  ); // ✂️ Project "name" only, hide _id
}
