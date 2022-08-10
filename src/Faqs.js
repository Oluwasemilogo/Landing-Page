import React from "react";
import Faq from "./Faq";
import "./Faqs.css";

function Faqs() {
  return (
    <div className="faqs">
      <Faq
        question={"What is a bookmark?"}
        answer={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia accusamus dolor deleniti explicabo itaque illum praesentium excepturi expedita sint. Iste fugiat repellendus consectetur blanditiis ipsam laboriosam recusandae dignissimos, quisquam commodi!"
        }
      />
      <Faq
        question={"Is there a mobile App?"}
        answer={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia accusamus dolor deleniti explicabo itaque illum praesentium excepturi expedita sint. Iste fugiat repellendus consectetur blanditiis ipsam laboriosam recusandae dignissimos, quisquam commodi!"
        }
      />
      <Faq
        question={"How can I request a new browser"}
        answer={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia accusamus dolor deleniti explicabo itaque illum praesentium excepturi expedita sint. Iste fugiat repellendus consectetur blanditiis ipsam laboriosam recusandae dignissimos, quisquam commodi!"
        }
      />
      <Faq
        question={"What about other Chromium browser?"}
        answer={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia accusamus dolor deleniti explicabo itaque illum praesentium excepturi expedita sint. Iste fugiat repellendus consectetur blanditiis ipsam laboriosam recusandae dignissimos, quisquam commodi!"
        }
      />
      <button>More info</button>
    </div>
  );
}
export default Faqs;
