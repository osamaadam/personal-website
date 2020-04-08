import React from "react";
import "./home.css";

const profile = require("../profile.jpg") as string;

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-info">
        <img src={profile} alt="Osama Adam" className="home-photo" />
        <h1 className="home-name">Osama Adam</h1>
        <p className="home-tag">
          <span className="highlight">Full Stack Web Developer</span>
        </p>
      </div>
      <div className="home-content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          voluptatibus debitis maxime at unde accusantium itaque eligendi
          molestiae, rerum veniam, dolor porro! Ad, necessitatibus quasi
          voluptatum dicta officiis praesentium quas. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Inventore deserunt, excepturi dolor
          dolores sint, accusamus vel fugit eos, consequatur eveniet placeat aut
          assumenda sed facere quam sapiente hic incidunt saepe?Lorem, ipsum
          dolor dolores sint, accusamus vel fugit eos, consequatur eveniet
          placeat aut assumenda sed facere quam sapiente hic incidunt
          saepe?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit, voluptatibus debitis maxime at unde accusantium itaque
          eligendi molestiae, rerum veniam, dolor porro! Ad, necessitatibus
          quasi voluptatum dicta officiis praesentium quas. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Inventore deserunt, excepturi
          dolor dolores sint, accusamus vel fugit eos, consequatur eveniet
          placeat aut assumenda sed facere quam sapiente hic incidunt saepe?
        </p>
      </div>
    </div>
  );
};

export default Home;
