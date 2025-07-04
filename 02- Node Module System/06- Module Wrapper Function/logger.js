// ===========================================================
//                      Node.js Module Wrapper
// ===========================================================

// Node.js wraps each module inside an immediately invoked function:
// (function(exports, require, module, __filename, __dirname) {
//   // Your module code here
// })();

// This wrapper function runs automatically when the module is loaded, during the require process.
// As soon as the module is required, the function executes once, establishing the module scope.

// Benefits of this module wrapper:
// 1. Encapsulates variables to prevent polluting the global scope.
// 2. Provides access to module-specific variables:
//    - `module` and `exports` for exporting values.
//    - `__filename` and `__dirname` for absolute path information.

console.log(__filename);
console.log(__dirname);

// ===========================================================
//                      Module Exporting
// ===========================================================

const url = "http://mylogger.io/log";

// Basic logging function
function log(message) {
  console.log(message);
}

// Example of exporting the module:

// 1. Export the entire function/object directly:
// module.exports = log;

// 2. Export as a property of `module.exports` or `exports`:
// module.exports.log = log;
// exports.log = log;

// 3. Note:
//    - `exports` is a reference to `module.exports`.
//    - Reassigning `exports` itself (e.g., `exports = ...`) does NOT change the exported module.
//    - Always modify properties of `exports`, not reassign `exports`.
