// 1. Attempting to directly publish the exact same version results in an error:
// Error message: "You cannot publish over the previously published versions: 1.0.0."

// 2. To update the package version using npm, the command structure is:
// npm version <major|minor|patch>
// Example:
// npm version minor
// Result:
// "version": "1.0.0" -> "version": "1.1.0"
