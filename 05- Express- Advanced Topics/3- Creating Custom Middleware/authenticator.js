// EXPRESS INTERNAL PROCESS - How req, res are passed through middleware chain:
//
// 1. When a request comes in, Express creates req and res objects
// 2. Express maintains a middleware stack (array of functions)
// 3. Express uses closures to keep req, res in scope throughout the chain
//
// Simplified internal process:
//
// function processRequest(req, res) {
//   let currentIndex = 0;
//   const middlewareStack = [middleware1, middleware2, routeHandler];
//
//   function next() {  // This 'next' has access to req, res via closure
//     currentIndex++;
//     if (currentIndex < middlewareStack.length) {
//       // Same req, res objects passed to next middleware
//       middlewareStack[currentIndex](req, res, next);
//     }
//   }
//
//   // Start the chain
//   middlewareStack[0](req, res, next);
// }
//
// Key points:
// - next() is just a signal function - "I'm done, continue to next middleware"
// - req, res objects stay the same throughout entire chain (via closure)
// - If you don't call next(), the request stops/hangs
// - Express automatically passes req, res to next middleware when next() is called

function authenticator(req, res, next) {
  console.log("Authenticating");
  next();
}

module.exports = authenticator;
