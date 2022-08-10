import React, { useState } from "react";
import "./Tabs.css";
import Tab1 from "./SVG/illustration-features-tab-1.svg";
import Tab2 from "./SVG/illustration-features-tab-2.svg";
import Tab3 from "./SVG/illustration-features-tab-3.svg";
// import { useState } from "react";
import TabPikin from "./TabPikin";
function Tabs() {
  const [change, setchange] = useState(1);
  return (
    <div className="Tabs">
      <div className="tabs_children">
        <p
          onClick={() => {
            setchange(1);
          }}
          className={change === 1 ? "hoverP" : "generalP"}
        >
          Simple Bookmarking
        </p>
        <p
          onClick={() => {
            setchange(2);
          }}
          className={change === 2 ? "hoverP" : "generalP"}
        >
          Speed Searching
        </p>
        <p
          onClick={() => {
            setchange(3);
          }}
          className={change === 3 ? "hoverP" : "generalP"}
        >
          Easy Bookmarking
        </p>
      </div>
      <div className="tabs_content">
        {change === 1 && (
          <TabPikin
            image={Tab1}
            header={"Bookmark in one click"}
            text={
              "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites"
            }
          />
        )}
        {change === 2 && (
          <TabPikin
            image={Tab2}
            header={"Intelligent Search"}
            text={
              "Our powerful search features will help you find saved sites in no time at all. No need to trawwl through all of your bookmarks"
            }
          />
        )}
        {change === 3 && (
          <TabPikin
            image={Tab3}
            header={"Share your Bookmark"}
            text={
              "Easily share your Bookmark and collections with others. Create a shareable link that you can send at the  click of a button"
            }
          />
        )}
      </div>
      <div className="color_blue"></div>
    </div>
  );
}

export default Tabs;
