const express = require('express');
const userRoutes = require('./routes/dreams.routes');

const app = express()
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