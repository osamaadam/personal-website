import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import "../scss/layout.scss";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useLocation } from "@reach/router";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  return (
    <div className="layout-container">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <NavBar />
      <main className="main-container">{children}</main>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
};

export default Layout;
