import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  LoadLangagesProg  from './components/LoadLangagesProg';
import FormsPage from './components/FormsPage';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.body
);

ReactDOM.render(
    <LoadLangagesProg/>,
  document
  .getElementById("competences_page")
  .getElementsByClassName("card")[2]
  .getElementsByClassName("content")[1]
  );

  
ReactDOM.render(
  <FormsPage/>,
document
.getElementById("form_bg")
.getElementsByClassName("content")[0]
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
