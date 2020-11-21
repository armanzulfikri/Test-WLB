const Router = require('koa-router')
const router = Router()

const {uploader} = require('../middlewares/multer')
const { Authentication } = require("../middlewares/auth");

let replyController = require('../controllers/reply')


router.get('/', async (ctx,next) => {
    ctx.body = 'ini dalam reply bravo'
    ctx.status = 200;
})

router.get('/all',replyController.allReply)
router.post('/user/create/:posting_id',uploader.single('image'), Authentication, replyController.ReplyUser);
router.put('/user/edit/:reply_id',uploader.single('image'), Authentication, replyController.EditReplyUser);
router.delete('/user/delete/:reply_id', Authentication, replyController.DeleteReplyUser);
router.get('/user/:reply_id', replyController.GetReplyUser)



module.exports = router;
