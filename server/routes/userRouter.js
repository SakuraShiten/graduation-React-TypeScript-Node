const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/create', userController.create)
router.post('/delete', userController.delete)
router.post('/', userController.getAll)
router.post('/check', userController.check)

module.exports = router