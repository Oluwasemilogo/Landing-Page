import React from "react";
import "./TabPikin.css";

function TabPikin({ image, text, header }) {
  return (
    <div className="TabPikin">
      <div className="tabpikin_img">
        <img src={image} alt="" />
      </div>
      <div className="tabpikin_details">
        <h2>{header}</h2>
        <p>{text}</p>
        <button>More info</button>
      </div>
    </div>
  );
}

export default TabPikin;
