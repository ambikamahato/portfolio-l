import React from "react";
import '../index.css';// Using Double dots


const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Ambika Prasad Mahato</h1>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Skills</a>
                <a href="#">Qualifications</a>

            </div>
        </div>
    )
}

export default Navbar;