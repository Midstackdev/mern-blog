import axios from 'axios'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './read.css'

export default function Read({ post }) {
    const PF = "http://localhost:5000/images/"
    const { user } = useContext(Context)

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {data: {username: user.username}})
            window.location.replace('/')
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
                <h1 className="readPostTitle">
                    {post.title}
                    {post.username === user?.username && (
                        <div className="readPostEdit">
                            <i className="readPostIcon far fa-edit"></i>
                            <i className="readPostIcon far fa-trash-alt" onClick={handleDelete}></i>
                        </div>

                    )}
                </h1>
                <div className="readPostInfo">
                    <span className="readPostAuthor">
                        Author: 
                        <Link className="link" to={`/?username=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="readPostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="readPostDesc">
                  {post.desc}
                </p>
            </div>
        </div>
        ) : null
    )
}
