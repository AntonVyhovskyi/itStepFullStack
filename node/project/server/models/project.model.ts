import { pool } from "../configs/db";



export interface IProject {
    id: number,
    title: string,
    description: string,
    image_url: string,
    github_url: string,
    live_url: string, 
    created_at: string,
    portfolio_id: number
}

const projectModel = {
    async getProjectById (id:number):Promise<IProject | null> {
        const result = await pool.query('SELECT * FROM projects WHERE id = $1', [id])
        return result.rows[0] || null
    },
    async getProjectsByPortfolioId (portfolio_id:number):Promise<IProject[] | null> {
        const result = await pool.query('SELECT * FROM projects WHERE portfolio_id = $1', [portfolio_id])
        return result.rows || null
    },
    async addProject (info: Omit<IProject, 'id' | 'created_at'>):Promise<IProject | null> {
        const {title, description, image_url, github_url, live_url, portfolio_id} = info;
        const result = await pool.query(`INSERT INTO projects 
            (title, description, image_url, github_url, live_url, created_at, portfolio_id)
            VALUES ($1,$2,$3,$4,$5, NOW(), $6) RETURNING *
            `, [title, description, image_url, github_url, live_url, portfolio_id])
        return result.rows[0] || null
    },

    async updateProject (info: Omit<IProject, 'portfolio_id' | 'created_at'>):Promise<IProject | null> {
        const {title, description, image_url, github_url, live_url, id} = info;
        const result = await pool.query(`UPDATE projects 
            SET title = $1, description = $2, image_url = $3, github_url = $4, live_url = $5 WHERE id = $6 RETURNING *`,
        [title, description, image_url, github_url, live_url, id])
        return result.rows[0] || null
    },

    async deleteProject (id:number): Promise<boolean> {
        const result = await pool.query(`DELETE FROM projects WHERE id = $1`, [id])
        return result.rowCount > 0;
    }


}

export default projectModel;