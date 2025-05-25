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

    if (method === GET && pathname === '/books') {
        try {
            const result = await client.query('SELECT * FROM books');
            res.writeHead(200);
            res.end(JSON.stringify(result.rows));
        } catch (error) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    }

    else if (method === GET && pathname.startsWith('/books/')) {
        try {
            const id = pathname.split('/')[2]
            const result = await client.query('SELECT * FROM books WHERE id = $1', [id]);
            res.writeHead(200);
            res.end(JSON.stringify(result.rows[0] || null));
        } catch (error) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    }

    else if (method === POST && pathname === '/books') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk
        })
        req.on('end', async () => {
            try {
                const { title, author, year, rating } = JSON.parse(body)
                const result = await client.query('INSERT INTO books (title, author, year, rating) VALUES ($1, $2, $3, $4) RETURNING *', [title, author, year, rating]);
                res.writeHead(200);
                res.end(JSON.stringify(result.rows));
            } catch (error) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: error.message }));
            }
        })

    }

    else if (method === PUT && pathname.startsWith('/books/')) {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk
        })

        req.on('end', async () => {
            try {
                const id = pathname.split('/')[2]
                const { title, author, year, rating } = JSON.parse(body)
                const result = await client.query('UPDATE books SET title = $1, author = $2, year = $3, rating = $4 WHERE id = $5 RETURNING * ', [title, author, year, rating, id]);
                res.writeHead(200);
                res.end(JSON.stringify(result.rows));
            } catch (error) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: error.message }));
            }
        })
    }

    else if (method === DELETE && pathname.startsWith('/books/')) {
        try {
            const id = pathname.split('/')[2]

            const result = await client.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
            res.writeHead(200);
            res.end(JSON.stringify(result.rows[0]));
        } catch (error) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    } else {
        res.end(JSON.stringify({ error: 'Requiere not found' }));
    }




})

server.listen(PORT, () => {
    console.log(`Сервер запущено на ${apiUrl}`);
});