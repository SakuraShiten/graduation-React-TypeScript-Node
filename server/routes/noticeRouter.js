const Router = require('express')
const router = new Router()
const newsController = require('../controllers/noticeController')

router.post('/create', newsController.create)
router.post('/delete', newsController.delete)
router.post('/', newsController.getAll)

module.exports = router