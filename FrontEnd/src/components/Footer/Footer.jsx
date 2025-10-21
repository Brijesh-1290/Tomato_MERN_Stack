import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            At Tomato, we're committed to bringing you the freshest ingredients
            and the most delicious dishes right to your door. Whether you're
            craving a savory meal, a sweet treat, or anything in between, our
            diverse menu is designed to satisfy your taste buds with every bite.
            Thank you for choosing Tomato for your food delivery needs. Bon
            appétit!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUNCH</h2>
          <ul>
            <li>9495623188</li>
            <li>Contact@tomato@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Tomato.com - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
