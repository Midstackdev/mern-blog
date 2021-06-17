import React from 'react'

import './read.css'

export default function Read() {
    return (
        <div className="readPost">
            <div className="readPostWrapper">
                <img 
                    src="https://images.unsplash.com/photo-1623852990731-472e0d1b047f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3151&q=80" 
                    alt="" 
                    className="readPostImg" 
                />
                <h1 className="readPostTitle">
                    Lorem ipsum, dolor sit amet.
                    <div className="readPostEdit">
                    <i className="readPostIcon far fa-edit"></i>
                    <i className="readPostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="readPostInfo">
                    <span className="readPostAuthor">
                        Author: <b>Al Smith</b>
                    </span>
                    <span className="readPostDate">2 days ago</span>
                </div>
                <p className="readPostDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Omnis et assumenda libero minus eaque, magni nobis, veritatis explicabo placeat, 
                    aperiam cupiditate nihil laboriosam nemo! Iure cumque perspiciatis, 
                    optio impedit dolorum nobis illo quibusdam commodi expedita aspernatur modi, 
                    ducimus, maiores iusto similique molestias quam repellendus eum non eligendi facilis odit. Eligendi?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Omnis et assumenda libero minus eaque, magni nobis, veritatis explicabo placeat, 
                    aperiam cupiditate nihil laboriosam nemo! Iure cumque perspiciatis, 
                    optio impedit dolorum nobis illo quibusdam commodi expedita aspernatur modi, 
                    ducimus, maiores iusto similique molestias quam repellendus eum non eligendi facilis odit. Eligendi?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Omnis et assumenda libero minus eaque, magni nobis, veritatis explicabo placeat, 
                    aperiam cupiditate nihil laboriosam nemo! Iure cumque perspiciatis, 
                    optio impedit dolorum nobis illo quibusdam commodi expedita aspernatur modi, 
                    ducimus, maiores iusto similique molestias quam repellendus eum non eligendi facilis odit. Eligendi?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Omnis et assumenda libero minus eaque, magni nobis, veritatis explicabo placeat, 
                    aperiam cupiditate nihil laboriosam nemo! Iure cumque perspiciatis, 
                    optio impedit dolorum nobis illo quibusdam commodi expedita aspernatur modi, 
                    ducimus, maiores iusto similique molestias quam repellendus eum non eligendi facilis odit. Eligendi?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Omnis et assumenda libero minus eaque, magni nobis, veritatis explicabo placeat, 
                    aperiam cupiditate nihil laboriosam nemo! Iure cumque perspiciatis, 
                    optio impedit dolorum nobis illo quibusdam commodi expedita aspernatur modi, 
                    ducimus, maiores iusto similique molestias quam repellendus eum non eligendi facilis odit. Eligendi?
                </p>
            </div>
        </div>
    )
}
