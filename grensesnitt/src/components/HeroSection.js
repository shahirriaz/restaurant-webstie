import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";


function HeroSection() {

  return (
    <div className="hero-container">
      <video
        src="/videos/pexels-kampus-production-8627114.mp4"
        autoPlay
        loop
        muted
      />
      <h1>PIZZERIA BELLA</h1>
      <p>BESTILL NÅ</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          PIZZA
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          PASTA
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
