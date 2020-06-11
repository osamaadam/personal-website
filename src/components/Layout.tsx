import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import "../scss/layout.scss";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SnackBar from "./SnackBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout-container">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <NavBar />
      <main>{children}</main>
      <SnackBar />
      <Footer />
    </div>
  );
};

export default Layout;
