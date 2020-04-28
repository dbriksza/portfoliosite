import React from "react";
import Email from "./email";

const Contact = () => {
  const openInNewTab = url => {
    var win = window.open(url, "_blank");
    win.focus();
  };
  return (
    <div className="contactLinks">
      <Email />
      <button
        className="navButton"
        onClick={() => openInNewTab("https://github.com/dbriksza")}
      >
        My Github!
      </button>
      <button
        className="navButton"
        onClick={() =>
          openInNewTab("https://www.linkedin.com/in/daniel-briksza-23a331191/")
        }
      >
        My LinkedIn
      </button>
      <button
        className="navButton"
        onClick={() => openInNewTab("https://twitter.com/BrikszaDaniel")}
      >
        My Twitter!
      </button>
      <button
        className="navButton"
        onClick={() => {
          navigator.clipboard.writeText("dbriksza@gmail.com");
        }}
      >
        Clicking this one will copy my email to your clipboard
        (dbriksza@gmail.com)
      </button>
    </div>
  );
};

export default Contact;
