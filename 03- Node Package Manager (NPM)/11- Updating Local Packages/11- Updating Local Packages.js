/*
 * NPM Dependency Management Quick Guide
 * -------------------------------------
 * Essential commands and concise explanations for managing project dependencies.
 */

// ---------------------------------------------
// COMMAND: npm outdated
// ---------------------------------------------
/*
 * Checks for outdated dependencies.
 * Output columns:
 * - current: Installed version
 * - wanted : Highest version allowed by package.json (semver)
 * - latest : Newest version on npm registry
 *
 * Example:
 * +-----------+---------+---------+--------+
 * | package   | current | wanted  | latest |
 * |-----------|---------|---------|--------|
 * | mongoose  | 2.4.2   | 2.9.10  | 4.13.6 |
 * | underscore| 1.4.0   | 1.8.2   | 1.8.2  |
 * +-----------+---------+---------+--------+
 */

// ---------------------------------------------
// COMMAND: npm update
// ---------------------------------------------
/*
 * Updates dependencies to the "wanted" versions from npm outdated.
 * - Only updates within the semver range in package.json
 * - Skips major version upgrades
 * - Updates node_modules and package-lock.json in place
 */

// ---------------------------------------------
// COMMAND: npm-check-updates (ncu)
// ---------------------------------------------
/*
 * Allows upgrading to latest (including major) versions.
 * Steps:
 * 1. Install globally:    npm install -g npm-check-updates
 * 2. List new versions:   ncu
 * 3. Update package.json: ncu -u
 * 4. Install updates:     npm install
 * Note: May introduce breaking changes. Review and test before/after update.
 */

// ---------------------------------------------
// COMMAND: npm install <package>@latest
// ---------------------------------------------
/*
 * Installs the absolute latest version of a package, overriding semver.
 * Command: npm install <package>@latest
 * Updates package.json and installs the latest version.
 * Useful for manually bumping a single package.
 */
