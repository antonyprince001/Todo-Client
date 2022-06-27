import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./src/App.js";

const AppRouting = ()=>{
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
    </Routes>
  </Router>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppRouting />);