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
                        <Link to="/contact" className='nav-ele'>Contact us</Link>    
                    </div>
                </div>       
            </nav>
        </div>
    );
}

export default Navbar;