import React from "react";
import Salad2 from "../assets/about-background-image.png"
import Play from "../assets/Vector.png";
import Bg from "../assets/about-background.png";


function About() {
    return (
        <div>
            <img className="bg-about" src={Bg}/>
            <div className="about-flex">
                <div>
                    <img src={Salad2}/>
                </div>
                <div className="about-section-info">
                    <div className="about-section-text">
                        <span>About</span>
                        <h2>Food Is An Important Part Of A Balanced Diet</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
                        <p>Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
                    </div>
                    <div className="btn-flex">
                        <button>Learn More</button>
                            
                        <div className="btn-watch">
                            <img src={Play} />
                            <span>Watch Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;