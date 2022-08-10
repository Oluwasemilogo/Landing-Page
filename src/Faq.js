import React, { useState } from "react";
import "./Faq.css";
import arrowdown from "./SVG/icon-arrow.svg";

function Faq({ question, answer }) {
  const [showanswer, setshowanswer] = useState(false);
  return (
    <div>
      <div className="question">
        <p onClick={() => setshowanswer(true)}>{question}</p>
        {showanswer ? (
          <img
            className="show_icon"
            onClick={() => setshowanswer(false)}
            src={arrowdown}
            alt=""
          />
        ) : (
          <img onClick={() => setshowanswer(true)} src={arrowdown} alt="" />
        )}
      </div>
      {showanswer && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Faq;
