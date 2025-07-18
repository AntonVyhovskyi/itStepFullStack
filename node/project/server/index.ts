import express, { Request, Response } from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';

import { pool } from './configs/db'

import dotenv from 'dotenv';

import userRouter from './routers/user.router'
import portfolioRouter from './routers/portfolio.router'
import skillRouter from './routers/skill.router'
import projectRouter from './routers/project.router'
import { errorHandler } from './middleware/errorHandler';





dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
const allowedOrigins = [
    'http://localhost',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://example.com'
];
app.use(cors({
    origin: function (origin, callback) {

        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'CORS policy: Origin не дозволений';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/user', userRouter);
app.use('/portfolio', portfolioRouter)
app.use('/skill', skillRouter)
app.use('/project', projectRouter)


app.get('/testDB', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.send(`Сервер працює! Підключення до бази данних успішне!  Час на сервері: ${result.rows[0].now} `);
    } catch (error) {
        res.status(500).send('не вдалося приєднатись до бд')
    }

});
app.get('/', (req: Request, res: Response) => {
    res.send(`Сервер працює! `);


});


app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`⚡ Сервер запущено на http://localhost:${PORT}`);
});