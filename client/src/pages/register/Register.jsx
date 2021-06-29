import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './login.css'

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`/auth/register`, {
                email,
                username,
                password
            })
            res.data && window.location.replace('/login')
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="login">
            <span className="loginTitle">Register</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input 
                    type="text" 
                    placeholder="Enter your username..." 
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                />
                <label htmlFor="">Email</label>
                <input 
                    type="email" 
                    placeholder="Enter your email..." 
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <label htmlFor="">Password</label>
                <input 
                    type="password" 
                    placeholder="Enter your password..."
                    onChange={e => setPassword(e.target.value)}
                    value={password} 
                />
                <button className="loginButton" type="submit">Register</button>
            </form>
            <button className="loginRegisterButton">
                <Link to="/login" className="link">Login</Link>
            </button>
        </div>
    )
}
