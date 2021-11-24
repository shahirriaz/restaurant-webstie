import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="cards__text">
          <h1>Pizzeria Bella åpnet i mars 2020</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam, nostrum consequatur. Officia quibusdam sed facilis
            placeat explicabo quis ullam sequi necessitatibus eos. Natus
            repellat nobis sed assumenda officiis nam eos. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Laboriosam, nostrum consequatur.
            Officia quibusdam sed facilis placeat explicabo quis ullam sequi
            necessitatibus eos. Natus repellat nobis sed assumenda officiis nam
            eos.
          </h4>

          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam, nostrum consequatur. Officia quibusdam sed facilis
            placeat explicabo quis ullam sequi necessitatibus eos. Natus
            repellat nobis sed assumenda officiis nam eos. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Laboriosam, nostrum consequatur.
            Officia quibusdam sed facilis placeat explicabo quis ullam sequi
            necessitatibus eos. Natus repellat nobis sed assumenda officiis nam
            eos.Natus repellat nobis sed assumenda officiis nam eos. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Laboriosam, nostrum
            consequatur. Officia quibusdam sed facilis placeat explicabo quis
            ullam sequi necessitatibus eos. Natus repellat nobis sed assumenda
            officiis nam eos.
          </h4>
        </div>
        <div className="contact__info">
          <h3>TELEFON</h3>
          <h5>+47 12 34 56 78</h5>
          <br></br>
          <h3>E-POST</h3>
          <h5>example@mail.com</h5>
          <br></br>
          <h3>LOKASJONER</h3>
          <h5>
            Karl Johans gate 25 <br></br> 0159, Oslo
          </h5>
          <h5>
            Colbjørnsensgate 13b <br></br> 0256, Oslo
          </h5>
          <h5>
            Havnegata 44 <br></br> 5003, Bergen
          </h5>
          <br></br>
          <h3>ÅPNINGSTIDER</h3>
          <h5>Man-Ons: 11:00-21:00</h5>
          <h5>Torsdag: 11:00-22:00</h5>
          <h5>Fre-Lør: 12:00-22:00</h5>
          <h5>Søndag: 12:00-20:00</h5>
        </div>
      </div>
    </div>
  );
}

export default About;
