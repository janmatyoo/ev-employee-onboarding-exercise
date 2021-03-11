import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to='/list'>
                    <li><h1>List</h1></li>
                </Link>
                <Link style={navStyle} to='/add'>
                    <li><h1>Add</h1></li>
                </Link>
                <Link style={navStyle} to='/edit'>
                    <li><h1>Edit</h1></li>
                </Link>
                <Link style={navStyle} to='/delete'>
                    <li><h1>Delete</h1></li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
