import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { connectToDB } from './config/db.js'
import { setEnvironment } from './config/env.js'
import { registerRoutes } from './routes/index.js'
import { fileUpload } from './services/upload.js'

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

connectToDB()
setEnvironment(app)

app.use('/images', express.static(path.join(__dirname, "public/images")))

app.get('/', (req, res) => {
    res.send('Server is ready')
})

registerRoutes(app)
fileUpload(app)

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})