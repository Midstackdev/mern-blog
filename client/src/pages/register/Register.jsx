import React from 'react'
import { Link } from 'react-router-dom'

import './login.css'

export default function Register() {
    return (
        <div className="login">
            <span className="loginTitle">Register</span>
            <form className="loginForm">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter your username..." />
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter your email..." />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password..." />
                <button className="loginButton">Register</button>
            </form>
            <button className="loginRegisterButton">
                <Link to="/login" className="link">Login</Link>
            </button>
        </div>
    )
}
