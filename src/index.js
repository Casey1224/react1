import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//   <div>
//     <h1> Does this work instead?</h1>
//     <h5>oh shit it does</h5>

//   </div>
// );
// const title = (
//   <div>
//     <h1> Does this work instead?</h1>
//     <h5>oh shit it does</h5>

//   </div>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(title)

const page = (
  <div className="page">
    <img src={logo} className="App-logo" alt="logo" />
    <b>

      <h1>  Fun facts about react </h1>
    </b>

    <ul>
      <li> Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Meta</li>
      <li> Power thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)
ReactDOM.createRoot(document.getElementById('root'))?.render((page))













// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
