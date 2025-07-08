# How Function Parameters Get Assigned (with Callbacks and Promises)

## Callback Example

```javascript
function doSomething(callback) {
    // 'callback' is a variable holding the function you pass in
    callback("Hello from inside doSomething!");
}

// Pass in a function as the argument
doSomething(function (message) {
    console.log(message); // Output: Hello from inside doSomething!
});
```

### What happens here?

1. `doSomething` is defined with a parameter called `callback`.
2. You call `doSomething` and pass a function as the argument.
3. Inside `doSomething`, the `callback` parameter is **assigned** to the function you provided.
4. Anytime you do `callback("something")`, it actually calls the function you provided, passing in `"something"` as the
   argument.

------

------

## Simulating Promise-Like Behavior

```javascript
function myPromiseLike(executor) {
    // JavaScript creates two functions for you
    function resolve(value) {
        console.log("Resolved with", value);
    }

    function reject(reason) {
        console.log("Rejected with", reason);
    }

    // It calls your executor function, passing in resolve and reject
    executor(resolve, reject);
}

// Use the simulated Promise
myPromiseLike(function (firstParam, secondParam) {
    firstParam("Done!");   // 'firstParam' is really the built-in resolve
    // secondParam("Error!") // 'secondParam' is like the built-in reject
});
```

### What happens here?

- `executor` is a function with two parameters (`firstParam`, `secondParam`).
- Inside the engine, JavaScript creates two functions (, ). `resolve``reject`
- JavaScript **calls** your executor like this:
  `executor(resolve, reject)`
- Inside your function, the variable names are whatever you chose, but the actual **values** are JavaScript's built-in
  resolve and reject functions.

------

------

## Key Idea

- **You decide the parameter names** (`test`, , `banana`, anything). `resolve`
- **JavaScript supplies the functions** in the correct order when your function is called.
- It's about the **position**, not the name.

------

------

## Visual Analogy

```javascript
function passMeAFunction(fn) {
    fn("Hi!");
}

passMeAFunction(function (msg) {
    console.log(msg);
});
// Output: Hi!
```

- Whatever function you pass in, is given as `fn`.
- Whatever parameter Promise supplies (, etc.) is handed in by JavaScript when it calls your function. `resolve``reject`

------

------

## Summary Table

| What you define  | What JS passes in                      |
|------------------|----------------------------------------|
| First parameter  | Ready-made function (like ) `resolve`  |
| Second parameter | Ready-made function (like ) `reject`   |
| Parameter names  | Doesn't matter (position matters only) |