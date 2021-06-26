import Category from "../models/Category.js"

export const store = async (req, res) => {
    const newCategory = new Category(req.body)
    try {
        const category = await newCategory.save()
        return res.status(201).json(category)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const index = async (req, res) => {
    try {
        const categories = await Category.find()
        return res.status(201).json(categories)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}