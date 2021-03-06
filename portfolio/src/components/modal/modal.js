import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide, component }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          {console.log("modal is modaling")}
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="navButton"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                  style={{ fontSize: "2rem" }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {component}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
