import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import * as controller from '../controllers/post.js'



const router = express.Router()

router.post('/', expressAsyncHandler(controller.store))
router.get('/', expressAsyncHandler(controller.index))
router.get('/:id', expressAsyncHandler(controller.show))
router.put('/:id', expressAsyncHandler(controller.update))
router.delete('/:id', expressAsyncHandler(controller.remove))

export default router