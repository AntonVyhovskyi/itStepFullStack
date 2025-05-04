const fs = require('fs')

function log(message){
    if(!fs.existsSync('5.txt')) {
        console.log('створи для початку файл');
        
    } else {
        const time = new Date().toISOString();
        const textToAppend = ` ${time} ${message} \n`
        fs.appendFile('5.txt', textToAppend, (err) => {
            if(err) {
                console.log(err);
                
            } else {
                console.log('лог додано');
                
            }
        })
    }
}

log('asdsa das d')