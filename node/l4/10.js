const fs = require('fs');
const originalBuffer = Buffer.from('Hello, buffer!');
const copiedBuffer = Buffer.alloc(originalBuffer.length);
originalBuffer.copy(copiedBuffer);
fs.writeFileSync('copiedBuffer.txt', copiedBuffer);