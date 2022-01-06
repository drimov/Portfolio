import logo from "./logo.svg";
// import './sass/mystyles.scss';
import "./css/mystyles.css";
import { Section } from "react-bulma-components";

import React from "react";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Skills from "./components/Skills";
import FooterPage from "./components/FooterPage";
// import FormsPage from './components/FormsPage';

function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
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
