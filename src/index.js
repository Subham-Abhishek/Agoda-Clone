import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./context/Provider";
import {Provider} from "react-redux"
import {store} from "./Bookingreducer/Redux/store"

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
    <Provider store={store}>
      <App />
      </Provider>
    </AppProvider>
  </BrowserRouter>,
  document.getElementById("root")

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//     <App />
//     </Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
