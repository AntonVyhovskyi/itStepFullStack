const fs = require('fs')


const stream = fs.createReadStream('ex4.txt')

stream.on('data', (chunk) => {
    console.log(chunk.toString().toUpperCase());
  });