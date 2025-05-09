// server.js
const http = require('http');
const fs = require('fs');




const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }


    if (req.method === 'GET' && req.url === '/products') {

        let body = []

        fs.readFile('db.json', (err, date) => {

            if (err) {
                console.log(err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Не знайдено товари', data: body }));
                return

            }
            body = JSON.parse(date)
            console.log('відправлено список товарів');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Дані прийнято', products: body }));



        })
     
    } else

    if (req.method === 'GET' && req.url === '/products/sortPriceUp') {

        let body = []

        fs.readFile('db.json', (err, date) => {

            if (err) {
                console.log(err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Не знайдено товари', data: body }));
                return

            }
            body = JSON.parse(date)
            body = body.sort((a, b)=> a.price - b.price)
            console.log('відправлено список товарів');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Дані прийнято', products:  body}));



        })
     
    } else

    if (req.method === 'GET' && req.url === '/products/sortPriceDown') {

        let body = []

        fs.readFile('db.json', (err, date) => {

            if (err) {
                console.log(err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Не знайдено товари', data: body }));
                return

            }
            body = JSON.parse(date)
            body = body.sort((a, b)=> b.price - a.price)
            console.log('відправлено список товарів');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Дані прийнято', products:  body}));



        })
     
    }else

    if (req.method === 'GET' && req.url === '/products/sortNameUp') {

        let body = []

        fs.readFile('db.json', (err, date) => {

            if (err) {
                console.log(err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Не знайдено товари', data: body }));
                return

            }
            body = JSON.parse(date)
            body = body.sort((a, b)=>  a.title.localeCompare(b.title))
            console.log('відправлено список товарів');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Дані прийнято', products:  body}));



        })
     
    } else
    if (req.method === 'GET' && req.url === '/products/sortNameDown') {

        let body = []

        fs.readFile('db.json', (err, date) => {

            if (err) {
                console.log(err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Не знайдено товари', data: body }));
                return

            }
            body = JSON.parse(date)
            body = body.sort((a, b)=>  b.title.localeCompare(a.title))
            console.log('відправлено список товарів');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Дані прийнято', products:  body}));



        })
     
    }  else if  (req.method === 'POST' && req.url === '/products/check') {

        let products = []
        let body = ''
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const { id } = JSON.parse(body);
            console.log(id);
            
            fs.readFile('db.json', (err, date) => {

                if (err) {
                    console.log(err);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                   
                    return
    
                }
                products = JSON.parse(date)
                const product = products.find(el=>el.id === Number(id))
                console.log(product);
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Знайдено кількість товару в наявності', data:  product.rating.count}));
                
                
                

               
            })
        })
        
       
     
    } 

    
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Запуск сервера
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер працює на http://localhost:${PORT}`);
});