const { Pool } = require('pg');
const http = require('http');
const { parse } = require('url');
require('dotenv').config();

const client = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: +process.env.DB_PORT,
})


const [GET, POST, PUT, DELETE, OPTIONS] = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'];
const apiUrl = process.env.API_URL;
const PORT = 3000;


const server = http.createServer(async (req, res) => {
    const method = req.method
    const parsedUrl = parse(req.url, true)
    const pathname = parsedUrl.pathname

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    if (method === OPTIONS) {
        res.writeHead(204)
        res.end()
        return
    }

    if (method === GET) {
        if (pathname === '/customer-orders') {
            try {
                const result = await client.query('SELECT name, product FROM custumers LEFT JOIN orders ON orders.custumer_id = custumers.id')
                res.writeHead(200)
                res.end(JSON.stringify(result.rows))
            } catch (error) {
                res.writeHead(500)
                res.end(JSON.stringify({ error }))
            }
        } else if (pathname === '/only-orders') {
            try {
                const result = await client.query('SELECT name, product FROM custumers JOIN orders ON orders.custumer_id = custumers.id')
                res.writeHead(200)
                res.end(JSON.stringify(result.rows))
            } catch (error) {
                res.writeHead(500)
                res.end(JSON.stringify({ error }))
            }
        } else if (pathname === '/unmatched-orderss') {
            try {
                const result = await client.query('SELECT name, product FROM custumers RIGHT JOIN orders ON orders.custumer_id = custumers.id')
                res.writeHead(200)
                res.end(JSON.stringify(result.rows))
            } catch (error) {
                res.writeHead(500)
                res.end(JSON.stringify({ error }))
            }
        }
    }


})


server.listen(PORT, () => {
    console.log(`Сервер запущено на ${apiUrl}`);
});