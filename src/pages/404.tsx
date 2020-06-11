import { Link } from "gatsby";
import React from "react";
import "../scss/four-o-four.scss";

const NotFoundPage = () => (
  <div className="notfound-container">
    <div className="notfound">
      <div className="notfound-404">
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default NotFoundPage;
