import React, { useState, useEffect } from "react";

// let cancelled = true;
let count = 0;

const TextWriter = (input) => {
  // const [dataText, setDataText] = useState(input)
  // setDataText();
  // var startingText = ["Welcome to my portfolio site...",
  // "My resume is on the table, take a look",
  // "It's right next to the water",
  // "Have a drink if you like",
  // "Don't spill it on my resume... it's my only copy..."];

  count = count + 1;
  let id = `id${count}`;
  console.log(count);
  if (document.getElementById(`id${count - 1}`)) {
    document.getElementById(`id${count - 1}`).remove();
    var textcontainer = document.createElement("span");
    textcontainer.id = id;
    Array.from(document.getElementsByClassName("textanim")).forEach((elem) =>
      elem.appendChild(textcontainer)
    );
  }
  // if(document.getElementById("animtext")){document.getElementById("animtext").disabled = false}
  // var postSpill = ["MY RESUME", "That was my only copy..."];

  let dataText = [];
  dataText = input;

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      if (document.getElementById(id)) {
        document.getElementById(id).innerHTML = text.substring(0, i + 1);
      }

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 2000);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    //    if (typeof dataText[i] == 'undefined'){
    //       setTimeout(function() {
    //         StartTextAnimation(0);
    //       }, 20000);
    //    }
    // check if dataText[i] exists
    if (i < dataText.length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
};

export default TextWriter;
