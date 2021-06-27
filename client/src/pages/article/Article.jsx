import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import Sidebar from '../../components/sidebar/Sidebar'
import Read from '../../components/read/Read'

import './article.css'

export default function Article() {
    const location = useLocation()
    const path = (location.pathname.split('/')[2])
    const [post, setPost] = useState()

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/posts/${path}`)
            setPost(res.data)
        }
        getPost()
    }, [path])
    return (
        <div className="article">
            <Read post={post}/>
            <Sidebar />
        </div>
    )
}
