import React from "react";
import "./home.css";

const profile = require("../profile.jpg");

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-profile-paper">
        <div className="home-info-area">
          <img src={profile} alt="Osama Adam" className="profile-picture" />
          <div className="home-info">
            <h1>Osama Adam</h1>
            <p>Full Stack Web Developer</p>
          </div>
        </div>
        <div className="home-bio">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            adipisci illo. Tempora quod culpa odio hic eveniet blanditiis, ex
            soluta architecto recusandae corrupti earum non repudiandae,
            adipisci doloribus pariatur quo. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Vero nobis facilis aperiam eligendi
            quasi sit cumque, nihil laboriosam placeat beatae maiores eaque
            suscipit, exercitationem neque excepturi perferendis eius vel
            nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, adipisci illo. Tempora quod culpa odio hic eveniet
            blanditiis, ex soluta architecto recusandae corrupti earum non
            repudiandae, adipisci doloribus pariatur quo. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Vero nobis facilis aperiam
            eligendi quasi sit cumque, nihil laboriosam placeat beatae maiores
            eaque suscipit, exercitationem neque excepturi perferendis eius vel
            nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
