import React from "react";
import Button from 'react-bootstrap/Button';
import MealsImg from "../assets/pick-meals-image.png";
import ChooseImg from "../assets/choose-image.png";
import FastImg from "../assets/delivery-image.png";
function Work() {
  return (
    <>
    <div className="work"> 
        <div className="work-flex">
            <span>Work</span>
            <h3>How It Works</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
        </div>

        <div className="card-flex">
            <div className="caard">
                <img className="img-card" src={MealsImg} />
                <p className="card-title">Pick Meals</p>
                <p className="card-paragraph">Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
            </div>
            <div className="caard">
                <img className="img-card" src={ChooseImg} />
                <p className="card-title">Choose How Often</p>
                <p className="card-paragraph">Lorem ipsum dolor sit amet consectetur. Maecenas orci et </p>
            </div>
            <div className="caard">
                <img className="img-card" src={FastImg} />
                <p className="card-title">Fast Deliveries</p>
                <p className="card-paragraph">Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default Work;