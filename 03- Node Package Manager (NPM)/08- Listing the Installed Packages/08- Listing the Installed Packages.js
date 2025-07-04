// =======================================================
//                 npm list Command Depths
// =======================================================

// npm list (equivalent to: npm list --depth=0)
// Lists all top-level dependencies only (no nested dependencies):
// ├── mongoose@8.12.1
// └── underscore@1.13.7

// npm list --depth=1
// Lists all top-level dependencies plus their direct immediate dependencies (depth = 1):
// Example output:
// ├── mongoose@8.12.1
// │   ├── bson@x.x.x
// │   ├── mongodb@x.x.x
// │   └── other-direct-dependency@x.x.x
// └── underscore@1.13.7
//     └── (no dependencies or other dependencies if applicable)

// npm list --depth=2
// Lists dependencies up to two levels deep in the dependency tree:
// Example output:
// ├── mongoose@8.12.1
// │   ├── bson@x.x.x
// │   │   ├── buffer@x.x.x
// │   │   └── node-addon-api@x.x.x
// │   ├── mongodb@x.x.x
// │   │   ├── mongodb-connection-string-url@x.x.x
// │   │   └── some-other-dependency@x.x.x
// │   └── other-direct-dependency@x.x.x
// │       └── its-own-dependencies@x.x.x
// └── underscore@1.13.7

// npm list --depth=9999 (or any large number)
// Lists the entire dependency tree, showing all nested dependencies
// to their maximum depth - useful for debugging but can be extremely verbose.
// Example output would show all dependencies at all levels, potentially
// hundreds or thousands of packages in a typical Node.js project.
// This is helpful when:
// - Debugging version conflicts deep in the dependency tree
// - Auditing all packages in your application
// - Looking for specific packages anywhere in the tree

// TIP: For large projects, you might want to pipe the output to a file:
// npm list --depth=9999 > dependencies.txt
