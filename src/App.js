import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/home";
import Kontakt from "./components/kontakt";
import Faktury from "./components/faktury";
import Odczyty from "./components/odczyty";
import Dokumenty from "./components/dokumenty";
import "./App.css";

const menu = [
  {
    link: "/",
    name: "home",
    comp: < Home />
  },
  {
    link: "/faktury",
    name: "faktury",
    comp: < Faktury />
  },
  {
    link: "/dokumenty",
    name: "dokumenty",
    comp: <Dokumenty />
  },
  {
    link: "/odczyty",
    name: "odczyty",
    comp: <Odczyty />
  },
  {
    link: "/kontakt",
    name: "kontakt",
    comp: <Kontakt />
  },
];

function App() {
  return (
    <Router>
      <div className="container">
        <div className="wrapper">
          {menu.map(({ name, link }) => (
            <ul>
              <li>
                <Link to={link}>{name}</Link>
              </li>
            </ul>
          ))}
        </div>
        <div className="component">  
        <h1> aaaaaaaaaaa </h1>
          {menu.map(({link, comp }) => {
          <>
            <Routes>
              <Route path={link} component={comp}></Route>
            </Routes>;
           </>})}
        </div>
      </div>
    </Router>
  );
}

export default App;