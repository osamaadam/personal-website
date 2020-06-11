import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import "../scss/four-o-four.scss";

const NotFoundPage = () => (
  <Layout>
    <div className="notfound-container">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <Link to="/">Home</Link>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
