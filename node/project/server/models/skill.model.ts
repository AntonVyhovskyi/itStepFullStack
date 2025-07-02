import { pool } from "../configs/db";


export interface Skill {
    id: number;
    name: string;
}

const skillModel = {

    async create(name: string): Promise<Skill> {
        const result = await pool.query(`INSERT INTO skills (name) VALUES ($1) RETURNING *`, [name])
        return result.rows[0]
    },

    async getAll(): Promise<Skill[] | null> {
        const result = await pool.query('SELECT * FROM skills ORDER BY name');
        return result.rows || null;
    },

    async getById(id: number): Promise<Skill | null> {
        const result = await pool.query('SELECT * FROM skills WHERE id = $1', [id]);
        return result.rows[0] || null;
    },

    async getByName(name: string): Promise<Skill | null> {
        const result = await pool.query('SELECT * FROM skills WHERE name = $1', [name]);
        return result.rows[0] || null;
    },

    async update(id: number, name: string): Promise<Skill | null> {
        const result = await pool.query('UPDATE skills SET name = $1 WHERE id = $2 RETURNING *', [name, id])
        return result.rows[0]
    },


    async delete(id: number): Promise<boolean> {
        const result = await pool.query('DELETE FROM skills WHERE id = $1', [id]);
        return result.rowCount > 0;
    },

    async getAllByPortfolioId(id: number): Promise<Skill[] | null> {
        const result = await pool.query(`
            SELECT s.id, s.name 
            FROM portfolio_skills ps
            JOIN skills s ON s.id = ps.skill_id
            WHERE ps.portfolio_id = $1
            `, [id])

        return result.rows;
    },

    async addToPortfolio(portfolioId: number, skillName: string) {
        const skill = await this.getByName(skillName)
        let skillId: number;

        if (!skill) {
            const newSkill = await this.create(skillName);
            skillId = newSkill.id;
        } else {
            skillId = skill.id;
        }

        const result = await pool.query(
            `INSERT INTO portfolio_skills (portfolio_id, skill_id) VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING *`,
            [portfolioId, skillId]
        );

        return result.rows[0];
    },

    async removeFromPortfolio(portfolioId: number, skillId: number): Promise<void> {
        await pool.query(
            `DELETE FROM portfolio_skills WHERE portfolio_id = $1 AND skill_id = $2`,
            [portfolioId, skillId]
        );
    }


}

export default skillModel;