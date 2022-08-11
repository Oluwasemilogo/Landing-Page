import React, { useState } from "react";
import "./Nav.css";
import bookmarklogo from "./SVG/logo-bookmark.svg";
import hamburger from "./SVG/icon-hamburger.svg";
// import close from "./SVG/icon-close.svg";

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="navbar">
      <div className="log">
        <img src={bookmarklogo} alt="" />
      </div>
      <ul
        className={isMobile ? "nav_links_mobile" : "nav_links"}
        onClick={() => setIsMobile(false)}
      >
        <li className="features">
          <a href="/">FEATURES</a>
        </li>
        <li>
          <a href="/">PRICING</a>
        </li>
        <li>
          <a href="/">CONTACT</a>
        </li>
        <li>
          <a href="/">LOG IN</a>
        </li>
      </ul>
      <div className="mobile_menu" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <button className="Close">X</button>
        ) : (
          <img src={hamburger} alt="" />
        )}
      </div>
    </div>
  );
}

export default Nav;
