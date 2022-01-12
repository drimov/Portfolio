import logo from "./logo.svg";
import './sass/mystyles.scss';
// import "./css/mystyles.css";
import { Section } from "react-bulma-components";

import React from "react";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Skills from "./components/Skills";
import FooterPage from "./components/FooterPage";

function App() {
  return (
    <Section id="portfolio">
      <HomePage />
      <About />
      <Skills />
      {/* <MyWork/> */}
      <FooterPage />
    </Section>
  );
}

export default App;
