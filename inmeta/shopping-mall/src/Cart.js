import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, updateItemQuantity, removeItemFromCart, getTotalPrice } =
    useContext(CartContext);
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/register-card"); // 카드 등록 페이지로 이동
  };

  const handleDecreaseQuantity = (itemId, quantity) => {
    if (quantity > 1) {
      updateItemQuantity(itemId, quantity - 1);
    } else {
      removeItemFromCart(itemId); // 수량이 0이 되면 해당 아이템을 삭제
    }
  };

  const totalPrice = getTotalPrice();
  const shippingFee = totalPrice >= 100000 ? 0 : 3000;
  const finalTotal = totalPrice + shippingFee;

  return (
    <div className="cart-container">
      <header className="header">
        <h1>장바구니</h1>
        <Link to="/" className="home-button">
          Home
        </Link>
      </header>
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
                  onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
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
        <p>상품 금액: {totalPrice.toLocaleString()}원</p>
        <p>배송비: {shippingFee.toLocaleString()}원</p>
        <p>총 금액: {finalTotal.toLocaleString()}원</p>
      </div>
      <button className="purchase-button" onClick={handlePurchase}>
        결제하기
      </button>
    </div>
  );
};

export default Cart;
