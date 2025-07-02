const express = require('express');
const { Worker } = require('worker_threads');
const path = require('path');
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors())



app.post('/analize-text', (req, res)=>{
    const {text} = req.body

    const worker = new Worker(path.resolve(__dirname, './worker.js'), {
        workerData: text
    })

    worker.on('message', result=>{
        res.json({...result, workerPid: worker.threadId})
    })

    worker.on('error', err =>  {
    res.status(500).json({ error: 'Worker error', details: err.message });
  })
})

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});