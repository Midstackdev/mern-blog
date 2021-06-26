import authRoutes from './auth.js'
import userRoutes from './user.js'
import postRoutes from './posts.js'

export const registerRoutes = (app) => {
    app.use('/api/auth', authRoutes)
    app.use('/api/users', userRoutes)
    app.use('/api/posts', postRoutes)
}