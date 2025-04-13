const fs = require('fs')
const path = require('path')

const [, , command, pathForCommand = '.'] = process.argv

if (command == 'create-log') {
    const pathForCreatingDoc = path.resolve(pathForCommand, 'log.txt')
    console.log(pathForCreatingDoc);

    const pathToFolder = path.dirname(pathForCreatingDoc)
    fs.mkdir(pathToFolder, (err) => {
        if(err && err.code !== 'EEXIST') {
            console.log(err.message);
            return
            
        }

        fs.writeFile(pathForCreatingDoc, 'лог створено', (err)=> {
            if (err) {
             console.error(err.message);
             
            } else {
             console.log('файл створено в' + pathForCreatingDoc);
             
            }
             
    })
  
        
    })
} else {
    console.log('неправильно написав команду');
    
}