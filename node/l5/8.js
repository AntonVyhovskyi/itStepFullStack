const fs = require('fs')

let name = ''
fs.readFile('storage.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err
    }
    if (data) {
        name = data
        console.log(name);
    }
    

})




process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
    fs.writeFile('storage.txt', data, (err) => {
        if (err) {
            throw err
        }
        console.log(`Твое ім.я: ${data.trim()} записане в сторейдж або перезаписане`);
        process.exit();

    })

});
