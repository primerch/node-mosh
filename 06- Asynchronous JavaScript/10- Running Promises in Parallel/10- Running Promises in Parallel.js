// Create three promises that simulate async operations with different durations
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 2000); // Takes 2 seconds - the slowest operation
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 1000); // Takes 1 second
});

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 3...");
    resolve(3);
  }, 1000); // Takes 1 second
});

// Promise.all waits for ALL promises to complete before resolving
// It resolves with an array containing all resolved values in the same order
// Total time will be 2 seconds (the slowest promise determines the overall time)
Promise.all([p1, p2, p3])
  .then((n) => console.log(n)) // n will be [1, 2, 3] - results in original order
  .catch((e) => console.log(e.message)); // If ANY promise rejects, this catch will run

// Promise.race resolves as soon as the FIRST promise completes (wins the race)
// It resolves with the value of whichever promise finishes first
// Since p2 and p3 both take 1 second, one of them will win (likely p2 or p3 = 2 or 3)
Promise.race([p1, p2, p3])
  .then((n) => console.log(n)) // n will be 2 or 3 (whichever 1-second promise finishes first)
  .catch((e) => console.log(e.message)); // If the FIRST promise to complete rejects, this will run
