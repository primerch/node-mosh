// Import and initialize EventEmitter
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// 1. Register event listener (must happen before emitting)
// The .on() method connects a function to a named event
eventEmitter.on("messageLogged", function () {
  console.log("Listener called");
});

// 2. Emit the event to trigger listener
eventEmitter.emit("messageLogged");
