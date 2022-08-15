import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CartPage from './components/Cart';
function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          
        </Route>
        <Route path="/cart" element={<CartPage />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
