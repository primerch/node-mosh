/*
TASK: Build a Movie Genres REST API

OVERVIEW:
Create a RESTful API server using Node.js and Express that manages a collection of movie genres.
This task will help you understand CRUD operations, HTTP methods, status codes, and input validation.

LEARNING OBJECTIVES:
- Implement a complete REST API with all CRUD operations
- Use Express.js to handle HTTP requests and responses
- Apply proper HTTP status codes and error handling
- Validate user input using Zod validation library
- Work with JSON data and route parameters

REQUIREMENTS:

SETUP:
1. Initialize a new Node.js project
2. Install required packages: express and zod
3. Create a server that listens on port 3000 (or environment PORT)

INITIAL DATA:
Use this data structure as your starting point:

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Romance" },
];

API ENDPOINTS TO IMPLEMENT:

1. GET /api/genres
   - Return all genres in the collection
   - Status: 200 OK

2. GET /api/genres/:id
   - Return a specific genre by ID
   - Status: 200 OK if found, 404 Not Found if genre doesn't exist

3. POST /api/genres
   - Create a new genre
   - Validate that name is provided and at least 3 characters long
   - Auto-generate ID for the new genre
   - Status: 200 OK if successful, 400 Bad Request if validation fails

4. PUT /api/genres/:id
   - Update an existing genre by ID
   - Validate the new name (same rules as POST)
   - Status: 200 OK if successful, 404 Not Found if genre doesn't exist, 400 Bad Request if validation fails

5. DELETE /api/genres/:id
   - Remove a genre by ID
   - Return the deleted genre
   - Status: 200 OK if successful, 404 Not Found if genre doesn't exist

VALIDATION RULES (using Zod):
- Genre name must be a string
- Genre name must be at least 3 characters long
- Genre name is required for POST and PUT operations

Example Zod schema:
const { z } = require('zod');
const genreSchema = z.object({
  name: z.string().min(3, "Genre name must be at least 3 characters long")
});

ERROR HANDLING:
- Return appropriate HTTP status codes
- Provide meaningful error messages
- Handle cases where genre ID is not found
- Handle Zod validation errors properly

TESTING YOUR API:
Test your endpoints using a tool like Postman, Thunder Client, or curl commands:

GET http://localhost:3000/api/genres
GET http://localhost:3000/api/genres/1
POST http://localhost:3000/api/genres (with JSON body: {"name": "Comedy"})
PUT http://localhost:3000/api/genres/1 (with JSON body: {"name": "Action-Adventure"})
DELETE http://localhost:3000/api/genres/1

BONUS CHALLENGES:
1. Add middleware to log all incoming requests
2. Implement case-insensitive genre name validation
3. Prevent duplicate genre names
4. Add a search endpoint to find genres by name
5. Implement proper error handling middleware
6. Add genre description field with validation

DELIVERABLES:
- A working Express.js server file
- Proper project structure with package.json
- All CRUD endpoints functioning correctly
- Zod input validation implemented
- Appropriate HTTP status codes used

This exercise will give you hands-on experience with building a complete REST API
and understanding how web servers handle different types of requests!
*/

// Your implementation goes here...

// SETUP
const express = require("express");
const app = express();
require("dotenv").config();

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Romance" },
];

// 1. GET http://localhost:3000/api/genres
app.get("/api/genres", (req, res) => res.status(200).send(genres));

// 1. GET http://locahost:3000/api/genres/1
app.get("/api/genres/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const genre = genres.find((g) => g.id === id);

  if (genre) return res.status(200).send(genre);
  return res.status(404).send("cannot find the genre");
});

// 2. POST http://localhost:3000/api/genres
app.use(express.json());
app.post("/api/genres", (req, res) => {
  const { z } = require("zod/v4");
  const schema = z.object({ name: z.string().min(3) });
  try {
    const validatedData = schema.parse(req.body);
    const newData = {
      id: genres.length + 1,
      name: validatedData.name,
    };
    genres.push(newData);
    res.status(200).send(newData);
  } catch (e) {
    if (e instanceof z.ZodError) {
      res.status(400).send(e.details[0].message);
    } else {
      res.status(500).send("Internal Error");
    }
  }
});

// 3. PUT
app.put("/api/genres/:id", (req, res) => {
  const { z } = require("zod/v4");
  const schema = z.object({ name: z.string().min(3) });
  try {
    let genre = genres.find((g) => g.id === parseInt(req.params.id));

    if (!genre)
      return res.status(404).send("The genre with the given ID was not found.");

    const validatedData = schema.parse(req.body);

    genre.name = validatedData.name;

    res.status(200).send(genre);
  } catch (e) {
    if (e instanceof z.ZodError) {
      res.status(400).send(e.details[0].message);
    } else {
      res.status(500).send("Internal Error");
    }
  }
});

// 4. DELETE
app.delete("/api/genres/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const genre = genres.find((g) => g.id === id);

  if (!genre) return res.status(404).send(`cannot find the id: ${id}`);

  res.status(200).send(genres.splice(genres.indexOf(genre), 1)[0]);
});

// LISTEN
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
