const fs = require('fs')

const buffer1 = Buffer.from('jsakd asldj asldkja sdlkjas dlk asdlk ajdlkasd jlkas jdlkas jdakdsl  jdsalk') 
const bufferInJson = buffer1.toJSON()

fs.writeFileSync('buffer.json', JSON.stringify(bufferInJson));

const fileData = fs.readFileSync('buffer.json');

const parsedJSON = JSON.parse(fileData);

const restoredBuffer = Buffer.from(parsedJSON.data);

console.log( restoredBuffer.toString());
