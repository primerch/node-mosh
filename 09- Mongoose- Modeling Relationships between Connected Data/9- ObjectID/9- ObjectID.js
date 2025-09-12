const mongoose = require('mongoose');
const i = new mongoose.Types.ObjectId(); // ObjectId: 12 bytes → 4 timestamp, 3 machine, 2 process, 3 counter

console.log(i); // 🆔 ObjectId
console.log(i.getTimestamp()); // ⏰ timestamp
console.log(mongoose.Types.ObjectId.isValid('1234')); // ✅ valid?
