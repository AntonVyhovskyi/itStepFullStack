const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data)=>{
    if (err) throw err
    const newText = data.replace(/\btest\b/g, 'exam')
    fs.writeFile('output.txt', newText, (err)=>{
        if (err) throw err
        console.log('file write or update succesfull');
        
    })
    
})