import React from "react";
import "./Features.css";

function Features({ header, text }) {
  return (
    <div className="features_component">
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Features;
