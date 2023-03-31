import React from "react";

function Contact() {
  return (
    <>
    <div id="contact" className="contact-section"> 
        <h3>Have Question In Mind? Let Us Help You</h3>
        <div className="frame4">
            <input
            type="text"
            id="email"
            name="email"
            placeholder="yourmail@gmail.com" />
        <button>Submit</button>
        </div>  
    </div>

    </>
  );
}

export default Contact;