// ===========================================================
//                       Acronyms & Terms
// ===========================================================

// SCM: Source Control Management

// ===========================================================
//                     npm Commands & Files
// ===========================================================

// npm install: Installs ALL dependencies from package.json, including:
//   - "dependencies": Regular dependencies needed for the app to run in production
//   - "devDependencies": Tools needed only during development (like testing frameworks)
//
// package-lock.json: Important file that:
//   1. Locks the exact versions of ALL installed packages and their dependencies
//   2. Ensures consistent installations across different environments and developers
//   3. Makes builds reproducible and prevents "it works on my machine" problems
//   4. Should be committed to your SCM (like Git) along with package.json
