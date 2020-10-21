import React from 'react'
import './NavBar.css'

import { Link } from 'react-router-dom';



export default function NavBar() {
    return (
        <div className="large_box">
            <div className="left_side">
 
                <Link to="/" className="link">Home</Link>
            </div>
            <div className="right_side">
            <Link to="/projects" className="link">Projects</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/more" className="link">More</Link>
            </div>


        </div>
    )
}