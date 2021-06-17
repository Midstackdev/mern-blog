import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

import './settings.css'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsImg">
                        <img 
                            src="https://images.unsplash.com/photo-1583391265517-35bbdad01209?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80" 
                            alt="" 
                            className="" 
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsImgIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Al Smith"/>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="smif@gm.com"/>
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button className="setingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
