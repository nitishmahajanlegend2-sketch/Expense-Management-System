/**import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  
  </React.StrictMode>
)*/
/** 
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
*/
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css'
//import 'antd/dist/antd.min.css'
import 'antd/dist/reset.css'
const root = createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
   <App /></BrowserRouter>
    

);