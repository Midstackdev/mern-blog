import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        default: '',
    },
    profilePicture: {
        type: String,
        default: '',
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        default: [],
    },
}, {
    timestamps: true
})

export default mongoose.model('Post', postSchema)