const Router = require('express')
const router = new Router()
const bookingController = require('../controllers/bookingController')


router.post('/', bookingController.getAll)
router.post('/cancel', bookingController.cancel)
router.post('/create', bookingController.create)
router.post('/space', bookingController.getSpacesTime)


module.exports = router