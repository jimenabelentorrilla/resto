import React from "react";
import HomeBanner from "../assets/home-banner-image.png";
function HomePage() {
    return (
        <div className="home-flexx">
            <div className="home-flex">
                <h1 className="home-title">Your Favourite Food Delivered Hot & Fresh</h1>
                <p className="home-paragraph">Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.</p>
                <button className="home-btn">Order Now</button>
            </div>
            <div>
                <img src={HomeBanner}/>
            </div>
        </div>
    );
}

export default HomePage;