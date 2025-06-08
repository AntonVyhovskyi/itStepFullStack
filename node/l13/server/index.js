const express = require('express');
const userRoutes = require('./routes/dreams.routes');
const cors = require('cors')

const app = express()

app.use(cors())
app.use(cors({
  origin: ['http://localhost:3000', 'https://yourdomain.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  credentials: true, 
}));
app.use(express.json())
app.use(userRoutes)


app.use((err, req, res, next) => {
  

  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Помилка на сервері',
    },
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});