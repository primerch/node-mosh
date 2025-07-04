// ===========================================================
//                  Required Module Usage
// ===========================================================

// -----------------------------------------------------------
// 1. Importing an Entire Module as an Object
// -----------------------------------------------------------

const logger = require("./logger");
logger.log("message"); // Using the log method from the logger module

// Alternatively, destructure specific exports for convenience
const { log } = require("./logger");
log("message"); // Using the destructured log function

// -----------------------------------------------------------
// 2. Exporting a Single Function from a Module
// -----------------------------------------------------------

const log = require("./logger");
log("message"); // Directly using the exported function
