import React, { ReactNode } from "react";
import "../scss/layout.scss";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SnackBar from "./SnackBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout-container">
      <NavBar />
      <main className="main-container">{children}</main>
      <SnackBar />
      <Footer />
    </div>
  );
};

export default Layout;
