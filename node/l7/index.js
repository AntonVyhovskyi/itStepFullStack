const http = require('http')
const { Pool } = require('pg')

const client = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
})

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET' && req.url === '/wishes') {
        try {
            const result = await client.query('SELECT * FROM wishes')
            res.writeHead(200)
            res.end(JSON.stringify(result.rows))
        } catch (err) {
            res.writeHead(500)
            res.end(JSON.stringify({ error: err.message }))
        }
    } else if (req.method === 'POST' && req.url === '/wishes') {
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString();
        })
        req.on('end', async () => {
            try {
                const { name, text } = JSON.parse(body)
                const result = await client.query(`INSERT INTO wishes (name, text) VALUES ($1, $2) RETURNING *`, [name, text])
                res.writeHead(201);
                res.end(JSON.stringify(result.rows[0]))
            } catch (error) {
                res.writeHead(500)
                res.end(JSON.stringify({ error: error.message }))
            }
        })

    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Маршрут не знайдено' }));
    }
})

server.listen(3000, () => {
    console.log('Сервер запущено на http://localhost:3000');
});