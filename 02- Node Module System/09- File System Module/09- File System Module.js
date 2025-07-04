// ===========================================================
//                      File System (fs) Module
// This example demonstrates the use of asynchronous methods like fs.readdir.
// When you pass a function as a callback, Node.js handles invoking it once the
// asynchronous operation completes.
//
// Key Point:
// - The parameters of your callback function (err and files) are not manually
//   assigned by you. Instead, they are supplied by Node.js during the callback invocation.
// - When the readdir operation finishes, Node.js automatically calls your callback
//   function, passing in:
//     - An error object (err) if there was an issue, or null if successful.
//     - The result array (files) containing the list of filenames if successful.
//
// This design allows you to handle success and error states cleanly within your callback,
// but you don't assign or modify these parameters directly; Node.js manages that part.
// ===========================================================

const fs = require("fs");

// ===========================================================
//                 Synchronous vs Asynchronous Methods
// ===========================================================

// A. Sync methods (e.g., readdirSync) are blocking; avoid in production,
// just for demo purposes. Use async methods (e.g., readdir) instead.

console.log(fs.readdirSync("./"));

// B. Asynchronous method with callback as second parameter
fs.readdir("./", function (e, f) {
  if (e) console.log(e);
  console.log(f);
});
