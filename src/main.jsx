import React from 'react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client"
import './i18n.js';
import "./sass/main.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)