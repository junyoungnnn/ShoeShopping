import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./CardList.css";

const CardList = () => {
  const [cardData, setCardData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCardData = localStorage.getItem("cardData");
    if (storedCardData) {
      setCardData(JSON.parse(storedCardData));
    }
  }, []);

  const handlePaymentSuccess = () => {
    navigate("/payment-success"); // 결제 완료 페이지로 이동
  };

  const handleAddNewCard = () => {
    navigate("/register-card");
  };

  const maskedCardNumber = cardData
    ? `${cardData.cardNumber.slice(0, 8)} **** ****`
    : "#### #### #### ####";

  return (
    <div className="card-list-container">
      <header className="header">
        <h1>보유카드</h1>
        <Link to="/" className="home-button">
          Home
        </Link>
      </header>
      {cardData ? (
        <div className="saved-card">
          <div className="card">
            <p className="card-number">{maskedCardNumber}</p>
            <p className="card-holder">{cardData.cardHolderName}</p>
            <p className="card-expiry">{cardData.expiryDate}</p>
          </div>
          <button className="use-card-button" onClick={handlePaymentSuccess}>
            이 카드로 결제하기
          </button>
        </div>
      ) : (
        <p>등록된 카드가 없습니다.</p>
      )}
      <div className="add-new-card" onClick={handleAddNewCard}>
        <div className="add-card-icon">+</div>
      </div>
    </div>
  );
};

export default CardList;
