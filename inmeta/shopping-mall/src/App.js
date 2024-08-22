import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";
import CardRegistration from "./CardRegistration";
import { CartProvider } from "./CartContext";
import CardList from "./CardList";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register-card" element={<CardRegistration />} />
          <Route path="/cards" element={<CardList />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
