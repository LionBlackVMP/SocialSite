import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let dialogsData = [
  { id: 1, name: "Andy" },
  { id: 2, name: "Kate" },
  { id: 3, name: "Silva" },
];
let messagesData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Hola" },
  { id: 3, message: "Hi" },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
