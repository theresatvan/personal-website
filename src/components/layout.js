import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import "@fontsource/josefin-sans";
import "@fontsource/playfair-display";

import Navigation from "./navigation";
import Footer from "./footer";

const Layout = ({ children, pageTitle }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
