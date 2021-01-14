const express = require('express')
const router = express.Router()
const controller = require('../controllers/category')


router.get('/', controller.getAll)
router.get('/:CategoryId', controller.getByID)
router.delete('/:CategoryId', controller.delete)
router.post('/', controller.create)
router.patch('/:CategoryId', controller.update)

module.exports = router