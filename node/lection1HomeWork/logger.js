const fs = require('fs')
const path = require('path')
const dayjs = require('dayjs')

const logFilePath = path.resolve(__dirname, 'app.log');

const time = () => {
    return dayjs().format('YYYY-MM-DDTHH:mm:ssZ[Z]')
}


const logger = (level = 'info', message = '') => {
    const timeNow = time()
    const logMessage = `\n ${timeNow} | ${level} | ${message} `

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Не вдалось записати лог:', err.message);
        }
    })

}

module.exports = logger