// ===========================================================
//                        Global Object
// ===========================================================

// Console logging
console.log();

// Executes a function after a delay
setTimeout(() => {}, 1000); // global.setTimeout()

// Clears a timeout before it executes
clearTimeout(); // global.clearTimeout()

// Executes a function repeatedly at a fixed interval
setInterval(() => {}, 1000); // global.setInterval()

// Stops a repeating interval
clearInterval(); // global.clearInterval()

// ===========================================================
//                     Global vs Local Scope
// ===========================================================

var a = 20; // Declares a global variable in browsers, but NOT in Node.js
console.log(global.a); // undefined in Node.js (var does not attach to global)
