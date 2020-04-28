import React, { useState, useEffect } from "react";
import TextWriter from "../utils/textwriter";
// import Resume from "./resume/resume"

import table from "../assets/table.png";
import resume from "../assets/resume.png";
import cup from "../assets/cup.png";
import water from "../assets/water.png";

const Welcome = () => {
  // array with texts to type in typewriter
  var nextText = [
    "My resume is on the table, take a look",
    "It's right next to the water",
    "Have a drink if you like",
    "Don't spill it on my resume... it's my only copy...",
  ];

  var postSpill = ["MY RESUME", "That was my only copy..."];

  useEffect(() => {
    TextWriter(nextText);
  }, []);

  const loop = () => {
    setTimeout(function run() {
      Array.from(document.getElementsByClassName("t")).forEach((item) =>
        item.classList.add("wet")
      );
      if (document.getElementById("paper")) {
        document.getElementById("paper").classList.add("paperwet");
      }
      setTimeout(run, 100);
    }, 100);
  };

  const clickHandle = (input) => {
    TextWriter(input);
    document.getElementById("cup").classList.add("fallover");
    document.getElementById("water").classList.add("water");
    loop();
  };

  return (
    <div className="welcome">
      <div id="animtextcontainer" className="textanim">
        {/* the text */}
        <span id="id2" className="text">
          not working
        </span>
      </div>
      <div className="lamp">
        {/* the light */}
        <div id="oval">
          <div id="circle"></div>
        </div>
        <div id="trapezoid"></div>
      </div>
      <div onClick={() => clickHandle(postSpill)}>
        <div
          className="tableset"
          style={{ position: "absolute", bottom: "20%", left: "50%" }}
        >
          {/* the table set */}
          {/* the table */}
          <img
            src={table}
            style={{
              position: "absolute",
              top: "-250px",
              left: "-250px",
              height: "500px",
              width: "500px",
            }}
          />
          {/* the cup */}
          <img
            id="cup"
            src={cup}
            style={{
              position: "absolute",
              top: "-250px",
              left: "-250px",
              height: "500px",
              width: "500px",
              transformOrigin: "200px 200px",
              zIndex: "10",
            }}
          />
          {/* the water */}
          <img
            id="water"
            className="dry"
            src={water}
            style={{
              position: "absolute",
              top: "-260px",
              left: "-220px",
              height: "500px",
              width: "500px",
              zIndex: "5",
              transformOrigin: "200px 200px",
            }}
          />
          {/* the resume */}
          <img
            src={resume}
            style={{
              position: "absolute",
              top: "-250px",
              left: "-250px",
              height: "500px",
              width: "500px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
