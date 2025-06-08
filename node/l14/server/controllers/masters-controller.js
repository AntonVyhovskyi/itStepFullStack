const pool = require('./db.js')

const getMasters = async (req, res, next) => {
    const masters = await pool.query('SELECT * FROM masters')
    if (!masters) {
        const error = new Error('не вдалось дістати список майстрів');
        error.status = 404; 
        return next(error)
    }
    res.status(200).send(masters.rows)
}

module.exports = {getMasters}