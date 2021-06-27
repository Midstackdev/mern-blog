import React from 'react'
import { Link } from 'react-router-dom'
import './read.css'

export default function Read({ post }) {
    return (
        post ? (
        <div className="readPost">
            <div className="readPostWrapper">
                {post.photo && (
                    <img 
                        src={post.photo} 
                        alt="" 
                        className="readPostImg" 
                    />
                )}
                <h1 className="readPostTitle">
                    {post.title}
                    <div className="readPostEdit">
                    <i className="readPostIcon far fa-edit"></i>
                    <i className="readPostIcon far fa-trash-alt"></i>
                    </div>
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
