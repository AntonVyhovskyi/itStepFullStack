const fs = require('fs')


fs.readFile('package.json', 'utf-8', (err, data)=> {
    if (err) throw err
    const name = JSON.parse(data).projectAuthor
    console.log(`Привіт ${name} !!!`);
    
})