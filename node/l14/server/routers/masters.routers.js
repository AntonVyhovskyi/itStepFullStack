const express = require('express')
const router = express.Router()
const mastersController = require('../controllers/masters-controller')


router.get('/masters', mastersController.getMasters)


module.exports = router