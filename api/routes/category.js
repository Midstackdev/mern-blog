import express from 'express'
import expressAsyncHandler from 'express-async-handler'


const router = express.Router()

router.post('/', expressAsyncHandler())

export default router