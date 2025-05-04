const fs = require('fs');
const path = require('path');


const directory = path.join(__dirname, 'temp')
const now = Date.now()
const ageLimits = 2 * 60 * 1000

fs.readdir(directory, (err, files) => {
    if (err) {
        return console.error('не вдалося прочитати імена файлів. Текст помилки:' + err.message)
    } 

    files.forEach((file) => {
        const pathToFile = path.join(directory, file)

        fs.stat(pathToFile, (err, stats) => {
            if (err) {
                return console.error(`не вдалося прочитати файл ${file}. Текст помилки:` + err.message)
            } 
            const birthTime = new Date(stats.birthtime).getTime();
            if (now - birthTime > ageLimits) {
                fs.unlink(pathToFile, (err) => {
                    if (err) {
                        return console.error('не вдалося delete file. Текст помилки:' + err.message)
                    } else {
                        console.log(`${file} delete, бо старий вже`);
                        
                    }
                })
            }
        
        })
    })
})