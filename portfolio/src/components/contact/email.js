import React, { useState } from "react";
import axios from "axios";

const Email = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const sendEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      axios
        .post("https://portfolio-dbriksza.herokuapp.com/send", { email: email })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setEmail("");
      document.getElementsByTagName("input")[0].placeholder = "Thank You!";
    } else {
      alert("You have entered an invalid email address!");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Your Email..."
        onChange={handleChange}
      />
      <button className="navButton" onClick={sendEmail}>
        Get a copy of my resume emailed to you!
      </button>
      <a href={"https://portfolio-dbriksza.herokuapp.com/resume"}>
        <button className="navButton">Download a copy of my resume!</button>
      </a>
    </div>
  );
};

export default Email;
