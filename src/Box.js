import React from "react";
import "./Box.css";
import design from "./SVG/bg-dots.svg";

function Box({ image2, header, number }) {
  return (
    <div className="Box">
      <img src={image2} alt="" />
      <h3> {header}</h3>
      <p>{`Minimum version ${number}`}</p>
      <img src={design} alt="" />
      <button>Add & install Extension</button>
    </div>
  );
}

export default Box;
