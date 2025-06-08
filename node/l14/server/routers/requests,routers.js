const express = require('express')
const router = express.Router()
const requestsController = require('../controllers/requests-controller')


router.get('/requests', requestsController.getRequests)
router.get('/requests/:email', requestsController.getUserRequests)
router.post('/requests/createNewRequest', requestsController.postUserRequest)
router.delete('/requests/:id', requestsController.deleteUserRequest)
router.patch('/requests/changeStatus', requestsController.patchStatusOfRequest)


module.exports = router