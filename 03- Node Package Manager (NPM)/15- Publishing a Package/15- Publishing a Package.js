// Steps to create and publish your own npm package:

// 1. Log in to npm
// npm login

// 2. Publish the package
// npm publish
// Result: + lion-lib2025@1.0.0
// Note: If there's a permission issue or conflict, check the package name as it might already exist.

// 3. To consume the published package in another Node.js application:
// npm install lion-lib2025 --save-dev

// Usage example:
const lion = require("lion-lib2025");

console.log(lion.add(1, 2));
