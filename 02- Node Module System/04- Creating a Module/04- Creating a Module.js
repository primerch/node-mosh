// - The `require()` function returns the `module.exports` object of the specified module.
// - You can destructure properties directly from this object if needed.

const { logMessage, loggerUrl } = require("./logger");

logMessage("Hello");
console.log(loggerUrl);
