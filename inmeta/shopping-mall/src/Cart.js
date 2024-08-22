import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, updateItemQuantity, getTotalPrice } =
    useContext(CartContext);
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/register-card");
  };

  return (
    <div className="cart-container">
      <h1>장바구니</h1>
      <p>현재 {cartItems.length}개의 상품이 담겨있습니다.</p>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.description} />
            <div className="item-details">
              <h2>{item.brand}</h2>
              <p className="price">{item.price}</p>
              <div className="quantity-controls">
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="summary">
        <p>상품 금액: {getTotalPrice().toLocaleString()}원</p>
        <p>배송비: 3,000원</p>
        <p>총 금액: {(getTotalPrice() + 3000).toLocaleString()}원</p>
      </div>
      <button className="purchase-button" onClick={handlePurchase}>
        결제하기
      </button>
    </div>
  );
};

export default Cart;
