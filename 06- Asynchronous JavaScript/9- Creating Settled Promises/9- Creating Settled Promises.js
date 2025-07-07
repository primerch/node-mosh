// Create a resolved promise with an object and handle the successful result
Promise.resolve({ id: 1 }).then((result) => console.log(result));

// Create a rejected promise with an error and handle the rejection
Promise.reject(new Error("reason for rejection")).catch((error) =>
  console.log(error),
);
