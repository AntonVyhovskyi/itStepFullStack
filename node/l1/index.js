const fs = require('fs')


const arg = process.argv[2]

if (fs.existsSync(`${arg}.js`)) {
    console.log(`Файл "${arg}" вже існує.`);
    
} else {
    fs.writeFileSync(`${arg}.js`, 'console.log("Програма створена автоматично")')
}