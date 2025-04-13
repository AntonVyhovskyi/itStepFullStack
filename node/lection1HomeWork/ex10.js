const { getEnvConfig } = require('./env');

const config = getEnvConfig();

console.log('Конфігурація:', config);