import React, { ReactNode } from "react";
import "../scss/layout.scss";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SnackBar from "./SnackBar";
import { Helmet } from "react-helmet";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout-container">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <NavBar />
      <main className="main-container">{children}</main>
      <SnackBar />
      <Footer />
    </div>
  );
};

export default Layout;
