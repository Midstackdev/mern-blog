import React from 'react'
import { Link } from 'react-router-dom'

import './login.css'

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter your email..." />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password..." />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link to="/register" className="link">Register</Link>
            </button>
        </div>
    )
}
