// ===========================================================
//                         Path Module
// ===========================================================

const path = require("path");

// ===========================================================
//                   Parsing File Path Information
// ===========================================================

// `path.parse(__filename)` extracts detailed information about the current file's path.
// This method returns an object containing useful properties:

// - root: The root of the file path
//   Example on Unix: '/' (e.g., if file path is '/usr/local/app.js')
//   Example on Windows: 'C:\\' (e.g., if file path is 'C:\\Users\\User\\app.js')

// - dir: The directory containing the file
//   Example on Unix: '/usr/local'

// - base: The full file name including extension
//   Example if filename is 'app.js': 'app.js'

// - ext: The file extension including the dot
//   Example if filename is 'app.js': '.js'

// - name: The filename without extension
//   Example if filename is 'app.js': 'app'

// Parse the current file's path
const pathObject = path.parse(__filename);

// Log the parsed object to see current file path details
console.log(pathObject);
