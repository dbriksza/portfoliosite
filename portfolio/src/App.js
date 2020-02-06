import React from "react";
import {Route, BrowserRouter as Router} from "react-router-dom";

import Welcome from "./components/welcome"
import NavBar from "./components/nav"
import Resume from "./components/resume/resume"

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Welcome/>
        {/* <Resume/> */}
      </div>
    </Router>
  );
}

export default App;
