import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import LoginUserProvider from "./context/Context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <LoginUserProvider>
        <App />
      </LoginUserProvider>
    </HashRouter>
  </React.StrictMode>
);