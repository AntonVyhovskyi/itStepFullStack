import express, { Request, Response } from 'express';
// import trukObject from  './types/express';

import {pool} from './configs/db'

import dotenv from 'dotenv';

import userRouter from './routers/user.router'
import portfolioRouter from './routers/portfolio.router'
import { errorHandler } from './middleware/errorHandler';





dotenv.config();

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/portfolio', portfolioRouter)


app.get('/', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.send(`Сервер працює! Підключення до бази данних успішне!  Час на сервері: ${result.rows[0].now} `);
    } catch (error) {
        res.status(500).send('не вдалося приєднатись до бд')
    }

});

app.use(errorHandler)

app.listen(3000, () => {
    console.log(`⚡ Сервер запущено на http://localhost:3000`);
});