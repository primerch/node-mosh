// 1. Using References (Normalization) -> CONSISTENCY
// let author = {
//   name: 'reacher',
// };
// let course = {
//   author: 'id',
// };

// 2. Using Embedded Documents (Denormalization) -> PERFORMANCE
// let author = {
//   name: 'reacher',
// };
// let course = {
//   author: {
//     name: 'reacher',
//   },
// };

// 3. Using Hybrid Approach
// let author = {
//   name: 'reacher',
//   // 50 other properties
// }

// let course = {
//   author: {
//     id: 'ref',
//     name: 'reacher'
//   }
// }
