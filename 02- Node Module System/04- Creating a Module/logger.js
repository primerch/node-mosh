// ===========================================================
//                     Node.js Module Object
// note: in every Node.js file, there is a built-in object called module
// ===========================================================

const loggerUrl = "http://mylogger.io/log"; // internal detail, usually private

function logMessage(message) {
  // send message through console or HTTP request
  console.log(message);
}

// ===========================================================
//                        Module Exports
// ===========================================================
//   exports: {
//     logMessage: [Function: logMessage],
//     loggerUrl: 'http://mylogger.io/log'
//   },
// ===========================================================

module.exports.logMessage = logMessage; // public interface

module.exports.loggerUrl = loggerUrl; // usually internal; exposed here for demonstration purposes

// ===========================================================
//                        Module Inspection
// ===========================================================

console.log(module); // inspect current module state
