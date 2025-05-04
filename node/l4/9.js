const fs = require('fs');


function checkFile (file) {
    fs.stat(file, (err, stats)=> {
        if (err) {
            console.log('Помилка при доступі до файлу');
            
        }

        if (stats.isFile()) {
            const size = (stats.size /1024).toFixed(2)
            console.log(`файл розміром ${size} kb`);
            
        } else {
            console.log('it isnt file');
            
        }
    })
}

checkFile('ex2.txt')