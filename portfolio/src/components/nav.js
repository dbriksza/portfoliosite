import React, {useState} from "react";
// import {button} from "react-router-dom";
import Modal from "./modal/modal"
import useModal from "./modal/useModal"
import Resume from "./resume/resume"
import "./modal/modal.css";

const NavBar = () => {
    const {isShowing, toggle} = useModal();
    const [modalState, setModalState] = useState();

    return (
        <>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                component={modalState}
            />
            <div>
                <nav>
                    <button onClick={() => (setModalState(<Resume/>), toggle())}>Resume</button>
                    <button to="">Projects</button>
                    <button to="">Contact</button>
                </nav>
            </div>
        </>
    )
}

export default NavBar;