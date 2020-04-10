import React from "react";
import "./home.css";

const profile = require("../profile.jpg");

const Home = () => {
  return (
    <div className="home-wrapper">
      <img
        src={profile}
        alt="Osama Adam"
        width="200"
        height="200"
        className="profile-picture"
      />
    </div>
  );
};

export default Home;
