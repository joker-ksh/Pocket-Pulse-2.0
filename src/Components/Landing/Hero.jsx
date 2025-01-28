import React from "react";
import './Hero.css';  // Importing the CSS file for styling
import Signin from "../Auth/Signin";

function Hero() {
  return (
    <div className="hero-container">
      <div className="quote">
        <p className="quote-text">Turn transaction into transparency</p>
        <p className="additional-text">Discover better ways to manage and track your financial transactions</p>
      </div>

      <div className="auth-section">
        <Signin />
      </div>
    </div>
  );
}

export default Hero;
