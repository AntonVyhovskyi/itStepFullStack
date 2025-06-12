const express = require('express')
const cors = require('cors')

require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


const app = express();
app.use(express.json());

app.post('/create-session', async (req, res) => {
    const { items } = req.body

    if (!items || !Array.isArray(items)) {
        return res.status(400).json({ error: 'Невірний формат товару' })
    }

    try {
        const lineItems = items.map(item => ({
            price_data: {
                currency: item.currency || 'usd',
                product_data: {
                    name: item.name || 'Unnamed product'
                },
                unit_amount: item.price*100,
            },
            quantity: item.quantity || 1
        }));

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
        res.status(500).json({ error: 'Помилка при створенні сесії оплати' });
    }
})


app.use(cors({
    origin: ['http://localhost:3000', 'https://yourdomain.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
}));

app.listen(3000, () => console.log(`Server running on port 3000`));