const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

const Author = mongoose.model(
  'Author',
  new mongoose.Schema({
    name: String,
    bio: String,
    website: String,
  })
);

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

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}

createAuthor('Mosh', 'My bio', 'My Website');
createCourse('Node Course', '68c0ed2b2b0a0e5d45d904b6');

async function listCourses() {
  const courses = await Course.find().select('name');
  console.log(courses);
}
// listCourses();

// result:
// author:
// {
//   "_id": {
//     "$oid": "68c0ed2b2b0a0e5d45d904b6"
//   },
//   "name": "Mosh",
//   "bio": "My bio",
//   "website": "My Website",
//   "__v": 0
// }

// course:
// {
//   "_id": {
//     "$oid": "68c0eee7117416231b6f2937"
//   },
//   "name": "Node Course",
//   "author": {
//     "$oid": "68c0ed2b2b0a0e5d45d904b6"
//   },
//   "__v": 0
// }
