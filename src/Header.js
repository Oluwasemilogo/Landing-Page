import React from "react";
import "./Header.css";
import Hero from "./SVG/illustration-hero.svg";

function Header() {
  return (
    <div className="header_component">
      <div className="text_part">
        <h1 className="headertxt">A Simple Bookmark Manager</h1>
        <p className="app_description">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see sites load instantly. Try it for free.
        </p>
        <button className="geton_chrome">Get it on Chrome</button>
        <button className="geton_firefox">Get it on Firefox</button>
      </div>
      <div className="about_img">
        <img src={Hero} alt="" />
      </div>
      <div className="special_div" />
    </div>
  );
}

export default Header;
