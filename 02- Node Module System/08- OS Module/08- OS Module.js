// ===========================================================
//                      OS Module Basics
// ===========================================================

const os = require("os");

// Fetch system memory stats
const totalMemory = os.totalmem(); // Total system memory in bytes
const freeMemory = os.freemem(); // Free system memory in bytes

// ===========================================================
//                      Output Memory Info
// ===========================================================

// Using template strings for clean output
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
