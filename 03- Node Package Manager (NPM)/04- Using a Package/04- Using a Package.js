// ===========================================================
//                Module Resolution Algorithm
// ===========================================================
// When you call require('something'), Node.js resolves in this order:
//
// 1. CORE MODULES
//    Built-in modules like 'fs', 'path', 'http'
//    Example: require('fs')
//
// 2. LOCAL MODULES
//    Files or directories with relative/absolute paths
//    Example: require('./utils') or require('../config')
//
// 3. NODE_MODULES
//    Third-party packages in node_modules directory
//    Searches in current directory, then parent directories
//    Example: require('underscore')

const _ = require("underscore"); // Loads from node_modules

// ===========================================================
//                Underscore Package Usage
// ===========================================================
// Example: Check if a value exists in an array
const numbers = [1, 2, 3, 4, 5];
const valueToFind = 3;

const exists = _.contains(numbers, valueToFind);
console.log(exists); // true
