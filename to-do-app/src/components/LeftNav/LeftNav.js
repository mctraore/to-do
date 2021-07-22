import React from 'react'
import './LeftNav.css'

const LeftNav = () => {
    return (
        <div className='nav-bar'>
            <h1 className='nav-bar__logo'>To-Do</h1>
            <ul className='nav-bar__items'>
                <li>New Task</li>
                <li>Current Tasks</li>
                <li>Completed Tasks</li>
            </ul>
        </div>
    )
}

export default LeftNav
