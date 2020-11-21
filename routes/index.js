const Router = require('koa-router')
const router = Router()
const userRoutes = require('./user')
const postingRoutes = require('./posting')
const replyRoutes = require('./reply')

router.get('/', async (ctx,next) => {
    ctx.body = 'ini adalah home bravo'
    ctx.status = 200;
})

router.use('/users', userRoutes.routes())
router.use('/posting', postingRoutes.routes())
router.use('/reply', replyRoutes.routes())


module.exports = router