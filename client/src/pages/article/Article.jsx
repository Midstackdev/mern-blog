import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Read from '../../components/read/Read'

import './article.css'

export default function Article() {
    return (
        <div className="article">
            <Read />
            <Sidebar />
        </div>
    )
}
