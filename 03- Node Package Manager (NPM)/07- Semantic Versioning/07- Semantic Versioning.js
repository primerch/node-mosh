// =======================================================
//                  Semantic Versioning (SemVer)
//                    MAJOR.MINOR.PATCH
// =======================================================

// Semantic Versioning helps developers understand the impact of updates
// Learn more at: https://semver.org/

// MAJOR version: (First number)
// - Significant updates
// - Can introduce breaking changes (API changes - methods, functions, parameters, etc.)
// - Requires updating your code to accommodate these changes
// - Example: 8.x.x → 9.0.0

// MINOR version: (Second number)
// - New features, no breaking changes
// - Backwards compatible - existing code should still work
// - Might initially be slightly unstable due to new features
// - Example: 8.12.x → 8.13.0

// PATCH version: (Third number)
// - Bug fixes and minor improvements only
// - No new features
// - Safe to update with minimal risk
// - Example: 8.12.1 → 8.12.2

// PRE-RELEASE versions:
// - Indicated with dash and identifier: 1.0.0-beta.1, 2.0.0-rc.3
// - Not considered stable for production
// - Used for testing before an official release

// =======================================================
//                npm Version Specifiers
// =======================================================

// When specifying dependencies in package.json, npm allows different ways
// to define which versions of packages should be installed:

// 1. Caret (^) version: "^8.12.1"
// - DEFAULT when you run 'npm install package'
// - Installs the latest available version without changing the MAJOR version
// - Examples:
//   ^8.12.1 ✅ allows: 8.13.0, 8.15.9
//   ^8.12.1 ❌ denies: 9.0.0
// - Most commonly used - balances stability with updates

// 2. Tilde (~) version: "~8.12.1"
// - Installs the latest available version without changing MAJOR and MINOR
// - Only allows PATCH updates
// - Examples:
//   ~8.12.1 ✅ allows: 8.12.5, 8.12.9
//   ~8.12.1 ❌ denies: 8.13.0, 9.0.0
// - More conservative than caret - good for mature projects

// 3. Exact version: "8.12.1"
// - Only installs that specific version
// - No updates will be installed, even for security fixes
// - Examples:
//   8.12.1 ✅ allows: only version 8.12.1
//   8.12.1 ❌ denies: 8.12.2, 8.13.0
// - Most restrictive - ensures complete consistency

// 4. Latest version: "latest"
// - Always installs the most recent version available, regardless of version number
// - Examples:
//   "latest" ✅ allows: 8.12.2, 8.15.0, 9.0.0, 10.0.1
// - No restriction on MAJOR, MINOR, or PATCH updates
// - ⚠️ Be cautious: Can introduce breaking changes anytime
// - Rarely recommended except for development tools or experiments

// 5. Version ranges:
// - Greater than: ">8.12.1" (any version above 8.12.1)
// - Range: ">=8.12.1 <9.0.0" (8.12.1 or higher, but less than 9.0.0)
// - OR condition: "8.12.1 || 9.0.0" (exactly 8.12.1 or exactly 9.0.0)
