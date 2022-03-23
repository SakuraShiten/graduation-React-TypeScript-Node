const Router = require('express')
const router = new Router()
const newsController = require('../controllers/clientController')

router.post('/create', newsController.create)
router.post('/', newsController.getAll)

module.exports = router