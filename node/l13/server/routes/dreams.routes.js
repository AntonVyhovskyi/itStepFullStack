const express = require('express');
const router = express.Router();

const DUMMY_DREAMS = [
    {
        id: 'd1',
        title: 'Політ на повітряній кулі',
        description: 'Хочу побачити світанок з висоти пташиного польоту',
        category: 'подорож',
        imageUrl: 'https://example.com/balloon.jpg',
        creator: 'u1',
    },
    {
        id: 'd2',
        title: 'Вивчити японську',
        description: 'Давно мрію прочитати мангу в оригіналі',
        category: 'саморозвиток',
        imageUrl: 'https://example.com/japanese.jpg',
        creator: 'u2',
    },
    {
        id: 'd3',
        title: 'Пробігти марафон',
        description: 'Хочу довести собі, що можу пройти всю дистанцію',
        category: 'спорт',
        imageUrl: 'https://example.com/marathon.jpg',
        creator: 'u3',
    },
    {
        id: 'd4',
        title: 'Завести власну кав’ярню',
        description: 'Мрія з дитинства — маленьке місце з атмосферою',
        category: 'кар’єра',
        imageUrl: 'https://example.com/cafe.jpg',
        creator: 'u1',
    },
    {
        id: 'd5',
        title: 'Побачити північне сяйво',
        description: 'Це має бути щось чарівне та незабутнє',
        category: 'подорож',
        imageUrl: 'https://example.com/northern-lights.jpg',
        creator: 'u4',
    },
    {
        id: 'd6',
        title: 'Написати книгу',
        description: 'Хочу поділитися своєю історією з іншими',
        category: 'самореалізація',
        imageUrl: 'https://example.com/book.jpg',
        creator: 'u2',
    },
    {
        id: 'd7',
        title: 'Жити в гірському будиночку',
        description: 'Спокій, тиша і природа — ідеальний стиль життя',
        category: 'житло',
        imageUrl: 'https://example.com/mountain-house.jpg',
        creator: 'u5',
    },
    {
        id: 'd8',
        title: 'Побудувати дім для батьків',
        description: 'Хочу віддячити за все, що вони зробили',
        category: 'родина',
        imageUrl: 'https://example.com/parents-house.jpg',
        creator: 'u3',
    }
];


router.get('/:id', (req, res, next) => {
    const id = req.params.id
    const obj = DUMMY_DREAMS.find(el => el.id === id)
    if (!obj) {
        const error = new Error('Явно передана помилка');
        error.status = 400; // або 403, 500 тощо
        return next(error);
    }
    res.status(200).json(obj)
})

module.exports = router;