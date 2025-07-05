function getUser(id) {
  // Schedule a message to be logged after 2 seconds, simulating an asynchronous operation
  setTimeout(() => {
    console.log("Reading a user from a database");
    return { id: id, githubUsername: "Reacher" }; // This return value is ignored by setTimeout
  }, 2000);

  // Return a value immediately; this is what getUser actually returns to the caller
  return 1;
}

console.log("Before");

const user = getUser(1); // Calls getUser and assigns its return value (1) to 'user'

console.log(user); // Prints 1, because getUser returns 1 immediately

console.log("After");

// Solutions for true asynchronous data handling in JavaScript include:
// - Callbacks
// - Promises
// - Async / await
