import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import * as controller from '../controllers/category.js'


const router = express.Router()

router.post('/', expressAsyncHandler(controller.store))
router.get('/', expressAsyncHandler(controller.index))

export default router