const fs = require('fs')

const buffer1 = Buffer.from('hallo ', 'utf-8')
const buffer2 = Buffer.from('world!!!', 'utf-8')

fs.writeFileSync('ex2.txt', Buffer.concat([buffer1, buffer2]))

