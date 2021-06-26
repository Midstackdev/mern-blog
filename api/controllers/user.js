import User from '../models/User.js'
import Post from '../models/Post.js'
import bcrypt from 'bcrypt'

const rounds = 10 

export const update = async (req, res) => {
    
    if(req.params.id === req.body.userId) {
        if(req.body.password) {
            const salt = await bcrypt.genSalt(rounds)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
    
        return res.status(201).json(updatedUser)
    }else {
        return res.status(401).json({ message: 'You can update only your account.'})
    }

}

export const remove = async (req, res) => {
    
    if(req.params.id === req.body.userId) {
        try {
            
            const user = await User.findById(req.params.id)
            try {
                await Post.deleteMany({ username: user.username })
                await User.findByIdAndDelete(req.params.id)
            
                return res.status(201).json({ message: 'User have ben deleted.'})
            } catch (error) {
                return res.status(500).json({ message: error.message })
            }
        } catch (error) {
            return res.status(404).json({ message: "User not Found" })
        }

    }else {
        return res.status(401).json({ message: 'You can delete only your account.'})
    }

}

export const show = async (req, res) => {
    
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc
        return res.status(201).json(others)
    } catch (error) {
        return res.status(404).json({ message: "User not Found" })
    }


}
