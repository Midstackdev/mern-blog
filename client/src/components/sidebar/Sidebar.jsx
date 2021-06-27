import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './sidebar.css'

export default function Sidebar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const res = await axios.get(`/categories`)
            setCategories(res.data)
        }
        getCategories()
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                    src="https://images.unsplash.com/photo-1621570071671-0a71677965e2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80" 
                    alt="" 
                    className="sidebarImg" 
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Delectus consequuntur tempora corrupti provident harum, similique quidem culpa labore. 
                    Quo exercitationem dolorem quas blanditiis aspernatur fugit perferendis incidunt soluta sunt voluptate.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {categories.map(category => (
                        <Link className="link" key={category._id} to={`/?category=${category.name}`}>
                            <li className="sidebarListItem">{category.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarSocialIcon fab fa-facebook-square"></i>
                <i className="sidebarSocialIcon fab fa-twitter-square"></i>
                <i className="sidebarSocialIcon fab fa-pinterest-square"></i>
                <i className="sidebarSocialIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
