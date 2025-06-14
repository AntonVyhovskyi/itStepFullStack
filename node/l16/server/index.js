const express = require('express')
const cors = require('cors')
const fs = require('fs')


require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


const app = express();
app.use(cors())
app.use(express.json());

app.get('/products', (req, res) => {

    fs.readFile('products.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('error reading file', err)
            return res.status(500).send('Internal server error')
        }
        let products

        try {
            products = JSON.parse(data)
        } catch (error) {
            console.error('error parsing data', error);
            res.status(500).send('error parsing data')
        }
        res.status(200).json(products)

    })
})



app.post('/create-session', async (req, res) => {
    const { items } = req.body
    if (!items || !Array.isArray(items)) {
        return res.status(400).json({ error: 'Невірний формат товару' })
    }

    try {
        const data = await fs.promises.readFile('products.json', 'utf-8')
        const products = JSON.parse(data)
        const lineItems = items.map(item => {
            const product = products.find(el => el.id === item.id)

            if (!product) {
                throw new Error(`product with if ${item.id} not found`)
            }
            return {
                price_data: {
                    currency: product.currency || 'usd',
                    product_data: {
                        name: product.title || 'Unnamed product'
                    },
                    unit_amount: Math.round(product.price * 100),
                },
                quantity: item.quantity || 1
            }

        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: lineItems,
            success_url: 'https://your-site.com/success',
            cancel_url: 'https://your-site.com/cancel',
        })
        res.json({ url: session.url });
    } catch (error) {
        console.error(error);
        res.status(500).json(error)
    }
})


app.use(cors({
    origin: ['http://localhost:3000', 'https://yourdomain.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
}));

app.listen(3000, () => console.log(`Server running on port 3000`));