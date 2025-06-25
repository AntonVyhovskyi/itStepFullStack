const express = require('express')
const cors = require('cors')
const { v4: uuid } = require('uuid')

const users = [
    {
        id: '1',
        name: 'Alex'
    },
    {
        id: '2',
        name: 'Anton'
    }
]


const app = express()

app.use(express.json())
app.use(cors())



app.get('/api/users', (req, res)=>{
    res.status(200).json(users)
})


app.post('/api/users', (req, res)=>{
    const {name} = req.body
    if(!name) {
        return res.status(400).json({ message: 'Name is required' })
    }
    const newUser = {id: uuid(), name}
    users.push(newUser)
    res.status(200).json(newUser)

})


module.exports = app