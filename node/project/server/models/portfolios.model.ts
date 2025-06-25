import { pool } from '../configs/db'


export interface IPortfolio {
    id: number,
    user_id: number,
    first_name: string,
    last_name?: string,
    middle_name?: string,
    title: string,
    description: string,
    created_at: string,
    updated_at: string
}

export const createPortfolio = async (
    portfolio: Omit<IPortfolio, 'id' | 'created_at' | 'updated_at'>
): Promise<IPortfolio> => {
    const {
        user_id,
        first_name,
        last_name,
        middle_name,
        title,
        description
    } = portfolio

    const result = await pool.query(
        `
    INSERT INTO portfolios (
      user_id, first_name, last_name, middle_name, title, description, created_at, updated_at
    ) VALUES (
      $1, $2, $3, $4, $5, $6, NOW(), NOW()
    ) RETURNING *
    `,
        [user_id, first_name, last_name || null, middle_name || null, title, description]
    )

    return result.rows[0] as IPortfolio
}


export const updatePortfolio = async (portfolio: Omit<IPortfolio, 'created_at' | 'updated_at'>) : Promise<IPortfolio[] | null> => {
    const {
        id,
        user_id,
        first_name,
        last_name,
        middle_name,
        title,
        description
    } = portfolio

    const newPortfolio = await pool.query(
        `
    UPDATE portfolios SET
      user_id = $1,
      first_name = $2,
      last_name = $3,
      middle_name = $4,
      title = $5,
      description = $6,
      updated_at = NOW()
    WHERE id = $7 AND user_id = $8
     RETURNING *`, [user_id, first_name, last_name || null, middle_name || null, title, description, id, user_id])

     return newPortfolio.rows[0] || null
}

export const getPortfolio = async (id: number): Promise<IPortfolio | null> => {
    const portfolio = await pool.query('SELECT * FROM portfolios WHERE id = $1', [id])
    return portfolio.rows[0] || null
}

export const getPortfoliosByUserId = async (id: number): Promise<IPortfolio[] | null> => {
    const portfolios = await pool.query('SELECT * FROM portfolios WHERE user_id = $1', [id])
    return portfolios.rows || null
}






export const deletePortfolio = async (id: number, user_id: number): Promise<boolean> => {
    try {
        const result = await pool.query('DELETE FROM portfolios WHERE id = $1 AND user_id = $2', [id, user_id])
       
        return result.rowCount > 0;
    } catch (error) {
        return false
    }

}