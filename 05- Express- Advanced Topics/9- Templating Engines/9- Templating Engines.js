// ===== TEMPLATE ENGINES: SERVER-SIDE HTML GENERATION =====
// Template engines: Pug, Mustache, EJS, Handlebars
// Purpose: Generate dynamic HTML on the server by combining templates with data
// Alternative to manual string concatenation or client-side rendering

const express = require("express");
const app = express();

// ===== CONFIGURE PUG AS TEMPLATE ENGINE =====
app.set("view engine", "pug");
// This tells Express to use Pug for rendering templates
// When you call res.render(), Express automatically uses Pug to process .pug files
// No need to require('pug') - Express handles it internally

app.set("views", "./views");
// Sets the directory where template files are stored
// Default is "./views" but explicitly setting it for clarity
// Express will look for index.pug, about.pug, etc. in this folder

// ===== ROUTE WITH TEMPLATE RENDERING =====
app.get("/", (req, res) => {
  // res.render() does 3 things:
  // 1. Finds the template file (views/index.pug)
  // 2. Passes data object to the template { title: "My Express App", message: "Hello" }
  // 3. Generates final HTML by combining template + data
  // 4. Sends complete HTML to browser
  res.render("index", { title: "My Express App", message: "Hello" });
});

// ===== HOW THIS WORKS =====
// 1. Browser requests GET /
// 2. Server finds views/index.pug template
// 3. Server combines template with data: title="My Express App", message="Hello"
// 4. Server generates final HTML:
//    <html>
//      <head><title>My Express App</title></head>
//      <body><h1>Hello</h1></body>
//    </html>
// 5. Server sends complete HTML to browser
// 6. Browser displays the page immediately (no JavaScript needed)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));

// ===== TEMPLATE ENGINE BENEFITS =====
// ✅ Server-side rendering: Complete HTML sent to browser
// ✅ SEO-friendly: Search engines see full content immediately
// ✅ Fast initial load: No JavaScript required for basic functionality
// ✅ Separation of concerns: HTML structure (template) separate from data (JavaScript)
// ✅ Reusability: Same template can be used with different data

// ===== FILE STRUCTURE REQUIRED =====
// Project folder/
// ├── server.js (this file)
// └── views/
//     └── index.pug (template file)
