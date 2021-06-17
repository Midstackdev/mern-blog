import express from 'express'
import dotenv from 'dotenv'
import { connectToDB } from './config/db.js'
import { setEnvironment } from './config/env.js'
import { registerRoutes } from './routes/index.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

connectToDB()
setEnvironment(app)

app.get('/', (req, res) => {
    res.send('Server is ready')
})

registerRoutes(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})