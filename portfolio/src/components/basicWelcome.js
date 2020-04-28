import React, { useState } from "react";
import TextWriter from "../utils/textwriter";
import Welcome from "./welcome";

const BasicWelcome = () => {
  const [animate, setAnimate] = useState(false);
  var startingText = [
    "Welcome to my portfolio site!",
    "I have a short animation prepared",
    "It has some flashing lights, so be careful",
    "Click below to check it out",
    "Or you can just look at the above links",
  ];
  window.onload = TextWriter(startingText);
  const handleClick = () => {
    // document.getElementById("animtextcontainer").remove();
    setAnimate(!animate);
  };
  return (
    <div>
      {animate ? (
        <Welcome />
      ) : (
        <div id="animtextcontainer" className="textanim">
          {/* the text */}
          <span id="id1" className="text">
            not working
          </span>
          <br />
          <button className="navButton" onClick={() => handleClick()}>
            Mild Strobe Light Warning
          </button>
        </div>
      )}
    </div>
  );
};

export default BasicWelcome;
