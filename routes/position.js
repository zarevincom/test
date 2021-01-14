const express = require('express')
const router = express.Router()
const controller = require('../controllers/position')


router.get('/:id', controller.getByID)
router.post('/', controller.create)
router.delete('/', controller.delete)
router.patch('/:id', controller.update)

module.exports = router