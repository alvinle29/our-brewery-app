import './App.css';
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Brew from "./components/Brew"
import Home from "./components/Home"
import { AnimatePresence } from "framer-motion";

function App(){
  
  return (
    <div className="App">
      <h1 className="title">OUR BREWERY APP</h1>
      <BrowserRouter>
        
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/brew/:name" element={<Brew />} className="detail-container" />
          </Routes>
        </AnimatePresence>

      </BrowserRouter>
    </div>
  );
}

export default App;
