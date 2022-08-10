import React from "react";
import Box from "./Box";
import "./BoxContent.css";
import Chrome from "./SVG/logo-chrome.svg";
import Firefox from "./SVG/logo-firefox.svg";
import Opera from "./SVG/logo-opera.svg";

function BoxContent() {
  return (
    <div className="Boxcontent">
      <div className="box1">
        <Box number={62} header={"Add to Chrome"} image2={Chrome} />
      </div>
      <div className="box2">
        <Box number={55} header={"Add to Firefox"} image2={Firefox} />
      </div>
      <div className="box2">
        <Box number={46} header={"Add to Opera"} image2={Opera} />
      </div>
    </div>
  );
}

export default BoxContent;
