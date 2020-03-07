import React from "react";
import "./App.css";
// third party
import { BrowserRouter as Router } from "react-router-dom";
// import components
import Home from "./components/main/Home";
import Nav from "./components/main/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Home />
    </Router>
  );
}

export default App;
