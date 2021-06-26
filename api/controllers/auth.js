import User from '../models/User.js'
import bcrypt from 'bcrypt'

const rounds = 10 

export const register = async (req, res) => {
  
    const salt = await bcrypt.genSalt(rounds)
    const user =  new User ({
        username: req.body.username,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt),
    })

    const createdUser = await user.save()

    return res.status(201).json(createdUser)

}

export const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if(user) {
        if(await bcrypt.compare(req.body.password, user.password)) {
            const { password, ...others } = user._doc
            return res.status(200).json(others)
        }
    }
    return res.status(401).send({ message: 'Invalid email or password'})
}