// 1. Synchronous program - blocking behavior
console.log("Before");
console.log("After");

// 2. Asynchronous program - non-blocking behavior
// Note: JavaScript uses a single-threaded event loop for async operations; this is not multi-threading or true concurrency.
console.log("Before");
setTimeout(() => console.log("Reading a user from database..."), 2000); // Schedules the callback to run after 2 seconds, does not block execution
console.log("After");
