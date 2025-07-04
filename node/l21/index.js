const express = require('express');
const { Worker } = require('worker_threads');
const path = require('path');
const { fork, exec, spawn } = require('child_process');

const app = express();


app.get('/heavy-thread', (req, res) => {
    const start = Date.now();
    const worker = new Worker(path.join(__dirname, '/worker.js'))

    worker.on('message', (sum) => {
        const duration = Date.now() - start
        res.json({
            pid: worker.threadId,
            result: sum,
            duration,
            type: 'worker'
        })
    })

    worker.on('error', (err) => {
        res.status(500).json({ error: err.message });
    });
})


app.get('/heavy-fork/:number', (req, res) => {
    const start = Date.now();
    const child = fork(path.join(__dirname, '/factorial.js'))

    const numberToCalculate = req.params.number;
    child.send(numberToCalculate)
    child.on('message', (result) => {
        const duration = Date.now() - start
        res.json({
            pid: child.pid,
            result: result,
            duration,
            type: 'fork'
        })
    });

    child.on('error', (err) => {
        res.status(500).json({ error: err.message });
    });
})

app.get('/run-shell', (req, res) => {
    const start = Date.now();

    const child = exec('ls -lh', (error, stdout, stderr) => {
        const duration = Date.now() - start;



        res.json({
            pid: child.pid,
            stdout,
            stderr,
            duration,
            type: 'shell',
            error: error ? error.message : null
        });
    });
});

app.get('/log-grep', (req, res) => {
    const grep = spawn('grep', ['ERROR', path.join(__dirname, 'logs.txt')])
    res.write(`PID: ${grep.pid}\nType: spawn\n\n`);

    grep.stdout.on('data', (chunk) => {
        res.write(chunk);
    });

    grep.stderr.on('data', (chunk) => {
        res.write(`STDERR: ${chunk}`);
    });

    grep.on('close', () => {
        res.end();
    });
})

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});