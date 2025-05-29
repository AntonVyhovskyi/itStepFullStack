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
        if (pathname === '/citys') {
            try {
                const citys = await client.query('SELECT DISTINCT city FROM tournaments')
                res.writeHead(200)
                res.end(JSON.stringify(citys.rows))
            } catch (error) {
                res.writeHead(500)
                res.end(JSON.stringify(error))
            }



        } else if (pathname === '/tournaments') {
            try {
                const tournaments = await client.query('SELECT * FROM tournaments')
                res.writeHead(200)
                res.end(JSON.stringify(tournaments.rows))
            } catch (error) {
                res.writeHead(500)
                res.end(JSON.stringify(error))
            }

        } else if (pathname === '/statistics') {
            try {
                const select = `
                SELECT 
                COUNT(*) AS "totalTournaments",
                ROUND(AVG(prize_pool)) AS "averagePrizePool",
                SUM(players_registered) AS "totalPlayers"
                FROM tournaments
                  `;
                const statistics = await client.query(select)
                res.writeHead(200)
                res.end(JSON.stringify(statistics.rows))
            } catch (error) {
                res.writeHead(500)
                res.end(JSON.stringify(error))
            }
        } else if (pathname === '/top') {
            try {
                const select = `
                SELECT * FROM tournaments
                ORDER BY prize_pool
                LIMIT 5
                  `;
                const statistics = await client.query(select)
                res.writeHead(200)
                res.end(JSON.stringify(statistics.rows))
            } catch (error) {
                res.writeHead(500)
                res.end(JSON.stringify(error))
            }
        } else if (pathname === '/above-average') {
            try {
                const select = `
                SELECT * FROM tournaments WHERE prize_pool > ROUND( (SELECT AVG(prize_pool) FROM tournaments))
                  `;
                const statistics = await client.query(select)
                res.writeHead(200)
                res.end(JSON.stringify(statistics.rows))
            } catch (error) {
                res.writeHead(500)
                res.end(JSON.stringify(error))
            }
        }
    }
})


server.listen(PORT, () => {
    console.log(`Сервер запущено на ${apiUrl}`);
});