const pool = require('./db.js')


const getRequests = async (req, res, next) => {
    const requests = await pool.query('SELECT * FROM requests')
    if (!requests) {
        const error = new Error('Невдалося отримати заявки с бд')
        error.status = 404;
        return next(error)
    }
    res.status(200).send(requests.rows)
}

const getUserRequests = async (req, res, next) => {
    const email = req.params.email
    const requests = await pool.query('SELECT * FROM requests WHERE email = $1', [email])
    if (!requests) {
        const error = new Error('Невдалося отримати заявки с бд')
        error.status = 404;
        return next(error)
    }
    res.status(200).send(requests.rows)
}

const postUserRequest = async (req, res, next) => {
    const {customer, email, master_id, description} = req.body
    const request = await pool.query(`
        INSERT INTO requests (customer, email, master_id, description)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `, [customer, email, master_id, description])
    if (!request) {
        const error = new Error('Невдалося отримати заявки с бд')
        error.status = 404;
        return next(error)
    }
    res.status(200).send(request.rows)
}

const deleteUserRequest = async (req, res, next) => {
    const id = req.params.id
    try {
        await pool.query(`
         DELETE FROM requests WHERE id = $1
        `, [id])
         res.status(200).send('Видалено')
    } catch (err) {
        const error = new Error(`помилка при видаленні: ${err.message}`)
        error.status = 404;
        return next(error)
    }
       
}

const patchStatusOfRequest = async (req, res, next) => {
    const {id, status} = req.body
    try {
        const request = await pool.query(`
        UPDATE requests SET status = $2 WHERE id = $1
        RETURNING *
        `, [id, status])
        res.status(200).send(request.rows)
    } catch (err) {
        const error = new Error(`Невдалося змінити статус. помилка: ${err.message}`)
        error.status = 404;
        return next(error)
    }
    
    
    
}
module.exports = {getRequests, getUserRequests, postUserRequest, deleteUserRequest, patchStatusOfRequest}