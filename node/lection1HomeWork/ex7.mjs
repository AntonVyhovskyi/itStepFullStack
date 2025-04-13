import chalk from 'chalk'
import dayjs from 'dayjs'

const now = dayjs().format('DD/MM/YYYY HH:mm:ss');

console.log(chalk.green(now));
