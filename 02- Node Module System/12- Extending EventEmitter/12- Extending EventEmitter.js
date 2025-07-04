// ===========================================================
//                Event-Driven Architecture
// ===========================================================
// This file demonstrates the event-driven pattern where:
// - Components communicate through events rather than direct function calls
// - The Logger emits events, and other components react to those events
// - This creates loose coupling between the logger and its consumers

const Logger = require("./logger");
const logger = new Logger();

// Register an event listener for the 'messageLogged' event
// This must be done before calling log() to ensure the event is captured
// The listener receives the event data (args) that was passed to emit()
logger.on("messageLogged", (args) => {
  console.log("Listener called: ", args);
});

// Call the log method which will:
// 1. Log the message to the console
// 2. Emit the 'messageLogged' event
// 3. Trigger any registered event listeners
logger.log("Hello World");
