import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './read.css'

export default function Read({ post }) {
    const PF = "http://localhost:5000/images/"
    const { user } = useContext(Context)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
        setTitle(post?.title)
        setDesc(post?.desc)
    }, [post])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {data: {username: user.username}})
            window.location.replace('/')
        } catch (error) {
            
        }
    }
    
    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {username: user.username, title, desc })
            // window.location.reload('/')
            setUpdateMode(false)
        } catch (error) {
            
        }
    }

    return (
        post ? (
        <div className="readPost">
            <div className="readPostWrapper">
                {post.photo && (
                    <img 
                        src={`${PF}${post.photo}`} 
                        alt="" 
                        className="readPostImg" 
                    />
                )}
                {updateMode ? 
                    (<input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="readPostTitleInput"
                        autoFocus
                    />) : (
                    <h1 className="readPostTitle">
                        {title}
                        {post.username === user?.username && (
                            <div className="readPostEdit">
                                <i className="readPostIcon far fa-edit" onClick={(e) => setUpdateMode(true)}></i>
                                <i className="readPostIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>

                        )}
                    </h1>
                )}
                <div className="readPostInfo">
                    <span className="readPostAuthor">
                        Author: 
                        <Link className="link" to={`/?username=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="readPostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? 
                    (<>
                    <textarea 
                        className="readPostDescInput" 
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <button className="updatePostButton" onClick={handleUpdate}>Update</button>
                    </>) : (
                    <p className="readPostDesc">
                    {desc}
                    </p>
                )}
            </div>
        </div>
        ) : null
    )
}
