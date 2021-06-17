import React from 'react'

import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img 
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80" 
                alt="" 
                className="postImg" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="postDate">2 days ago</span>
                <p className="postDesc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Nemo esse beatae possimus mollitia sit nihil doloremque vel delectus quia magnam cum, 
                    laudantium ipsa quod soluta minima distinctio porro eius voluptates?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Beatae quae aperiam recusandae, eaque architecto ipsam.
                </p>
            </div>
        </div>
    )
}
