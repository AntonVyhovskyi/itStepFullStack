import { pool } from '../configs/db'
import ms from 'ms'
import { REFRESH_TOKEN_EXPIRES_IN } from '../configs/jwt'


const getRefreshTokenExpiryDate = () => {
    const durationMs = ms(REFRESH_TOKEN_EXPIRES_IN)
    return new Date(Date.now() + durationMs)
}
export const saveToken = async (userId: number, refreshToken: string) => {
    const expiresAt = getRefreshTokenExpiryDate()
    try {
        await pool.query('INSERT INTO tokens (user_id, refresh_token, expires_at) VALUES ($1, $2, $3) ON CONFLICT (user_id) DO UPDATE SET refresh_token = $2, expires_at = $3',
            [userId, refreshToken, expiresAt]
        )
    } catch (error) {
        console.error('Error saving token:', error);
        throw new Error('Failed to save token');
    }

}


export const removeToken = async (refreshToken: string) => {
    try {
        await pool.query('DELETE FROM tokens WHERE refresh_token = $1', [refreshToken]);
    } catch (error) {
        console.error('Error removing token:', error);
        throw new Error('Failed to remove token');
    }
}

export const findToken = async (refreshToken: string) => {
    try {
        const res = await pool.query('SELECT * FROM tokens WHERE refresh_token = $1', [refreshToken])
        return res.rows[0]
    } catch (error) {
          console.error('Error find token:', error);
        throw new Error('Failed to find token');
    }
}