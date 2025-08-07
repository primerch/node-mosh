// Trade off between query performance vs consistency

// Using References (Normalization) -> CONSISTENCY
const author = {
  _id: "auth123",
  name: "Mosh",
  email: "mosh@example.com",
};

const course = {
  _id: "course123",
  title: "MongoDB Course",
  authorId: "auth123", // Reference to author document
};

// Using Embedded Documents (Denormalization) -> PERFORMANCE
const courseWithEmbedded = {
  _id: "course123",
  title: "MongoDB Course",
  author: {
    name: "Mosh",
    email: "mosh@example.com",
  },
};

// Hybrid Approach
const authorFull = {
  _id: "auth123",
  name: "Mosh",
  email: "mosh@example.com",
  bio: "Full stack developer",
  socialMedia: {
    twitter: "@mosh",
    github: "mosh-hamedani",
  },
};

const courseHybrid = {
  _id: "course123",
  title: "MongoDB Course",
  author: {
    _id: "auth123", // Reference to full author document
    name: "Mosh", // Frequently accessed field embedded
  },
};
