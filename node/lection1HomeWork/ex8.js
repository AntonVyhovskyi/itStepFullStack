const fs = require('fs').promises
const path = require('path')

async function copyFiles() {

    try {
        const inputDir = path.resolve(__dirname, 'input')
        const outputDir = path.resolve(__dirname, 'output')
    
        await fs.mkdir(outputDir, {recursive: true})
    
        const files = await fs.readdir(inputDir)
        
        for (const file of files) {
            const filePath = path.resolve(inputDir, file)
            const outputPath = path.resolve(outputDir, file)
    
            const stats = await fs.stat(filePath)
            if ( stats.isFile()) {
                await fs.copyFile(filePath, outputPath)
                console.log(`Файл ${file} скопійовано в ${outputDir}`);
            }
        }
        
    } catch (error) {
        console.error('Помилка:', error);
    }
   
}

copyFiles()