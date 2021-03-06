import React, { useState } from "react";
// import {button} from "react-router-dom";
import Modal from "./modal/modal";
import useModal from "./modal/useModal";
import Resume from "./resume/resume";
import Projects from "./projects";
import Contact from "./contact/contact";
import "./modal/modal.css";

const NavBar = () => {
  const { isShowing, toggle } = useModal();
  const [modalState, setModalState] = useState();

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle} component={modalState} />
      <div>
        <nav>
          <button
            className="navButton"
            id="resumeButton"
            onClick={() => (setModalState(<Resume />), toggle())}
          >
            Resume
          </button>
          <button
            className="navButton"
            id="projectsButton"
            onClick={() => (setModalState(<Projects />), toggle())}
          >
            Projects
          </button>
          <button
            className="navButton"
            id="contactButton"
            onClick={() => (setModalState(<Contact />), toggle())}
          >
            Contact
          </button>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
