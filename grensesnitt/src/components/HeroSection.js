import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { scroller } from "react-scroll";

const scrollToPizza = () => {
  scroller.scrollTo("menu-container", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const scrollToPasta = () => {
  scroller.scrollTo("end-pizza", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

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
          onClick={scrollToPizza}
        >
          PIZZA
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={scrollToPasta}
        >
          PASTA
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
