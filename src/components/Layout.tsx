import React from "react";
import "../scss/layout.scss";
import { Helmet } from "react-helmet";

let repeatingText = "";
for (let i = 0; i < 500; i++) repeatingText += "Osama Adam ";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <h1 className="repeating-background-text">{repeatingText}</h1>
      <main>{children}</main>
      <footer className="footer" />
    </>
  );
};

export default Layout;
