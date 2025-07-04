const cluster = require('cluster');
const os = require('os');
const express = require('express');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} is running`);


  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

 
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });

} else {
  const app = express();

  app.get('/clustered', (req, res) => {
    res.send(`Handled by PID: ${process.pid}, type: cluster`);
  });

  app.listen(3001, () => {
    console.log(`Worker ${process.pid} started`);
  });
}