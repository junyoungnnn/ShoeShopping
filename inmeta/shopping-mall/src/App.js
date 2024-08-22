import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";
import CardRegistration from "./CardRegistration";
import { CartProvider } from "./CartContext";
import CardList from "./CardList";
import PaymentSuccess from "./PaymentSuccess";

function App() {
  return (
    <CartProvider>
      <Router basename="/ShoeShopping">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register-card" element={<CardRegistration />} />
          <Route path="/cards" element={<CardList />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
