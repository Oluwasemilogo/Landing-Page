import React from "react";
import "./Nav.css";
import bookmarklogo from "./SVG/logo-bookmark.svg";

function Nav() {
  return (
    <div className="navbar">
      <div className="log">
        <img src={bookmarklogo} alt="" />
      </div>
      <ul className="nav_links">
        <li>
          <a href="/">FEATURES</a>
        </li>
        <li>
          <a href="/">PRICING</a>
        </li>
        <li>
          <a href="/">CONTACT</a>
        </li>
        <button className="login_btn">
          <a href="/">LOGIN</a>
        </button>
      </ul>
    </div>
  );
}

export default Nav;
