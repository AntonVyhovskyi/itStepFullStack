const fs = require("fs");
const path = require("path");


const baseDir = __dirname

console.log('шлях' + baseDir);


const podcatalogs = ['utils', 'data', 'logs']


podcatalogs.forEach((el)=>{
    const pathToPodcatalog = path.join(baseDir, el)
    const relativePath = path.relative(process.cwd(), pathToPodcatalog)


    if (!fs.existsSync(pathToPodcatalog)) {
        fs.mkdirSync(pathToPodcatalog);
        console.log('створили папку бо її не було');
        console.log(`відносний шлях : ${relativePath}`);
        
        
    } else {
        console.log('папка вже була');
        console.log(`відносний шлях : ${relativePath}`);
        
    }
})