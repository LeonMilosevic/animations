import React from "react";
import "./App.css";
// third party
import { BrowserRouter as Router } from "react-router-dom";
// import components
import Display from "./components/main/Display";
import Routes from "./components/routes/Routes";
import Nav from "./components/main/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Display />
      <Routes />
    </Router>
  );
}

export default App;
