// ===========================================================
//                   Logger Module Definition
// ===========================================================

const loggerUrl = "http://mylogger.io/log";

function log(message) {
  console.log(message);
}

// 1. Export an object with log method passing exports an object { log: [Function: log] }
module.exports.log = log;

// 2. Export a single function directly, exports function itself [Function: log]
module.exports = log;
