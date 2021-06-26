import authRoutes from './auth.js'
import userRoutes from './user.js'

export const registerRoutes = (app) => {
    app.use('/api/auth', authRoutes)
    app.use('/api/users', userRoutes)
}