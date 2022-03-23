const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const newsRouter = require('./newsRouter')
const clientRouter = require('./clientRouter')
const noticeRouter = require('./noticeRouter')
const bookingRouter = require('./bookingRouter')

router.use('/user', userRouter)
router.use('/news', newsRouter)
router.use('/client', clientRouter)
router.use('/notice', noticeRouter)
router.use('/booking', bookingRouter)

module.exports = router