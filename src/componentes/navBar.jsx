import React from "react";
import Logo from "../assets/Logo.svg"
import { Container } from "react-bootstrap";

function NavBar() {
    return (
    <div className="navBar">
        <img src={Logo}/>
        <div className="nav-options">
            <ul className="nav-list">
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#testimonials"><li>Testimonials</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
            <button className="nav-btn">Booking Now</button>
        </div>
    </div>
    );
}

export default NavBar;