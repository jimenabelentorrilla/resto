import React from "react";
import Icon from "../assets/john-doe-image.png";
import Ratings from "../assets/Ratings.png";
function Testimonial() {
  return (
    <>
    <div className="testimonial"> 
        <div className="testimonial-flex">
            <span>Testimonial</span>
            <h3>What They Are Saying</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
        </div>

        <div className="testimonial-card-flex">
            <div className="testimonial-card">
                <img className="testimonial-icon" src={Icon} />
                <p className="testimonial-paragraph">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
                <img src={Ratings} />
                <p className="testimonial-name">John Doe</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default Testimonial;