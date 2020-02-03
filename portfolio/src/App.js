import React from "react";
import {Route, BrowserRouter as Router} from "react-router-dom";

import Welcome from "./components/welcome"

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Welcome/>
      </div>
    </Router>
  );
}

export default App;
