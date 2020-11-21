const Router = require('koa-router')
const router = Router()

const {uploader} = require('../middlewares/multer')
const { Authentication } = require("../middlewares/auth");

let postingController = require('../controllers/posting')


router.get('/', async (ctx,next) => {
    ctx.body = 'ini dalam possting '
    ctx.status = 200;
})

router.get('/all',Authentication,postingController.AllPosting);
router.get('/:posting_id',postingController.GetPosting)
router.post('/create',uploader.single('image'),Authentication,postingController.CreatePosting);
router.put('/edit/:id',uploader.single('image'),Authentication,postingController.EditPosting);
router.delete('/delete/:posting_id',Authentication,postingController.DeletePosting);

module.exports = router;
