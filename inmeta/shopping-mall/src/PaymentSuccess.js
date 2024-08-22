import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./PaymentSuccess.css";

const PaymentSuccess = () => {
  const { cartItems, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProductListClick = () => {
    navigate("/");
  };

  const totalPrice = getTotalPrice(); // CartContext에서 총 가격을 가져옴
  const shippingFee = totalPrice >= 100000 ? 0 : 3000;
  const finalTotal = totalPrice + shippingFee;
  const totalItems = cartItems.length; // 장바구니에 담긴 상품의 개수

  return (
    <div className="payment-success-container">
      <header className="header">
        <h1>결제 완료</h1>
      </header>
      <div className="payment-success">
        <h1>결제 완료!</h1>
        <p>총 {totalItems}개의 상품을 구매하였습니다.</p>
      </div>
      <div className="payment-details">
        <h2 className="total-price">총 결제금액</h2>
        <h1 className="amount">{finalTotal.toLocaleString()}원</h1>
      </div>
      <button className="product-list-button" onClick={handleProductListClick}>
        상품 목록 보기
      </button>
    </div>
  );
};

export default PaymentSuccess;
