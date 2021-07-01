import axios from 'axios'
import React, { useContext, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'

import './settings.css'

export default function Settings() {
    const { dispatch, user } = useContext(Context)
    const [username, setUsername] = useState(user?.username)
    const [email, setEmail] = useState(user?.email)
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [success, setSuccess] = useState(false)
    const PF = "http://localhost:5000/images/"

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "UPDATE_START"})
        const updateUser = {
            userId: user._id,
            username,
            email,
            password
            
        }
        if(file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append('name', filename)
            data.append('file', file)
            updateUser.profilePicture = filename
            try {
                await axios.post(`/upload`, data)
            } catch (error) {
                
            }
        }
        try {
            const res = await axios.put(`/users/${user._id}`, updateUser)
            setSuccess(true)
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
        } catch (error) {
            dispatch({ type: "UPDATE_FAILURE"})
        }
    }

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsImg">
                        <img 
                            src={file ? URL.createObjectURL(file) : `${PF}${user.profilePicture}`}
                            alt="" 
                            className="" 
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsImgIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder={user.username} value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder={user.email} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="setingsSubmit" type="submit">Update</button>
                    {success && 
                    <span style={{color: 'green', textAlign: 'center', marginTop: '20px'}}
                        >Profile updated
                    </span>}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
