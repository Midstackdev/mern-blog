import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import * as controller from '../controllers/user.js'


const router = express.Router()

router.put('/:id', expressAsyncHandler(controller.update))
router.delete('/:id', expressAsyncHandler(controller.remove))
router.get('/:id', expressAsyncHandler(controller.show))

export default router