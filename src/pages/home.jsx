import React from "react";
import { Link } from 'react-router-dom';

function Home(){
    return (
        <>
            <div className='hero'>
                <p className="small-left">Engineering the Future</p>
                <h1>SAE</h1>
                <p className="small-right">Society of Automotive Engineers</p>
            </div>

            <div className="socials">
                <Link target="_blank" to="https://www.instagram.com/sae_vit">
                        <img src="./src/assets/insta.png" /><br />
                </Link>
                <Link target="_blank" to="https://www.linkedin.com/company/society-of-automotive-engineers-vit-vellore-/posts/?feedView=all">
                        <img src="./src/assets/linkedin.png" /><br />
                </Link>
                <Link target="_blank" to="https://www.instagram.com/sae_vit">
                        <img src="./src/assets/x.png" />
                </Link>
            </div>
        </>
    );
}

export default Home;