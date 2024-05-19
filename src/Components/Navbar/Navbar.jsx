import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <ul className='nav_menu'>
                <li href="home">Home</li>
                <li href="about">About Me</li>
                <li href="experience">Experience</li>
                <li href="skills">Skills</li>
                <li href="contact">Contact</li>
            </ul>
            <div className="nav_connect">Link With Me</div>
        </div>
    )
}
export default Navbar;