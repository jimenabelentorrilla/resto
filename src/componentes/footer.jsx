import React from "react";
import LogoFooter from "../assets/LogoFooter.png";
import Twitter from "../assets/Twitter.png";
import LinkedIn from "../assets/LinkedIn.png";
import Youtube from "../assets/Youtube.png";
import Facebook from "../assets/Facebook.png";

function Footer() {
return (
    <>
    <div className="footer-container">
        <div className="section1">
            <div>
                <img src={LogoFooter} />
            </div>
            <div className="iconS">
                <img src={Twitter} />
                <img src={LinkedIn} />
                <img src={Youtube} />
                <img src={Facebook} />
            </div>
        </div>
        <div className="section2">
            <div className="frame5">
                <ul>
                    <a href=""><li className="footer-link">Quality</li></a>
                    <a href=""><li className="footer-link">Help</li></a>
                    <a href=""><li className="footer-link">Share</li></a>
                    <a href=""><li className="footer-link">Carrers</li></a>
                    <a href=""><li className="footer-link">Work</li></a>
                    <a href=""><li className="footer-link">Testimonials</li></a>
                </ul>  
            </div>
            <div className="frame6"> 
                <ul>
                    <li className="footer-link">244-5333-7783</li>
                    <li className="footer-link">hello@food.com</li>
                    <li className="footer-link">press@food.com</li>
                    <li className="footer-link">contact@food.com</li>
                </ul>
            </div>
            <div className="frame7">
                <ul>
                    <li className="footer-link">Terms & Conditions</li>
                    <li className="footer-link">Privacy Policy</li>
                </ul>
            </div>
        </div>
        
    </div>
    </>
);
}

export default Footer;