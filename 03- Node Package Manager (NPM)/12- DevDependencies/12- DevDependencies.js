// NPM Install: Dependencies vs DevDependencies (with shorthand)
// -------------------------------------------------------------

// Install runtime dependencies:
// $ npm install <package> [--save]
// or shorthand: $ npm i <package> [--save]
// Example: npm install express --save
// - Adds package to "dependencies" in package.json
// - "--save" is optional since npm v5+ (default behavior)

// Install development dependencies:
// $ npm install <package> --save-dev
// or shorthand: $ npm i <package> -D
// Example: npm install jshint -D
// - Adds package to "devDependencies" in package.json

// Key differences:
// ----------------
// dependencies:
//   - Needed at runtime (production)
//   - Listed under "dependencies" in package.json
//   - Example packages: express, mongoose, lodash
//
// devDependencies:
//   - Needed only for development/build (not runtime)
//   - Listed under "devDependencies" in package.json
//   - Example packages: eslint, jshint, prettier, jest, webpack

// Additional notes:
// - Both dependencies and devDependencies are installed to node_modules
// - Logical distinction affects production installs: `npm install --production` skips devDependencies
