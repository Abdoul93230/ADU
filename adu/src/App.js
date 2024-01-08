import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Test from "./Test";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanne" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
