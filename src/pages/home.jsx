import React from "react";
import { Link } from 'react-router-dom';

function Home(){
    return (
        <>
            <div className='hero'>
                <p className="small-left">Engineering the Future</p>
                <h1>SAE-VIT</h1>
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

            <div className="team">
                <div className="team-det">
                    <h2>Meet the Squad</h2>
                    <p>Flarmity shongo blipster wazzle cronked through the zindleberry fog while truffins giggled sideways.Plimble snorfed a quasar muffin and jangled the sprocket of lumpledrift curiosity.Wibberwob clocks melted into flanterdash puddles beneath a yondering sky of prizzle. Cranklethorpe fiddled the zazzaroo switch and unleashed seventeen wobbleflutes of sparklegrime. Snizzlepop harmony fluttered onward, bembling the universe with a whooshle of perplexity.
</p>
                </div>
                <div>
                    <img src = "./src/assets/team.jpeg" className="team-img"/>
                </div>
            </div>
        </>
    );
}

export default Home;