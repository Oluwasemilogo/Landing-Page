import React from "react";
import "./Footer.css";
import bookmarklogo from "./SVG/logo-bookmark.svg";
import twitter from "./SVG/icon-twitter.svg";
import facebook from "./SVG/icon-facebook.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="navP">
        <a href="/">
          <img src={bookmarklogo} alt="" />
        </a>
        <a href="/">PRICING</a>
        <a href="/">FEATURES</a>
        <a href="/">CONTACT</a>
      </div>
      <div className="socials">
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
      </div>
    </div>
  );
}

export default Footer;
