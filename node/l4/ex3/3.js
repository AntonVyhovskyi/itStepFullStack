const fs = require('fs')

const first = fs.readFileSync('a.txt')
const second = fs.readFileSync('b.txt')

const result = Buffer.compare(first, second)

console.log(result);
