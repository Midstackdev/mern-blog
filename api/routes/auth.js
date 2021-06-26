import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import * as controller from '../controllers/auth.js'



const router = express.Router()

router.post('/register', expressAsyncHandler(controller.register))
router.post('/login', expressAsyncHandler(controller.login))

export default router