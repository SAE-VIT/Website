import React, {useState} from 'react'
import './index.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <div>
            <nav>   
                <div className='navbar'>
                    <Link to="/">
                        <img className='image' src="./src/assets/sae-logo.png" />
                    </Link>
                    <div className='nav-det'>
                        <Link to="/blogs" className='nav-ele'>Blogs</Link>
                        <Link to="/events" className='nav-ele'>Events</Link>
                        <Link to="/about" className='nav-ele'>About us</Link>
                        <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtsWDLpjvgVLZFCWHWDHMVSJlkHPZJccRvBZQQdsrWpWDJvbZhLKHqQZJFxLjxPdqVbNTG" className='nav-ele'>Contact us</a>       
                    </div>
                </div>       
            </nav>
        </div>
    );
}

export default Navbar;