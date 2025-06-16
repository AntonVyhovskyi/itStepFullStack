import {pool} from '../configs/db'

export const createUser = async (email: string, passwordHash: string, name: string) => {
    try {
        const res = await pool.query(
        'INSERT INTO users (email, password_hash, name) VALUES ($1, $2, $3) RETURNING *',
        [email, passwordHash, name]
    )
    return res.rows[0]
    } catch (error) {
        return new Error('невдалося створити юзера')
    }
    
}


export const findUserById = async (id: number) => {
    const res = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    return res.rows[0];
}

export const findUserByEmail = async (email: string) => {
  const res = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return res.rows[0];
};