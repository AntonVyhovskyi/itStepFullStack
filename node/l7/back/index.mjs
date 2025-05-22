
import http from 'http'
import { parse } from 'url'

let phrases = [
  {
    id: 101,
    text: 'apple',
    translate: 'яблуко',
    is_learned: false
  },
  {
    id: 102,
    text: 'book',
    translate: 'книга',
    is_learned: true
  },
  {
    id: 103,
    text: 'car',
    translate: 'автомобіль',
    is_learned: false
  },
  {
    id: 104,
    text: 'sun',
    translate: 'сонце',
    is_learned: true
  },
  {
    id: 105,
    text: 'water',
    translate: 'вода',
    is_learned: false
  }
]

const server = http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const method = req.method
    const pathname = parsedUrl.pathname

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    if (method === 'OPTIONS') {
        res.writeHead(204)
        return res.end()
    }

    if (method === 'GET' && pathname === '/phrases') {
        const query = parsedUrl.query
        if (query) {
            let filterPhrases = [...phrases]
            if (query.text) {
                const text = query.text.toLowerCase()
                filterPhrases = filterPhrases.filter(el => el.text.toLocaleLowerCase().includes(text) || el.translate.toLocaleLowerCase().includes(text))
            }
            if (query.is_learned) {
                const isLearned = query.is_learned === 'true'
                    ? true
                    : query.is_learned === 'false'
                        ? false
                        : undefined;

                if (isLearned !== undefined) {
                    filterPhrases = filterPhrases.filter(el => el.is_learned === isLearned)
                }
            }

            res.writeHead(200);
            return res.end(JSON.stringify(filterPhrases));
        } else {
            res.writeHead(200)
            return res.end(JSON.stringify(phrases))
        }

    }
    else if (method === 'POST' && pathname === '/phrases') {
        let body = ''
        req.on('data', chunk => body += chunk)
        req.on('end', () => {
            try {
                const { text, translate } = JSON.parse(body)
                if (!text || !translate) {
                    res.writeHead(400)
                    return res.end(JSON.stringify({ error: 'Не всі поля заповнені' }))
                }
                const newPhrase = { id: Date.now(), text, translate, is_learned: false }
                phrases.push(newPhrase)
                res.writeHead(201)
                return res.end(JSON.stringify(newPhrase))
            } catch (error) {
                res.writeHead(400)
                return res.end(JSON.stringify({ error: 'Невірні дані' }))
            }

        })
    }

    else if (method === 'DELETE' && pathname.startsWith('/phrases')) {
        const phraseId = Number(parsedUrl.query?.id)
        if (!phraseId) {
            res.writeHead(400);
            return res.end(JSON.stringify({ error: 'Не вказано або невірний id' }));
        }
        const index = phrases.findIndex(el => el.id === phraseId)
        if (index === -1) {
            res.writeHead(404);
            return res.end(JSON.stringify({ error: 'Фраза не знайдена' }));
        }
        phrases.splice(index, 1)
        res.writeHead(204)
        return res.end();
    }

    else if (method === 'PUT' && pathname.startsWith('/phrases')) {
        const phraseId = Number(parsedUrl.query?.id)
        if (!phraseId) {
            res.writeHead(400);
            return res.end(JSON.stringify({ error: 'Не вказано або невірний id' }));
        }
        const index = phrases.findIndex(el => el.id === phraseId)
        if (index === -1) {
            res.writeHead(404);
            return res.end(JSON.stringify({ error: 'Фраза не знайдена' }));
        }
        phrases[index].is_learned = !phrases[index].is_learned
        res.writeHead(200)
        return res.end(JSON.stringify(phrases[index]));
    }

    else {
        res.writeHead(404)
        return res.end(JSON.stringify({ message: 'Маршрут не знайдено' }))
    }
})

server.listen(3000, () => {
    console.log('Сервер запустився на порту 3000');

})