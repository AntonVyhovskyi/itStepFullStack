const fs = require('fs')
const path = require('path')

const globalll = global
const arrInFile = Object.keys(globalll).sort((a, b)=> a.length - b.length).join(' ')
console.log(arrInFile);

fs.writeFile(path.resolve(__dirname, 'globals.txt'), arrInFile, (err) => {
    if (err) {
        console.log('шось не записалось' + ' ' + err);
        
        
    } else {
        console.log('alles gut');
        
    }
})