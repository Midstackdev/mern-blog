import Post from "../models/Post.js"

export const store = async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const post = await newPost.save()
        return res.status(201).json(post)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const update = async (req, res) => {
    
    try {
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true })
                return res.status(201).json(updatedPost)
            } catch (error) {
                return res.status(500).json({ message: error.message })
            }
        }else {
            return res.status(401).json({ message: 'You can update only your post'})
        }
    } catch (error) {
        return res.status(404).json({ message: "Post not Found" })
    }

}

export const index = async (req, res) => {
    const  { username , category } = req.query
    
    try {
        const posts = username ? await Post.find({ username }) : category ? await Post.find({ categories: { $in: [category] }}) : await Post.find()
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const show = async (req, res) => {
    
    try {
        const post = await Post.findById(req.params.id)
        return res.status(201).json(post)
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

export const remove = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username) {
            try {
                await post.delete()
                return res.status(201).json({ message: 'Post has been deleted'})   
            } catch (error) {
                return res.status(500).json({ message: error.message })
            }
        }else {
            return res.status(401).json({ message: 'You can delete only your post'})
        }
    } catch (error) {
        return res.status(404).json({ message: "Post not Found" })
    }

}