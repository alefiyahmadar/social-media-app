import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Contexts/contextProvider"
// Call make Server
makeServer();

const root = createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <ContextProvider >
      <App />
      </ContextProvider>
   
    </Router>
   
  </React.StrictMode>,
  document.getElementById("root")
);
