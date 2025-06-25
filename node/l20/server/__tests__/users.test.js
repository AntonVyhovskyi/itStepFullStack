const request = require('supertest')
const app = require('../app')


describe('Users API', () => {
    it('GET /api/users should return all users', async () => {
        const response = await request(app).get('/api/users')
        expect(response.status).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body.length).toBeGreaterThan(0)
    })

    it('POST /api/users should create a new user', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({ name: 'TestUser' })

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('id')
        expect(response.body.name).toBe('TestUser')
    })

    it('POST /api/users should return 400 if name is missing', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({})

        expect(response.status).toBe(400)
    })

})