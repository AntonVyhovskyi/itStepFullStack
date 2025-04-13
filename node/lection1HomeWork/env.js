function getEnvConfig() {
    const {
        NODE_ENV = 'development',
        PORT = '3000',
        API_KEY = 'default-api-key'
    } = process.env;

    return {
        NODE_ENV,
        PORT,
        API_KEY
    };
}

module.exports = { getEnvConfig };