// ===========================================================
//                      Mongoose Package Import
// ===========================================================

// Load mongoose package for MongoDB interaction
const mongoose = require("mongoose");

// ===========================================================
//                Understanding node_modules Structure
// ===========================================================

// "node_modules" directory is automatically generated when installing packages

// Benefits of npm's Flat Dependency Structure:
// 1. Reduces Duplication: Same version of a package is reused across dependencies
// 2. Prevents "Dependency Hell": Avoids deeply nested node_modules folders
// 3. Faster Installation: Fewer files to process and write to disk
// 4. Simpler Debugging: Easier to trace which version of a package is being used
// 5. Smaller Disk Footprint: Shared dependencies reduce overall project size
// 6. Improved Performance: Faster module resolution at runtime

// Note: npm v3+ uses a flat structure where possible, with nested dependencies
// only when version conflicts can't be resolved at the top level
