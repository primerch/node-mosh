// ===========================================================
//                EventEmitter Inheritance
// ===========================================================
// We extend EventEmitter instead of just using it directly because:
// - It allows us to create a specialized Logger class with its own methods
// - The Logger inherits all event capabilities while adding custom functionality
// - It follows OOP principles for better code organization and reuse
// - It enables a cleaner API design for our logging system

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    // Log the message to the console
    console.log(message);

    // Emit an event that other parts of the application can listen for
    // We use this.emit() inside the class because:
    // - It ties the event emission directly to the logging action
    // - It ensures events are emitted in the right context
    // - The instance emits the event, not the class itself
    this.emit("messageLogged", { id: 1, url: "http://" });

    // Note: this.on() would typically be used outside this class (by consumers)
    // as registering listeners inside would create handlers every time log() is called
  }
}

module.exports = Logger;
