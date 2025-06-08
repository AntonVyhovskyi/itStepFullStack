const express = require('express')
const cors = require('cors')

const masterRouter = require('./routers/masters.routers')
const requestsController = require('./routers/requests,routers')

const app = express()


app.use(cors())

app.use(cors({
  origin: ['http://localhost:3000', 'https://yourdomain.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  credentials: true, 
}));

app.use(express.json())

app.use(masterRouter)
app.use(requestsController)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});