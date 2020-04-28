import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import BasicWelcome from "./components/basicWelcome";
import NavBar from "./components/nav";
import Resume from "./components/resume/resume";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <BasicWelcome />
        {/* <Resume/> */}
      </div>
    </Router>
  );
}

export default App;
