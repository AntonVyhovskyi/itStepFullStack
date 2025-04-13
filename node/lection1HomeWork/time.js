const dayjs = require('dayjs')

const time = dayjs().format('DD/MM/YYYY HH:mm:ss')

module.exports.getFormattedTime = function () {
    return time
    
}



