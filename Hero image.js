import "./HeroImageStyles.css";

import React from "react";

import IntroImg from "../Assets/intro-bg.jpg";

import {Link} from "react-router-dom";

const HeroImage = () => {
  return (  
  <div className="hero">
    <div className="mask"> 
      <img className="into-img" src={IntroImg}  alt="IntroImg" />
    </div>
    <div className="content">
        <p>HI, I'M A STUDENT</p>
        <h1>Full Stack Developer</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
</div>
  );
};

export default HeroImage;
