const fs = require('fs')
const {Transform} = require('stream')


const replaceFoo = new Transform({
    transform(chunk, encoding, callback) {
        const tranformText = chunk.toString().replace(/foo/g, 'bar')
        callback(null, tranformText)
    }
})


const inputStream = fs.createReadStream('input.txt', 'utf-8')
const outputStream = fs.createWriteStream('output.txt')


inputStream.pipe(replaceFoo).pipe(outputStream).on('finish', ()=>{
    console.log('перезаписали і трансформували');
    
})